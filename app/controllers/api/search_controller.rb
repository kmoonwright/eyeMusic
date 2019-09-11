class Api::SearchController < ApplicationController

    def search
        search_term = params[:search_term]
        @songs = Song.where('lower(title) like ?', "%#{search_term.downcase}%")
        @artists = Artist.where('lower(title) like ?', "%#{search_term.downcase}%")
        @albums = Albums.where('lower(title) like ?', "%#{search_term.downcase}%")
        @playlists = Playlist.where('lower(title) like ?', "%#{search_term.downcase}%")
        render :index
    end

    private
    def playlist_params
        params.require(:playlist).permit(:title, :user_id)
    end
    
end