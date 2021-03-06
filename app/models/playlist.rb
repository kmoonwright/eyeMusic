# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
    validates :title, presence: true

    belongs_to :user
    
    has_many :playlist_songs
    has_many :songs, through: :playlist_songs
    has_many :albums, through: :songs, source: :album
    has_many :artists, through: :albums, source: :artist
end
