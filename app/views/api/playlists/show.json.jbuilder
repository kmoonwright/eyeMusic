json.playlist do
    json.extract! @playlist, :id, :title, :user_id
end

json.songs do
    @playlist.songs.each do |song|
        json.set! song.id do
            json.extract! song, :id, :title, :album_id
            json.artist song.artist.name
            json.artist_id song.artist.id
            json.album song.album.title
        end
    end
end

json.artists do
    @playlist.artists.each do |artist|
        json.set! artist.id do
            json.extract! artist, :id, :name, :photo
            json.photo url_for(artist.photo)
        end
    end
end

json.albums do
    @playlist.albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :title, :image, :artist_id
            json.image url_for(album.image)
        end
    end
end

json.playlist_songs do
    @playlist.playlist_songs.each do |playlist_song|
        json.set! playlist_song.id do
            json.extract! playlist_song, :id, :song_id, :playlist_id
        end
    end
end