@artists.each do |artist|
    json.set! artist.id do
        json.extract! artist, :id, :name, :albums, :songs
        json.photoUrl url_for(artist.photo)
    end
end