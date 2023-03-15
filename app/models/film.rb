class Film < ApplicationRecord
  has_many :purchases
  has_many :reviews

  validates :title, :genre, :year, :director, :runtime, :price, :description, :poster, presence: true
end
