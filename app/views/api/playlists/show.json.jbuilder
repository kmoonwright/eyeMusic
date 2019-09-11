json.playlist do
    json.extract! @playlist, :id, :name, :user_id
end

json.songs do
    @playlist.songs.each do
        json.extract! song, :id, :title, :album_id
        json.artist song.artist.name
        json.artist_id song.artist.id
        json.album song.album.title
    end
end