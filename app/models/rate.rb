class Rate < ApplicationRecord
  belongs_to :film
  belongs_to :user

  validates :user_id, :film_id, :comments, :score, presence: true
  validates :comments, format: {with: /[a-zA-Z]/}
  validates :comments, length: { maximum: 100}
end
