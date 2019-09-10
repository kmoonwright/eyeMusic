json.extract! @album, :id, :title, :artist_id

if @album.image.attached?
    json.imageUrl url_for(@album.image)
end