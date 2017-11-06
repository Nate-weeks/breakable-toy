class SchoolsController < ApplicationController
  def index
    @schools = School.all
    @user = current_user
  end

  def show
    @school = School.find(params[:id])
    @classrooms = @school.classrooms
    @user = current_user
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

  def edit
    @school = School.find(params[:id])
  end

  def update
    @school = School.find(params[:id])
    if @school.update(school_params)
      redirect_to @school
    else
      @form_errors = @school.errors.full_messages
      render :edit
    end
  end

  def destroy
    @school = School.find(params[:id])
    @school.destroy
    redirect_to root_path
  end
  
  private

  def school_params
    params.require(:school).permit(:name, :description)
  end

end
