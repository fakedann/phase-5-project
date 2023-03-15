class Film < ApplicationRecord
  has_many :purchases
  has_many :reviews

  validates :title, :genre, :year, :director, :runtime, :price, :description, :poster, presence: true

  def self.avg
    film = Film.find_by(title: "Persona")
    reviews = film.reviews
    av = reviews.average(:score).to_f.round(2)
  end


end
