class User < ApplicationRecord
  include Rails.application.routes.url_helpers
  has_secure_password
  has_many :purchases
  has_many :rates
  has_many :films, through: :purchases

  validates :email, :password, :fullname, :address, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6}
  validates_format_of :fullname, with: /\A[A-Za-z ]+\z/
  validates_format_of :address, with: /\A[a-zA-Z 0-9_.-]*\z/
  validates_format_of :email, with: /\A[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\z/i
  

end
