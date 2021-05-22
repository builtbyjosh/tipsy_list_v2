class ReviewsController < ApplicationController
  def index
    reviews = Review.all
    render json: reviews
  end

  def create
    review = Review.new(review_params)
    if review.save
      render json: review
    else
      render json: {
        error: 'Cannot Create',
        status: 500
      }, status: 500
    end
  end

  def destroy
    review = Review.find(params[:id])
    if review.destroy
      render json: {id:review.id}
    end
  end

  private
  def review_params
    params.require(:review).permit(:content, :brewery_id)
  end
end
