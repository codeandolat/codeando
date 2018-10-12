class Post < ApplicationRecord
  acts_as_paranoid

  belongs_to :user, counter_cache: true
end
