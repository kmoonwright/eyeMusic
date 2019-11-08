@songs.each do |song|
    json.set! song.id do
        json.extract! song, :id, :title, :album_id, :artist, :album
        json.audioUrl url_for(song.audio)
        json.artistName song.artist.name
        json.albumTitle song.album.title
    end
end