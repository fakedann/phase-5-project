class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :fullname, :address, :email, :image, :image_url

  def image_url
    img = Rails.application.routes.url_helpers.rails_blob_path(self.object.image, only_path: true)
  end
end
