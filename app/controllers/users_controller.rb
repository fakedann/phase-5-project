class UsersController < ApplicationController

  skip_before_action :authorized, only: [:create, :index]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  wrap_parameters format: []

  def create
    if params[:user][:image] == "null"
      render json: { errors: "You must select an image for your profile" }, status: :unauthorized
    else
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end
    
  end

  def show
    user = find_user
    if user
      render json: user, status: :created
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def index
    users = User.all
    render json: users, status: :created
  end

  def copies_bought
    user = find_user
    copies = user.films.uniq.map do |obj|
      rate = {rating: obj.rates.where("user_id = ?", session[:user_id])}
      cop = {copias: obj.purchases.where("user_id = ?", session[:user_id]).count}
      results = obj.attributes.merge(rate, cop)
      
    end
    render json: copies, status: :created
  end

  

  private

    def user_params
      params.require(:user).permit(:email, :password, :fullname, :image, :address)
    end

    def render_unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def find_user
      User.find_by!(id: session[:user_id])
    end
  
    def render_not_found_response
      render json: { errors: "User not found" }, status: :not_found
    end
end
