class User < ApplicationRecord
  include Rails.application.routes.url_helpers
  has_secure_password
  has_one_attached :image

  validates :email, :password, :fullname, :address, :image, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6}
end
