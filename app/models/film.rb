class Film < ApplicationRecord
  has_many :purchases
  has_many :rates
  has_many :users, through: :purchases

  validates :title, :genre, :year, :director, :runtime, :price, :description, :poster, presence: true
  validates :description, format: {with: /[a-zA-Z]/}
  validates :description, length: { maximum: 140}

  def ave
    total = self.rates.average(:score).to_f.round(2)
  end


end
