json.playlist do
    json.extract! @playlist, :id, :title, :user_id
end

json.artists do
    @playlist.artists.each do |artist|
        json.set! artist.id do
            json.extract! artist, :id, :name
        end
    end
end

json.albums do
    @playlist.albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :title
            json.image url_for(album.image)
        end
    end
end

json.songs do
    @playlist.songs.each do |song|
        json.set! song.id do
            json.extract! song, :id, :name
            json.artist song.artist.name
            json.artist_id song.artist.id
            json.album song.album.title
        end
    end
end

