module ApplicationHelper
  # helper for all kind of flash messages
  def flash_class(level)
    case level.to_sym
    when :notice then "notification is-info"
    when :success then "notification is-success"
    when :error then "notification is-danger"
    when :alert then "notification is-warning"
    end
  end

  def state_button(post)
    if @post.draft? || @post.rejected?
      link_to 'Verify',
              verify_admin_post_path(@post),
              method: :post,
              class: 'button is-success is-outlined'
    elsif @post.verified?
      link_to 'Publish',
              publish_admin_post_path(@post),
              method: :post,
              class: 'button is-success'
    elsif @post.published?
      link_to 'Deprecate',
              deprecate_admin_post_path(@post),
              method: :post,
              class: 'button is-danger is-outlined'
    end
  end
end
