class RatesController < ApplicationController
  skip_before_action :authorized, only: [:avg]
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


  private

    def render_unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
