# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

# DESTROY EVERYTHING

# PlaylistSong.destroy_all
Playlist.destroy_all
Song.destroy_all
Album.destroy_all
Artist.destroy_all
User.destroy_all

##### USERS #####

demoUser = User.create(username: 'demoUser', password: '123456')
test = User.create(username: 'test',  password: '123456')
test2 = User.create(username: 'test2',  password: '123456')


##### MUSIC #####
#####
# Brazilian Girls
#####
braziliangirls = Artist.create(name:'Brazilian Girls')
braziliangirls_photo = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/photo-braziliangirls.jpg')
braziliangirls.photo.attach(io:braziliangirls_photo, filename:'photo-braziliangirls.jpg')


braziliangirlsalbum = Album.create(title:'Brazilian Girls', artist_id: braziliangirls.id, year:'2005')
braziliangirlsalbum_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-braziliangirls2.jpg')
braziliangirlsalbum.image.attach(io:braziliangirlsalbum_image, filename:'album-braziliangirls2.jpg')

talktolabomb = Album.create(title:'Talk To La Bomb', artist_id: braziliangirls.id, year:'2006')
talktolabomb_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-braziliangirls-talktolabomb.jpg')
talktolabomb.image.attach(io:talktolabomb_image, filename:'album-braziliangirls-talktolabomb.jpg')

newyorkcity = Album.create(title:'New York City', artist_id: braziliangirls.id, year:'2008')
newyorkcity_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-braziliangirls-nyc.jpg')
newyorkcity.image.attach(io:newyorkcity_image, filename:'album-braziliangirls2.jpg')


diegedakensindfrei = Song.create(title:'Die Gedaken sind frei', album_id: braziliangirlsalbum.id)
diegedakensindfrei_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-braziliangirls-diegedaken.m4a')
diegedakensindfrei.audio.attach(io:diegedakensindfrei_audio, filename:'audio-braziliangirls-diegedaken.m4a')

goodtime = Song.create(title:'Good Time', album_id: newyorkcity.id)
goodtime_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-braziliangirls-goodtime.m4a')
goodtime.audio.attach(io:goodtime_audio, filename:'audio-braziliangirls-goodtime.m4a')

nevermetagerman = Song.create(title:'Never Met A German', album_id: talktolabomb.id)
nevermetagerman_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-braziliangirls-nevermetagerman.m4a')
nevermetagerman.audio.attach(io:nevermetagerman_audio, filename:'audio-braziliangirls-nevermetagerman.m4a')


#####
# The D4
#####
thed4 = Artist.create(name:'The D4')
thed4_photo = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/photo-d4.jpg')
thed4.photo.attach(io:thed4_photo, filename:'photo-d4.jpg')


sixtwenty = Album.create(title:'6Twenty', artist_id: thed4.id, year:'1998')
sixtwenty_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-d4-6twenty.jpg')
sixtwenty.image.attach(io:sixtwenty_image, filename:'album-d4-6twenty.jpg')

runningonemptyalbum = Album.create(title:'Running On Empty', artist_id: thed4.id, year:'1997')
runningonemptyalbum_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-d4-runningonempty.jpg')
runningonemptyalbum.image.attach(io:runningonemptyalbum_image, filename:'album-d4-runningonempty.jpg')

d4ep = Album.create(title:'The D4 EP', artist_id: thed4.id, year:'1997')
d4ep_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-d4-ep.jpg')
d4ep.image.attach(io:d4ep_image, filename:'album-d4-ep.jpg')


comeon = Song.create(title:'Come On!', album_id: d4ep.id)
comeon_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-d4-comeon.m4a')
comeon.audio.attach(io:comeon_audio, filename:'audio-d4-comeon.m4a')

invaderace = Song.create(title:'Invader Ace', album_id: sixtwenty.id)
invaderace_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-d4-invaderace.m4a')
invaderace.audio.attach(io:invaderace_audio, filename:'audio-d4-invaderace.m4a')

runningonemptysong = Song.create(title:'Running On Empty', album_id: runningonemptyalbum.id)
runningonemptysong_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-d4-runningonempty.m4a')
runningonemptysong.audio.attach(io:runningonemptysong_audio, filename:'audio-d4-runningonempty.m4a')


#####
# Daft Punk
#####
daftpunk = Artist.create(name:'Daft Punk')
daftpunk_photo = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/photo-daftpunk.jpg')
daftpunk.photo.attach(io:daftpunk_photo, filename:'photo-daftpunk.jpg')


discovery = Album.create(title:'Discovery', artist_id: daftpunk.id, year:'2001')
discovery_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-daftpunk-discovery.jpg')
discovery.image.attach(io:discovery_image, filename:'album-daftpunk-discovery.jpg')

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
# Jim Noir
#####
jimnoir = Artist.create(name:'Jim Noir')
jimnoir_photo = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/photo-jimnoir.jpg')
jimnoir.photo.attach(io:jimnoir_photo, filename:'photo-jimnoir.jpg')


aquietmanalbum = Album.create(title:'A Quiet Man', artist_id: jimnoir.id, year:'2004')
aquietmanalbum_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-jimnoir-aquietman.jpg')
aquietmanalbum.image.attach(io:aquietmanalbum_image, filename:'album-jimnoir-aquietman.jpg')

eaneymeanyalbum = Album.create(title:'Eaney Meany', artist_id: jimnoir.id, year:'2004')
eaneymeanyalbum_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-jimnoir-eaneymeany.jpg')
eaneymeanyalbum.image.attach(io:eaneymeanyalbum_image, filename:'album-jimnoir-eaneymeany.jpg')

mypatchalbum = Album.create(title:'My Patch', artist_id: jimnoir.id, year:'2003')
mypatchalbum_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-jimnoir-mypatch.jpg')
mypatchalbum.image.attach(io:mypatchalbum_image, filename:'album-jimnoir-mypatch.jpg')

toweroflove = Album.create(title:'Tower of Love', artist_id: jimnoir.id, year:'2005')
toweroflove_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-jimnoir-tower.jpg')
toweroflove.image.attach(io:toweroflove_image, filename:'album-jimnoir-tower.jpg')

jimnoiralbum = Album.create(title:'Jim Noir', artist_id: jimnoir.id, year:'2008')
jimnoiralbum_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-jimnoir.jpg')
jimnoiralbum.image.attach(io:jimnoiralbum_image, filename:'album-jimnoir.jpg')


allrightsong = Song.create(title:'All Right', album_id: jimnoiralbum.id)
allrightsong_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-jimnoir-allright.m4a')
allrightsong.audio.attach(io:allrightsong_audio, filename:'audio-jimnoir-allright.m4a')

aquietmansong = Song.create(title:'A Quiet Man', album_id: aquietmanalbum.id)
aquietmansong_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-jimnoir-aquietman.m4a')
aquietmansong.audio.attach(io:aquietmansong_audio, filename:'audio-jimnoir-aquietman.m4a')

eaneymeanysong = Song.create(title:'Eaney Meany', album_id: eaneymeanyalbum.id)
eaneymeanysong_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-jimnoir-eaeniemeany.m4a')
eaneymeanysong.audio.attach(io:eaneymeanysong_audio, filename:'audio-jimnoir-eaeniemeany.m4a')

mypatch = Song.create(title:'My Patch', album_id: mypatchalbum.id)
mypatch_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-jimnoir-mypatch.m4a')
mypatch.audio.attach(io:mypatch_audio, filename:'audio-jimnoir-mypatch.m4a')

turbulentweather = Song.create(title:'Turbulent Weather', album_id: toweroflove.id)
turbulentweather_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-jimnoir-turbulentweather.m4a')
turbulentweather.audio.attach(io:turbulentweather_audio, filename:'audio-jimnoir-turbulentweather.m4a')


# #####
# # Living In A Box
# #####
livinginabox = Artist.create(name:'Living In A Box')
livinginabox_photo = open(' 	https://eyemusic-seeds.s3-us-west-1.amazonaws.com/photo-livinginabox.jpg')
livinginabox.photo.attach(io:livinginabox_photo, filename:'photo-livinginabox.jpg')


livinginaboxalbum = Album.create(title:'Living In A Box', artist_id: livinginabox.id, year:'1984')
livinginaboxalbum_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-livinginabox.jpg')
livinginaboxalbum.image.attach(io:livinginaboxalbum_image, filename:'album-livinginabox.jpg')


livinginaboxsong = Song.create(title:'Living In A Box', album_id: livinginaboxalbum.id)
livinginaboxsong_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-livinginabox-Living+In+A+Box.m4a')
livinginaboxsong.audio.attach(io:livinginaboxsong_audio, filename:'audio-daftpunk-SomethingAboutUs.m4a')


#####
# Nekromantix
#####
nekromantix = Artist.create(name:'Nekromantix')
nekromantix_photo = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/photo-nekromantix.jpg')
nekromantix.photo.attach(io:nekromantix_photo, filename:'photo-nekromantix.jpg')


returnofthelovingdead = Album.create(title:'Return Of The Loving Dead', artist_id: nekromantix.id, year:'2002')
returnofthelovingdead_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-nekro-livingdead.jpg')
returnofthelovingdead.image.attach(io:returnofthelovingdead_image, filename:'album-nekro-livingdead.jpg')

broughtbacktolife = Album.create(title:'Brought Back To Life', artist_id: nekromantix.id, year:'2004')
broughtbacktolife_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-nekro-broughtback.jpg')
broughtbacktolife.image.attach(io:broughtbacktolife_image, filename:'album-nekro-broughtback.jpg')


struckbyawreckingball = Song.create(title:'Struck By A Wrecking Ball', album_id: returnofthelovingdead.id)
struckbyawreckingball_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-struckbyawrecking.m4a')
struckbyawreckingball.audio.attach(io:struckbyawreckingball_audio, filename:'audio-struckbyawrecking.m4a')

whokilledthecheerleader = Song.create(title:'Who Killed The CheerLeader', album_id: broughtbacktolife.id)
whokilledthecheerleader_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-whokilledthecheerleader.mp3')
whokilledthecheerleader.audio.attach(io:whokilledthecheerleader_audio, filename:'audio-whokilledthecheerleader.mp3')


#####
# The Phenomenauts
#####
thephenomenauts = Artist.create(name:'The Phenomenauts')
thephenomenauts_photo = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/photo-phemomenauts.jpg')
thephenomenauts.photo.attach(io:thephenomenauts_photo, filename:'photo-phemomenauts.jpg')


rocketsandrobots = Album.create(title:'Rockets and Robots', artist_id: thephenomenauts.id, year:'2003')
rocketsandrobots_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-phenomenaunts-rocketsandrobots.jpg')
rocketsandrobots.image.attach(io:rocketsandrobots_image, filename:'album-phenomenaunts-rocketsandrobots.jpg')

reentry = Album.create(title:'Reentry', artist_id: thephenomenauts.id, year:'2004')
reentry_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-phenomenauts-reentry.jpg')
reentry.image.attach(io:reentry_image, filename:'album-phenomenauts-reentry.jpg')


compositesynthesizer = Song.create(title:'Composite Synthesizer', album_id: rocketsandrobots.id)
compositesynthesizer_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-phenomenauts-CompositeSynthesizer.m4a')
compositesynthesizer.audio.attach(io:compositesynthesizer_audio, filename:'audio-phenomenauts-CompositeSynthesizer.m4a')

mission = Song.create(title:'Mission', album_id: reentry.id)
mission_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-phenomenauts-mission.m4a')
mission.audio.attach(io:mission_audio, filename:'audio-phenomenauts-mission.m4a')



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


#####
# Stéphane Pompougnac
#####
stéphanepompougnac = Artist.create(name:'Stéphane Pompougnac')
stéphanepompougnac_photo = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/photo-cafedeflore.jpg')
stéphanepompougnac.photo.attach(io:stéphanepompougnac_photo, filename:'photo-cafedeflore.jpg')


cafedeflorealbum = Album.create(title:'Cafe De Flore', artist_id: stéphanepompougnac.id, year:'2006')
cafedeflorealbum_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-cafedeflore.jpg')
cafedeflorealbum.image.attach(io:cafedeflorealbum_image, filename:'album-cafedeflore.jpg')


cafedefloresong = Song.create(title:'Something About Us', album_id: cafedeflorealbum.id)
cafedefloresong_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-steph-cafedeflore.mp3')
cafedefloresong.audio.attach(io:cafedefloresong_audio, filename:'audio-steph-cafedeflore.mp3')




# #####
# # Artist
# #####
# daftpunk = Artist.create(name:'Daft Punk')
# daftpunk_photo = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/photo-daftpunk.jpg')
# daftpunk.photo.attach(io:daftpunk_photo, filename:'photo-daftpunk.jpg')


# discovery = Album.create(title:'Discovery', artist_id: daftpunk.id, year:'2001')
# discovery_image = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/album-daftpunk-discovery.jpg')
# discovery.image.attach(io:discovery_image, filename:'album-daftpunk-discovery.jpg')


# somethingaboutus = Song.create(title:'Something About Us', album_id: discovery.id)
# somethingaboutus_audio = open('https://eyemusic-seeds.s3-us-west-1.amazonaws.com/audio-daftpunk-SomethingAboutUs.m4a')
# somethingaboutus.audio.attach(io:somethingaboutus_audio, filename:'audio-daftpunk-SomethingAboutUs.m4a')
