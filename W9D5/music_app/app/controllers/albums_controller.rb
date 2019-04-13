class AlbumsController < ApplicationController

  def show
    @album = Album.find(params[:id])
    render :show
  end

  def new
    @bands = Band.all
    @band = Band.find(params[:band_id])
    @album = Album.new
    render :new
  end

  def create
    @album = Album.new(album_params)
    if @album.save
      redirect_to album_url(@album)
    else
      flash[:errors] = @album.errors.full_messages
      redirect_to new_band_album_url(params[:album][:band_id])
    end
  end

  def edit
    @album = Album.find(params[:id])
    @bands = Band.all
    render :edit
  end

  def update
    @album = Album.find(params[:id])
    if @album.update(album_params)
      render :show
    else
      flash.now[:errors] = @album.errors.full_messages
      render :edit
    end
  end

  def destroy
    @album = Album.find(params[:id])
    @album.destroy
    redirect_to band_url(@album.band)
  end

  private
  def album_params
    params.require(:album).permit(:band_id, :title, :yr, :studio_album)
  end

end
