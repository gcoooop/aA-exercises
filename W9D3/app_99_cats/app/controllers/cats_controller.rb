class CatsController < ApplicationController
    def index
        @cats = Cat.all
        render :index
    end

    def new
        @cat = Cat.new
        @colors = Cat.colors
        @sexes = Cat.sexes
        render :new
    end

    def create
        @cat = Cat.new(cat_params)

        if @cat.save
            redirect_to cat_url(@cat)
        else
            render json: @cat.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        @cat = Cat.find(params[:id])
        render :show
    end

    def edit
        @cat = Cat.find(params[:id])
        @colors = Cat.colors
        @sexes = Cat.sexes
        render :edit
    end

    def update
        @cat = Cat.find(params[:id])

        if @cat.update(cat_params)
            render :show
        else
            render json: @cat.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @cat = Cat.find(params[:id])
        @cat.destroy
        redirect_to cats_url
    end

    private
    def cat_params
        params.require(:cat).permit(:name, :color, :birth_date, :sex, :description)
    end
end
