# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

# DESTROY EVERYTHING

User.destroy_all
Song.destroy_all
Album.destroy_all
Artist.destroy_all
Playlist.destroy_all
PlaylistSong.destroy_all

# USERS

demoUser = User.create(username: 'demoUser', password: '123456')
test = User.create(username: 'test',  password: '123456')
test2 = User.create(username: 'test2',  password: '123456')

# Daft Punk
daftpunk = Artist.create(name:'Daft Punk')

discovery = Album.create(name:'Discovery', artist_id: daftpunk.id)

somethingaboutus = Song.create(title:'Something About Us', album_id: discovery.id)
somethingaboutus_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/SomethingAboutUs.m4a')
somethingaboutus.audio.attach(io:somethingaboutus_audio, filename:'SomethingAboutUs.m4a')

# Jimi Hendrix
jimihendrixexperience = Artist.create(name:'Jimi Hendrix Experience')

areyouexperienced = Album.create(name:'Are You Experienced?', artist_id: jimihendrixexperience.id)

manicdepression = Song.create(title:'Manic Depression', album_id: areyouexperienced.id)

# Prince

prince = Artist.create(name:"Prince")

nineteenninetynine = Album.create(title:"1999", artist_id: prince.id)

trust = Song.create(title:"Trust", album_id: nineteenninetynine.id)

