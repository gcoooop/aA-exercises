class GoalsController < ApplicationController
  def index 
    @goals = Goal.all 
    render :index 
  end

  def show 

  end

  def new

  end

  def create 

  end

  def edit 

  end

  def update

  end

  def destroy 

  end

  private
  def goal_params 
    #params.require(:goal).permit()
  end
end
