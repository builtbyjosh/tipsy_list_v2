class BreweriesController < ApplicationController
  def index
    breweries = Brewery.all
    render json: breweries.to_json( :include => [:reviews])
  end

end
