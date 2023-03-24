class PurchasesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  skip_before_action :authorized, only: [:index]

  def payment
    transactions = []
    user = User.find_by(id: session[:user_id])
    # byebug
    if params[:tok] == user.address
      params[:cart].map do |obj|
        transaction = Purchase.create!(film_id: obj, user_id: session[:user_id])
        transactions << transaction
      end
      render json: transactions
    else
      render json: {errors: "Make sure that your payment form has the same address listed as the one for your profile."}, status: :unauthorized
    end

  end

  def history
    user = User.find_by(id: session[:user_id])
    if params[:flt] == "1"
      purch = Purchase.where("user_id = ?", user.id).last(5)
    else
      purch = user.purchases
    end
    render json: purch
  end

  def index
    purc = Purchase.all
    render json: purc
  end

  def copies_sold
    user = User.find_by(id: session[:user_id])
    copies = user.purchases.where("film_id = ?", params[:filmid])
    render json: copies.count
  end



  private

  def render_unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

end
