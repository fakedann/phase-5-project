class FilmsController < ApplicationController


  def filter_browse
    if params[:flt] == "1"
      films = Film.last(5)
    elsif params[:flt] == "4"
      films = Film.all
    end
    render json: films, status: :created
  end


end
