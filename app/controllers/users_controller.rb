class UsersController < ApplicationController

  def update

    user = User.find(params["id"])
    school = School.find(params["school_id"])
    user.school_id = school.id
    user.save
    flash[:notice] = "you joined #{school.name}!"
    redirect_to root_path

  end

  def update_number_two

    user = User.find(params["id"])
    school = School.find(params["school_id"])
    classroom = Classroom.find(params["classroom_id"])
    user.classroom_id = classroom.id
    user.save
    flash[:notice] = "you joined #{classroom.name}!"
    redirect_to school_path(school)

  end

end
