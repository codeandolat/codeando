class Post < ApplicationRecord
  acts_as_paranoid
  acts_as_taggable
  acts_as_votable
  has_one_attached :image

  include AASM

  extend FriendlyId
  friendly_id :title, :use => [:slugged, :finders]

  validates :title, :subtitle, presence: true

  belongs_to :author, class_name: 'User', foreign_key: 'user_id', counter_cache: true

  scope :published, -> { where(state: 'published') }
  scope :last_published, -> { published.order(created_at: :desc) }
  scope :without_videos, -> { where(youtube_id: nil).order(created_at: :desc) }

  aasm column: 'state' do
    state :draft, initial: true
    state :verified
    state :published
    state :rejected

    event :verify do
      transitions from: [:draft, :rejected], to: :verified, guard: :post_completed?
    end

    event :reject do
      transitions from: :draft, to: :rejected
    end

    event :publish do
      transitions from: :verified, to: :published
    end

    event :deprecate do
      transitions from: :published, to: :draft
    end
  end

  def post_completed?
    content.present? || youtube_id.present?
  end

  private

  # Change slug if post title change
  def should_generate_new_friendly_id?
    title_changed?
  end
end
