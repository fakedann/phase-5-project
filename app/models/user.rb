class User < ApplicationRecord
  has_secure_password

  validates :email, :password, :fullname, :address, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6}
end
