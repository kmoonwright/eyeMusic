class Api::AlbumsController < ApplicationController
    
    def index
        @albums = Album.all.includes(:artist)
    end

    def show
        @album = Album.find_by(id: params[:id])
    end

    private
    def album_params
        params.require(:album).permit(:title, :image)
    end
end