class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:create]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      # byebug
      render json: user, status: :created
    else
      render json: {errors: ["Invalid email or password. Please, try again."]}, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end
end
