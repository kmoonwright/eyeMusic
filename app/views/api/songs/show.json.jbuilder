json.extract! @song, :id, :title, :album_id

if @song.audio.attached?
    json.audio url_for(@song.audio)
end