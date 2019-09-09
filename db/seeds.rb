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
# PlaylistSong.destroy_all

##### USERS #####

demoUser = User.create(username: 'demoUser', password: '123456')
test = User.create(username: 'test',  password: '123456')
test2 = User.create(username: 'test2',  password: '123456')


##### MUSIC #####
#####
# Daft Punk
#####
daftpunk = Artist.create(name:'Daft Punk')
# daftpunk_photo = open('https://eyemusic-seeds.something')
# daftpunk.photo.attach(io:daftpunk_photo, filename:'Something.jpg')

discovery = Album.create(title:'Discovery', artist_id: daftpunk.id, year:'2001')

somethingaboutus = Song.create(title:'Something About Us', album_id: discovery.id)
somethingaboutus_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/SomethingAboutUs.m4a')
somethingaboutus.audio.attach(io:somethingaboutus_audio, filename:'SomethingAboutUs.m4a')

#####
# Jimi Hendrix
#####
jimihendrixexperience = Artist.create(name:'Jimi Hendrix Experience')
# jimihendrixexperience_photo = open('https://eyemusic-seeds.something')
# jimihendrixexperience.photo.attach(io:jimihendrixexperience_photo, filename:'Something.jpg')

areyouexperienced = Album.create(title:'Are You Experienced?', artist_id: jimihendrixexperience.id, year:'1967')

manicdepression = Song.create(title:'Manic Depression', album_id: areyouexperienced.id)
manicdepression_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/ManicDepression.m4a')
manicdepression.audio.attach(io:manicdepression_audio, filename:'ManicDepression.m4a')

#####
# Prince
#####
prince = Artist.create(name:"Prince")
# prince_photo = open('https://eyemusic-seeds.something')
# prince.photo.attach(io:prince_photo, filename:'Something.jpg')

nineteenninetynine = Album.create(title:'1999', artist_id: prince.id, year:'1999')

trust = Song.create(title:"Trust", album_id: nineteenninetynine.id)
trust_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/Trust.MP3')
trust.audio.attach(io:trust_audio, filename:'Trust.MP3')

