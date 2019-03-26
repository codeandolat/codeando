class TutorialsController < ApplicationController
  def index
    @tags = Post.only_videos.tag_counts_on(:tags)
  end
end
