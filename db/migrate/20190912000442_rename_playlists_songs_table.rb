class RenamePlaylistsSongsTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :playlists_songs, :playlist_songs
  end
end
