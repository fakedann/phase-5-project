class FilmsController < ApplicationController


  def last_five
    ff = Film.last(5)
    render json: ff, status: :created
  end
end
