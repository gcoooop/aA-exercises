class Api::TodosController < ApplicationController

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @todos = Todo.all
    render json: @todos
  end
  
  def show
    @todo = Todo.find(params[:id])
    if @todo
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: :not_found
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    render json: @todo    
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end

end
