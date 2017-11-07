class Api::V1::StudentsController < ApplicationController
  skip_before_action :verify_authenticity_token


def index
  classroom = Classroom.find(params[:classroom_id])
  render json: {
    students: classroom.students.all
  }
end



def create
  classroom = Classroom.find(params["student"]["classroom_id"])
  student = Student.new
  student.first_name = params["student"]["first_name"]
  student.last_name = params["student"]["last_name"]
  student.address = params["student"]["address"]
  student.age = params["student"]["age"]
  student.phone_number = params["student"]["phone_number"]
  student.classroom = classroom
  student.save
  student_object = {
    id: student.id,
    first_name: student.first_name,
    last_name: student.last_name,
    address: student.address,
    age: student.age,
    phone_number: student.phone_number,
    classroom: classroom,
    created_at: student.created_at,
    updated_at: student.updated_at
  }

  render json: student_object
end

def edit
  student = Student.find_by(id: params["id"])

  render json: student
end

def update
  classroom = Classroom.find(params["student"]["classroom_id"])
  student = Student.find_by(id: params["id"])
  student.update(first_name: params["student"]["first_name"])
  student.update(last_name: params["student"]["last_name"])
  student.update(address: params["student"]["address"])
  student.update(age: params["student"]["age"])
  student.update(phone_number: params["student"]["phone_number"])
  studentArray = Student.where(classroom_id: classroom.id)
  updated_student_object = {
    id: student.id,
    first_name: student.first_name,
    last_name: student.last_name,
    address: student.address,
    age: student.age,
    phone_number: student.phone_number,
    classroom: classroom,
    created_at: student.created_at,
    updated_at: student.updated_at
  }

  render json: studentArray

end

def destroy
  student_id = params["id"]
  classroom_id = params["classroom_id"]


  student_to_delete = Student.find_by(id: student_id)
  student_to_delete.delete

  students_to_render = Student.where(classroom_id: classroom_id)

  render json: students_to_render
end

end
