class FilmsController < ApplicationController


  def filter_browse
    if params[:flt] == "1"
      films = Film.last(5)
    elsif params[:flt] == "2"
      films = Film.all
    elsif params[:flt] == "4"
      films = Film.all
    end
    render json: films, status: :created
  end

  def create_cart
    films = []
    params[:cart].map do |obj|
      film = Film.find_by(id: obj)
      if film
        films << film
      end
    end
    render json: films
  end

  def test_cart
    films = Film.avg
    render json: films
  end


end
