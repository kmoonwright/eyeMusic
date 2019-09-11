artist_ids = []
json.artists do
    @artists.each do |artist|
        artist_ids.push(artist.id)
        json.set! artist.id do
            json.extract! artist, :id, :name
            json.photo url_for(artist.photo)
        end
    end
end

album_ids = []
json.albums do
    @albums.each do |album|
        album_ids.push(album.id)
        json.set! album.id do
            json.extract! album, :id, :title, :artist_id, :year
            json.image url_for(album.image)
        end
    end
end

playlist_ids = []
json.playlists do
    @playlists.each do |playlist|
        playlist_ids.push(playlist.id)
        json.set! playlist.id do
            json.extract! playlist, :id, :title, :user_id
        end
    end
end


json.search_ids do 
    json.artist_ids artist_ids
    json.album_ids album_ids
    json.playlist_ids playlist_ids
end