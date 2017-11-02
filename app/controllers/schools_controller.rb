class SchoolsController < ApplicationController
  def index
    @schools = School.all
  end

  def show
    @school = School.find(params[:id])
    @classrooms = @school.classrooms
  end

  def new
    @school = School.new
  end

  def create
    @school = School.new(school_params)

    @school.creator_id = current_user.id

    if @school.save
      flash[:notice] = 'School created successfully'
      redirect_to root_path
    else
      @form_errors = @school.errors.full_messages
      render :new
    end
  end

  private

  def school_params
    params.require(:school).permit(:name, :description)
  end

end
