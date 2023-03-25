class FilmsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  skip_before_action :authorized, only: [:index]

  def filter_browse
    if params[:flt] == "1"
      films = Film.last(5)
    elsif params[:flt] == "2"
      low = Film.all
      films = low.filter do |obj|
        if obj.ave < 4
          obj
        end
      end
    elsif params[:flt] == "3"
      high = Film.all
      films = high.filter do |obj|
        if obj.ave >= 4
          obj
        end
      end
    else
      films = Film.all
    end
    render json: films, status: :created
  end

  def create_cart
    films = []
    params[:cart].map do |obj|
      film = Film.find_by!(id: obj)
      if film
        films << film
      end
    end
    render json: films, status: :created
  end

  def index
    films = Film.all
    render json: films, status: :created
  end

  def search
    minuscula = params[:film].downcase
    film = Film.find_by("LOWER(title) =  ?", minuscula)
    if film
      render json: film, status: :created
    else
      render json: {errors: "A film with that name does not exist. Please, try again."}, status: :not_found
    end
  end

  private

  def render_unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { errors: "Film not found" }, status: :not_found
  end

end
