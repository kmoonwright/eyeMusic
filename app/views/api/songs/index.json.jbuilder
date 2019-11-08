@songs.each do |song|
    json.set! song.id do
        json.extract! song, :id, :title, :album_id, :artist, :album
        json.audioUrl url_for(song.audio)
    end
end