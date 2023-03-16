class PurchasesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def payment
    transactions = []
    user = User.find_by(id: session[:user_id])

    if params[:tok] == user.address
      params[:cart].map do |obj|
        transaction = Purchase.create!(film_id: obj, user_id: session[:user_id])
        transactions << transaction
      end
      render json: transactions
    else
      render json: {errors: "error"}
    end

  end



  private

  def render_unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

end
