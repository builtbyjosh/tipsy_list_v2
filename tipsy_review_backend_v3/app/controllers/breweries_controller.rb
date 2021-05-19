class BreweriesController < ApplicationController
  def index
    breweries = Brewery.all
    render json: breweries.to_json( :include => [:reviews])
  end

  def show
    brewery = Brewery.find_by(id: params[:id])
    render json: brewery.to_json(:include => [:reviews])
  end

  def create
    brewery = Brewery.new(brewery_params)
    if brewery.save
      render json: brewery
    else
      render json: {
        error: 'Cannot Create',
        status: 500
      }, status: 500
    end
  end

  private
  def brewery_params
    params.require(:brewery).permit(:name, :address, :city, :state, :url)
  end

end
