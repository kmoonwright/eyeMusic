@albums.each do |album|
    json.set! album.id do
        json.extract! album, :id, :title, :year, :artist_id
        json.imageUrl url_for(album.image)
    end
end