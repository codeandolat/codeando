class Admin::HomeController < Admin::BaseController
  def index
    @posts = Post.all
    @users = User.all
  end
end
