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
daftpunk_photo = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/photo-daftpunk.jpg')
daftpunk.photo.attach(io:daftpunk_photo, filename:'photo-daftpunk.jpg')


discovery = Album.create(title:'Discovery', artist_id: daftpunk.id, year:'2001')
discovery_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-daftpunk-discovery.jpg')
discovery.image.attach(io:discovery_photo, filename:'album-daftpunk-discovery.jpg')

homework = Album.create(title:'Homework', artist_id: daftpunk.id, year:'1997')
homework_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-daftpunk-homework.jpg')
homework.image.attach(io:homework_image, filename:'album-daftpunk-homework.jpg')

randomaccessmemories = Album.create(title:'Random Access Memories', artist_id: daftpunk.id, year:'2013')
randomaccessmemories_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-daftpunk-ram.jpg')
randomaccessmemories.image.attach(io:randomaccessmemories_image, filename:'album-daftpunk-ram.jpg')


somethingaboutus = Song.create(title:'Something About Us', album_id: discovery.id)
somethingaboutus_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-daftpunk-SomethingAboutUs.m4a')
somethingaboutus.audio.attach(io:somethingaboutus_audio, filename:'audio-daftpunk-SomethingAboutUs.m4a')

aroundtheworld = Song.create(title:'Around the World', album_id: homework.id)
aroundtheworld_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-daftpunk-aroundtheworld.mp3')
aroundtheworld.audio.attach(io:aroundtheworld_audio, filename:'audio-daftpunk-aroundtheworld.mp3')

instantcrush = Song.create(title:'Instant Crush feat. Julian Casablancas', album_id: randomaccessmemories.id)
instantcrush_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-daftpunk-instantcrush.m4a')
instantcrush.audio.attach(io:instantcrush_audio, filename:'audio-daftpunk-instantcrush.m4a')


#####
# David Bowie
#####
bowie = Artist.create(name:"David Bowie")
bowie_photo = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/photo-davidbowie.jpg')
bowie.photo.attach(io:bowie_photo, filename:'photo-davidbowie.jpg')

letsdancealbum = Album.create(title:'Let\'s Dance', artist_id: bowie.id, year:'1983')
letsdancealbum_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-davidbowie-letsdance.jpg')
letsdancealbum.image.attach(io:letsdancealbum_image, filename:'album-davidbowie-letsdance.jpg')

letsdancesong = Song.create(title:"Let\'s Dance", album_id: letsdancealbum.id)
letsdancesong_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-db-LetsDance.m4a')
letsdancesong.audio.attach(io:letsdancesong_audio, filename:'audio-db-LetsDance.m4a')


#####
# Jimi Hendrix
#####
jimihendrixexperience = Artist.create(name:'Jimi Hendrix Experience')
jimihendrixexperience_photo = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/photo-jimihendrix.jpg')
jimihendrixexperience.photo.attach(io:jimihendrixexperience_photo, filename:'photo-jimihendrix.jpg')


areyouexperienced = Album.create(title:'Are You Experienced?', artist_id: jimihendrixexperience.id, year:'1967')
areyouexperienced_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-jimihendrix-areyouexp.jpg')
areyouexperienced.image.attach(io:areyouexperienced_image, filename:'album-jimihendrix-areyouexp.jpg')

electricladyland = Album.create(title:'Electric Ladyland', artist_id: jimihendrixexperience.id, year:'1968')
electricladyland_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-jimihendrix-electricladyland.jpg')
electricladyland.image.attach(io:electricladyland_image, filename:'album-jimihendrix-electricladyland.jpg')

axisboldaslove = Album.create(title:'Axis: Bold As Love', artist_id: jimihendrixexperience.id, year:'1967')
axisboldaslove_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-jimihendrix-Axis_Bold_as_Love.png')
axisboldaslove.image.attach(io:axisboldaslove_image, filename:'album-jimihendrix-Axis_Bold_as_Love.png')


manicdepression = Song.create(title:'Manic Depression', album_id: areyouexperienced.id)
manicdepression_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-jimi-ManicDepression.m4a')
manicdepression.audio.attach(io:manicdepression_audio, filename:'audio-jimi-ManicDepression.m4a')

crosstowntraffic = Song.create(title:'Crosstown Traffic', album_id: electricladyland.id)
crosstowntraffic_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-jimihendrix-crosstowntraffic.m4a')
crosstowntraffic.audio.attach(io:crosstowntraffic_audio, filename:'audio-jimihendrix-crosstowntraffic.m4a')

littlewing = Song.create(title:'Little Wing', album_id: axisboldaslove.id)
littlewing_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-jimihendrix-littlewing.m4a')
littlewing.audio.attach(io:littlewing_audio, filename:'audio-jimihendrix-littlewing.m4a')

boldaslove = Song.create(title:'Bold as Love', album_id: axisboldaslove.id)
boldaslove_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-jimihendrix-boldaslove.m4a')
boldaslove.audio.attach(io:boldaslove_audio, filename:'audio-jimihendrix-boldaslove.m4a')



#####
# Prince
#####
prince = Artist.create(name:'Prince')
prince_photo = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/photo-prince.jpg')
prince.photo.attach(io:prince_photo, filename:'photo-prince.jpg')


purplerain = Album.create(title:'Purple Rain', artist_id: prince.id, year:'1984')
purplerain_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-prince-purplerain.jpg')
purplerain.image.attach(io:purplerain_image, filename:'album-prince-purplerain.jpg')

princethealbum = Album.create(title:'Self-Titled Album', artist_id: prince.id, year:'1979')
princethealbum_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-prince.jpg')
princethealbum.image.attach(io:princethealbum_image, filename:'album-prince.jpg')

batmansoundtrack = Album.create(title:'Batman', artist_id: prince.id, year:'1989')
batmansoundtrack_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-prince-batman.jpg')
batmansoundtrack.image.attach(io:batmansoundtrack_image, filename:'album-prince-batman.jpg')


trust = Song.create(title:'Trust', album_id: batmansoundtrack.id)
trust_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-prince-Trust.MP3')
trust.audio.attach(io:trust_audio, filename:'audio-prince-Trust.MP3')

sexydancer = Song.create(title:'Sexy Dancer', album_id: princethealbum.id)
sexydancer_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-prince-sexydancer.mp3')
sexydancer.audio.attach(io:sexydancer_audio, filename:'audio-prince-sexydancer.mp3')

whendovescry = Song.create(title:'When Doves Cry', album_id: purplerain.id)
whendovescry_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-prince-whendovescry.m4a')
whendovescry.audio.attach(io:whendovescry_audio, filename:'audio-prince-whendovescry.m4a')

