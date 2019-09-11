class Api::PlaylistSongsController < ApplicationController

    def create
        @playlist_song = PlaylistSong.new(playlist_songs_params)
        if @playlist_song.save
            render "api/playlist_songs/show"
        else
            render json: @playlist_song.errors.full_messages
        end
    end

    def destroy
        @playlist_song = PlaylistSong.find(params[:id])
        if @playlist_song
            @playlist_song.destroy
        else
            render @playlist_song.errors.full_messages
        end
    end

    private
    def playlist_songs_params
        params.require(:playlist_song).permit(:playlist_id, :song_id)
    end

end