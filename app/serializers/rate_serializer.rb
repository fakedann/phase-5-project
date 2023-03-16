class RateSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :film_id, :score, :comments
  belongs_to :film
  belongs_to :user

end
