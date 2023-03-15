class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :film_id
      t.integer :user_id
      t.string :comments
      t.integer :score

      t.timestamps
    end
  end
end
