class ChangeTableName < ActiveRecord::Migration[6.1]
  def change
    rename_table :reviews, :rates
  end
end
