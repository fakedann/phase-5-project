class Film < ApplicationRecord

  validates :title, :genre, :year, :director, :runtime, :price, :description, :poster, presence: true
end
