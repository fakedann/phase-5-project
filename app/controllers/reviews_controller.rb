class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  skip_before_action :authorized, only: [:avg, :index]

  # def avg
  #   film = Film.find_by(title: "Persona")
  #   reviews = film.reviews
  #   av = reviews.average(:score).to_f.round(2)
  #   render json: av
  # end

  def index
    reviews = Review.all
    render json: reviews
  end



  private

    def review_params
      params.require(:review).permit(:user_id, :film_id, :comments, :score)
    end

    def render_not_found_response
      render json: { error: "Couldn't locate the review " }, status: :not_found
    end

    def render_unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
