class BreweriesController < ApplicationController
  def index
    breweries = Brewery.all
    return breweries.to_json
  end

end
