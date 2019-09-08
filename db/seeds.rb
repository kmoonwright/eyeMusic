# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# DESTROY EVERYTHING

User.destroy_all
Song.destroy_all
Album.destroy_all
Artist.destroy_all
Playlist.destroy_all
PlaylistSong.destroy_all

# USERS

# demoUser = User.create(username: 'demoUser', password: '123456')
# test = User.create(username: 'test',  password: '123456')
# test = User.create(username: 'test5',  password: '123456')

# Daft Punk
daftpunk = Artist.create(name:'Daft Punk')

discovery = Album.create(name:'Discovery', artist_id: daftpunk.id)

onemoretime = Song.create(title:'One More Time', album_id: testAlbum2.id)

# Jimi Hendrix
jimihendrixexperience = Artist.create(name:'Jimi Hendrix Experience')

areyouexperienced = Album.create(name:'Are You Experienced?', artist_id: jimihendrixexperience.id)

manicdepression = Song.create(title:'Manic Depression', album_id: areyouexperienced.id)

# Prince

prince = Artist.create(name:"Prince")

nineteenninetynine = Album.create(title:"1999", artist_id: prince.id)

dmsr = Song.create(title:"D.M.S.R", album_id: nineteenninetynine.id)

