json.extract! @artist, :id, :name

if @artist.photo.attached?
    json.photoUrl url_for(@artist.photo)
end