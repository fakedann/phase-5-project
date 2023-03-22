class FilmSerializer < ActiveModel::Serializer
  attributes :id, :title, :director, :runtime, :genre, :year, :price, :description, :poster, :avg

  def avg
    total = self.object.rates.average(:score).to_f.round(2)
  end


end
