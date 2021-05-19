class BreweriesController < ApplicationController
  def index
    breweries = Brewery.all
    return json: breweries
  end

end
