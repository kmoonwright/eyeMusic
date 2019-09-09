@songs.each do |song|
    json.extract! song, :id, :title, :album_id
    json.audioUrl url_for(song.audio)
end