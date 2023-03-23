class RatesController < ApplicationController
  skip_before_action :authorized, only: [:index]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def create
    other = Rate.where("user_id = ? and film_id = ?", session[:user_id], params[:filmid])
    bought = Purchase.where("user_id = ? and film_id = ?", session[:user_id], params[:filmid])
    if other.size > 0
      render json: { errors: "You already have a rating for this film. If you wish to change it, please go to your History page." }, status: :not_found
    elsif bought.size == 0
      render json: { errors: "You can only rate films that you have purchased. If you want to proceed, purchase the film first" }, status: :not_found
    else
      rate = Rate.create!({
      user_id: session[:user_id],
      film_id: params[:filmid],
      comments: params[:comments],
      score: params[:score]
      })
      render json: rate
    end
  end

  def show
    rates = Rate.where("film_id = ?", params[:id]).last(5)
    render json: rates, include: [:user]
  end 

  def index
    rates = Rate.all
    render json: rates
  end

  def update
    rate = Rate.find_by(id: params[:id])
    if rate
      if session[:user_id] == rate.user_id
        rate.update!(score: params[:score], comments: params[:comments])
        render json: rate, status: :created
      else
        render json: {error: "Unauthorized access. You are not the author for this rating"}, status: :not_found
      end
    else
      render json: {error: "Rating not found"}, status: :not_found
    end
  end

  def destroy
    rate = Rate.find_by(id: params[:id])
    if rate
      if session[:user_id] == rate.user_id
        rate.destroy
        head :no_content
      else
        render json: {error: "Unauthorized access. You are not the author for this rating"}, status: :not_found
      end
    else
      render json: {error: "Rating not found"}, status: :not_found
    end
  end


  private

    def render_unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
