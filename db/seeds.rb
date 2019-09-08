# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



demoUser = User.create(username: 'demoUser', password: '123456')
test = User.create(username: 'test',  password: '123456')
test = User.create(username: 'test5',  password: '123456')

testArtist1 = Artist.create(name:"Prince")
testArtist2 = Artist.create(name:"Daft Punk")
testArtist3 = Artist.create(name:"Jimi Hendrix Experience")
testAlbum1 = Album.create(title:"1999", artist_id: testArtist1.id)
testAlbum2 = Album.create(title:"Discovery", artist_id: testArtist2.id)
testAlbum3 = Album.create(title:"Are You Experienced?", artist_id: testArtist3.id)
testSong1 = Song.create(title:"D.M.S.R", album_id: testAlbum1.id)
testSong2 = Song.create(title:"One More Time", album_id: testAlbum2.id)
testSong3 = Song.create(title:"Manic Depression", album_id: testAlbum3.id)
