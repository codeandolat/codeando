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
end
