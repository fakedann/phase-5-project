class CreateFilms < ActiveRecord::Migration[6.1]
  def change
    create_table :films do |t|
      t.string :title
      t.string :director
      t.string :year
      t.string :genre
      t.integer :runtime
      t.integer :price

      t.timestamps
    end
  end
end
