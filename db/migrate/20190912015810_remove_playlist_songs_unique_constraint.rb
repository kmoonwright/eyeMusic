class RemovePlaylistSongsUniqueConstraint < ActiveRecord::Migration[5.2]
  def change
    remove_index :playlist_songs, :playlist_id
    add_index :playlist_songs, :playlist_id
  end
end
