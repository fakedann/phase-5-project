class Rate < ApplicationRecord
  belongs_to :user
  belongs_to :film


  validates :user_id, :film_id, :comments, :score, presence: true
  validates :comments, length: { maximum: 100}
end
