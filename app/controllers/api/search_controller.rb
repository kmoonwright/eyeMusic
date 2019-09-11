 class Api::SearchController < ApplicationController
    def show
        if params[:id] == ""
            @artists = []
        else
            str = "%#{params[:id]}%"
            @artists = Artist.where("UPPER(artists.name) LIKE UPPER(:query)", query: str)
            @artists = @artists.uniq

            @albums = Album.joins("JOIN songs ON songs.album_id = albums.id")
                .where("UPPER(albums.title) LIKE UPPER(:query) OR UPPER(songs.title) LIKE UPPER(:query)", query: str)
            @albums = @albums.uniq

            @playlists = Playlist.joins("JOIN playlists_songs ON playlists_songs.playlist_id = playlists.id")
                .joins("JOIN songs ON playlists_songs.song_id = songs.id")
                .where("UPPER(playlists.title) LIKE UPPER(:query) OR UPPER(songs.title) LIKE UPPER(:query)", query: str)
            @playlists = @playlists.uniq
        end
        render :show
    end

 end

    # def search
    #     search_term = params[:search_term]
    #     @songs = Song.where('lower(title) like ?', "%#{search_term.downcase}%")
    #     @artists = Artist.where('lower(title) like ?', "%#{search_term.downcase}%")
    #     @albums = Albums.where('lower(title) like ?', "%#{search_term.downcase}%")
    #     @playlists = Playlist.where('lower(title) like ?', "%#{search_term.downcase}%")
    #     render :index
    # end

    # private
    # def playlist_params
    #     params.require(:playlist).permit(:title, :user_id)
    # end
    