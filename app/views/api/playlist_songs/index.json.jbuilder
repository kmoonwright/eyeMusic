@playlist_songs.each do |playlist_song|
    json.set! playlist_song.id do
        json.extract! playlist_song, :id, :song_id, :playlist_id
        json.song_id playlist_song.song_id
        json.playlist_id playlist_song.playlist_id
    end
end