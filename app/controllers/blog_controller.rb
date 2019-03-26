class BlogController < ApplicationController
  def index
    @tags = Post.without_videos.tag_counts_on(:tags)
  end
end
