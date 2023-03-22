class RatesController < ApplicationController
  skip_before_action :authorized, only: [:index]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def create
    rate = Rate.create!({
      user_id: session[:user_id],
      film_id: params[:filmid],
      comments: params[:comments],
      score: params[:score]
    })
    render json: rate
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


  private

    def render_unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
