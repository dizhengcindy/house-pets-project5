class Api::V1::UsersController < ApplicationController
    # skip_before_action :authorized, only: [:create]

    def profile
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end

    def update
      # @user = User.find_by(username: user_params[:username])
      @user = User.find(params[:id])
      if  @user.update(username: user_params[:username],email: user_params[:email])
        render json:{ user: UserSerializer.new(@user) }, status: :accepted
      else
        render json: { error: 'failed to update user' }, status: :not_acceptable
      end

    end

   def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  def destroy
    @user = User.find_by(username: user_params[:username])
    @user.destroy
  end
     
  private
      def user_params
        params.require(:user).permit(:username, :email, :password,:password_confirmation)
      end
end
