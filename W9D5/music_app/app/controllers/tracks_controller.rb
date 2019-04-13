class TracksController < ApplicationController

  def show
    @track = Track.find(params[:id])
    render :show
  end

  def new
    @bands = Band.all
    @track = Track.new
    render :new
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render :show
    else
      flash[:errors] = @track.errors.full_messages
      redirect_to new_album_track_url(params[:track][:album_id])
    end
  end

  def edit
    @track = Track.find(params[:id])
    render :edit
  end

  def update
    @track = Track.find(params[:id])
    if @track.update(track_params)
      render :show
    else
      redirect_to new_album_track_url(params[:track][:album_id])
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    redirect_to albums_url
  end

  private
  def track_params
    params.require(:track).permit(:album_id, :title, :ord, :lyrics, :bonus_track)
  end

end
