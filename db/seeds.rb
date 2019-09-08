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

testSong = Song.create(title:"D.M.S.R")
testArtist = Artist.create(name:"Prince")
testAlbum = Album.create(title:"1999")
