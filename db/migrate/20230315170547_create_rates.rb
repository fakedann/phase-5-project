class CreateRates < ActiveRecord::Migration[6.1]
  def change
    create_table :rates do |t|
      t.integer :user_id
      t.integer :film_id
      t.string :comments
      t.integer :score

      t.timestamps
    end
  end
end
