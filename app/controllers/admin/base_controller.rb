class Admin::BaseController < ActionController::Base
  layout 'admin'

  include Pundit
  protect_from_forgery

  before_action :authenticate_user!
  before_action :user_not_authorized

  private

  # Redirects the browser to the page that issued the request (the referrer) if possible,
  # otherwise redirects to the root location.
  def user_not_authorized
    return if current_user.admin
    redirect_to root_path
    flash[:alert] = "Not authorized!"
  end
end
