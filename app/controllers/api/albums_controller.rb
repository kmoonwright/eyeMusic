class Api::AlbumsController < ApplicationController
    
    def index
        @albums = Album.all.includes(:artist)
    end

    def show
        @album = Album.find_by(id: params[:id])
    end

    def search
        search_term = params[:search_term]
        @albums = Album.where('lower(title) like ?', "%#{search_term.downcase}%").limit(5)
        render :index
    end

    private
    def album_params
        params.require(:album).permit(:title, :image)
    end
end