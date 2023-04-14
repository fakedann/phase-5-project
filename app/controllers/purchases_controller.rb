class PurchasesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  # skip_before_action :authorized, only: [:index, :copies_sold]

  def payment
    transactions = []
    user = find_user
    if params[:tok] == user.address
      params[:cart].map do |obj|
        transaction = Purchase.create!(film_id: obj, user_id: session[:user_id])
        transactions << transaction
      end
      render json: transactions, status: :created
    else
      render json: {errors: "We couldn't process your payment. Make sure that your SHIPPING ADDRESS matches exactly with the address selected for your profile"}, status: :unauthorized
    end

  end

  def history
    user = find_user
    if params[:flt] == "1"
      purch = Purchase.where("user_id = ?", user.id).last(5)
    else
      purch = user.purchases
    end
    render json: purch, status: :created
  end

  def index
    purc = Purchase.all
    render json: purc, status: :created
  end

  # def copies_sold
  #   user = find_user
  #   copies = user.purchases.where("film_id = ?", params[:film])
  #   render json: copies.count, status: :created
  # end



  private

  def render_unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors}, status: :unprocessable_entity
  end

  def find_user
    User.find_by!(id: session[:user_id])
  end

  def render_not_found_response
    render json: { errors: "User not found" }, status: :not_found
  end

end
