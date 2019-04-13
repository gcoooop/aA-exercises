class BandsController < ApplicationController
  before_action :ensure_logged_in, except: [:index, :show]

  def index
    @bands = Band.all
    render :index
  end

  def show
    @band = Band.find(params[:id])
    render :show
  end

  def new
    @band = Band.new
    render :new
  end

  def create
    @band = Band.new(band_params)
    if @band.save
      render :show
    else
      flash.now[:errors] = @band.errors.full_messages
      render :new
    end
  end
  
  def edit
    ensure_logged_in
    @band = Band.find(params[:id])
    render :edit
  end

  def update
    @band = Band.find(params[:id])
    if @band.update(band_params)
      render :show
    else
      flash.now[:errors] = @band.errors.full_messages
      render :edit
    end
  end

  def destroy
    ensure_logged_in
    @band = Band.find(params[:id])
    @band.destroy
    redirect_to bands_url
  end

  private
  def band_params
    params.require(:band).permit(:name)
  end

end
