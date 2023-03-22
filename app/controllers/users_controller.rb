class UsersController < ApplicationController

  skip_before_action :authorized, only: [:create, :index]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  wrap_parameters format: []

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def index
    users = User.all
    render json: users, status: :created
  end

  def copies_bought
    user = User.find_by(id: session[:user_id])
    copies = user.films.uniq.map do |obj|
      rate = {rating: obj.rates.where("user_id = ?", session[:user_id])}
      cop = {copias: obj.purchases.where("user_id = ?", session[:user_id]).count}
      results = obj.attributes.merge(rate, cop)
      
    end
    render json: copies
  end

  

  private

    def user_params
      params.require(:user).permit(:email, :password, :fullname, :image, :address)
    end

    def render_unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
