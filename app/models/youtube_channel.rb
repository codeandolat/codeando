class YoutubeChannel
  def initialize
    @channel = Yt::Channel.new(
      id: Figaro.env.youtube_channel
    )
  end

  def playlists
    @channel.playlists
  end

  def playlist(playlist_id)
    Yt::Playlist.new(id: playlist_id)
  end

  def playlist_items(playlist_id)
    Yt::Playlist.new(id: playlist_id).playlist_items
  end

  def all_videos
    @channel.videos
  end
end
