class PlaylistsController < ApplicationController
  def index
    @playlists = youtube_channel.playlists
  end

  def show
    @playlist = youtube_channel.playlist(params[:playlist_id])
  end

  private

  def youtube_channel
    YoutubeChannel.new
  end
end
