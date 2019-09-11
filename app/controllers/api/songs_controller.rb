class Api::SongsController < ApplicationController

    def index
        @songs = Song.all.includes(:album)
        # render :index
    end

    def show
        @song = Song.find_by(id: params[:id])
        render :show
    end

    def search
        search_term = params[:search_term]
        @songs = Song.where('lower(title) like ?', "%#{search_term.downcase}%").limit(5)
        render :index
    end

    private
    def song_params
        params.require(:song).permit(:title, :audio)
    end
end