class AddPosterToFilms < ActiveRecord::Migration[6.1]
  def change
    add_column :films, :poster, :string
  end
end
