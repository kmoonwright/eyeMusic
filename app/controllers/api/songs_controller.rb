class Api::SongsController < ApplicationController

    def index
        @songs = Song.all.includes(:album)
        render :index
    end

    def show
        @song = Song.find_by(id: params[:id])
        render :show
    end

    private
    def song_params
        params.require(:song).permit(:title, :audio)
    end
end