class PlaylistSong < ApplicationRecord

    belongs_to :song
    belongs_to :playlist
    
end