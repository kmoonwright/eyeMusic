class Api:PlaylistsController < ApplicationController

    def index
        @playlists = Playlist.all
    end

    def show
        @playlist = Playlist.find_by(id: params[:id])
    end

    # def create
    # end

    # def destroy
    # end

end