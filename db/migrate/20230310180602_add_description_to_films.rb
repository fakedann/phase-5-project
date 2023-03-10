class AddDescriptionToFilms < ActiveRecord::Migration[6.1]
  def change
    add_column :films, :description, :string
  end
end
