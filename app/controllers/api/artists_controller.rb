class Api::ArtistsController < ApplicationController

    def index
        @artists = Artist.all.includes(:albums)
    end

    def show
        @artist = Artist.find_by(id: params[:id])
    end

    def search
        search_term = params[:search_term]
        @artists = Artist.where('lower(name) like ?', "%#{search_term.downcase}%")
        render :index
    end

    private
    def artist_params
        params.require(:artist).permit(:name, :photo)
    end
end