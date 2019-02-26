Yt.configure do |config|
  config.api_key = Figaro.env.youtube_key
  config.log_level = :debug
end
