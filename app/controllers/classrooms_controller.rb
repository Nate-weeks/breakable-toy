class ClassroomsController < ApplicationController

  def show
    @classroom = Classroom.find(params[:id])
    @teachers = @classroom.users
  end

  def new
    @school = School.find(params[:school_id])
    @classroom = Classroom.new
  end

  def create
    @school = School.find(params[:school_id])
    @classroom = Classroom.new(classroom_params)

    @classroom.creator = current_user
    @classroom.school = @school

    if @classroom.save
      flash[:notice] = 'Classroom created successfully'
      redirect_to school_path(@school)
    else
      @form_errors = @classroom.errors.full_messages
      render :new
    end
  end

  private

  def classroom_params
    params.require(:classroom).permit(:name, :description)
  end

end
