class Film < ApplicationRecord
  has_many :purchases
  has_many :rates

  validates :title, :genre, :year, :director, :runtime, :price, :description, :poster, presence: true

  def ave
    total = self.rates.average(:score).to_f.round(2)
  end


end
