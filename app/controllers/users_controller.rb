class UsersController < ApplicationController
  # TODO: add serializer so that you can only see json of essential info (no password hashes!!!)

  def show
    user = User.find(params[:id])
    render json: user, except: [:password_digest]
  end

  def create
  end

end
