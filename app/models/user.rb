class User < ApplicationRecord
  include Rails.application.routes.url_helpers
  has_secure_password
  # has_one_attached :image
  has_many :purchases
  has_many :reviews

  validates :email, :password, :fullname, :address, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6}
end
