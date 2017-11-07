class UsersController < ApplicationController

  def update

    user = User.find(params["id"])
    school = School.find(params["school_id"])
    user.school_id = school.id
    user.school_approval = false
    user.save
    flash[:notice] = "you joined #{school.name}!"
    redirect_to school_path(school)

  end

  def update_number_two

    user = User.find(params["id"])
    school = School.find(params["school_id"])
    classroom = Classroom.find(params["classroom_id"])
    user.classroom_id = classroom.id
    user.classroom_approval = false
    user.save
    flash[:notice] = "you joined #{classroom.name}!"
    redirect_to school_classroom_path(school, classroom)

  end

  def destroy
    user = User.find(params[:id])
    school = School.find(params["school_id"])
    user.update(school_id: nil)
    redirect_to school_path(school)
  end

  def destroy_number_two
    user = User.find(params["id"])
    school = School.find(params["school_id"])
    classroom = Classroom.find(params["classroom_id"])
    user.update(classroom_id: nil)
    redirect_to school_classroom_path(school, classroom)
  end

  def update_school_approval

    user = User.find(params["id"])
    school = School.find(params["school_id"])
    user.update(school_approval: true)
    redirect_to school_path(school)
  end

  def update_class_approval
    user = User.find(params["id"])
    school = School.find(params["school_id"])
    classroom = Classroom.find(params["classroom_id"])
    user.update(classroom_approval: true)
    redirect_to school_classroom_path(school, classroom)
  end

end
