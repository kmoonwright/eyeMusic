@artists.each do |artist|
    json.set! artist.id do
        json.extract! artist, :id, :name
        json.photoUrl url_for(artist.photo)
    end
end