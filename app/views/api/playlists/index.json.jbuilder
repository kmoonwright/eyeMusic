@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :id, :title, :user_id
        json.username playlist.user.username
    end
end