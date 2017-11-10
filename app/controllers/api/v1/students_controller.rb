class Api::V1::StudentsController < ApplicationController
  skip_before_action :verify_authenticity_token


def index
  classroom = Classroom.find(params[:classroom_id])
  render json: {
    students: classroom.students.all
  }
end



def create
  parsedFormPayload = JSON.parse(params['formPayload'])
  classroom = Classroom.find(parsedFormPayload["classroom_id"])
  student = Student.new
  student.first_name = parsedFormPayload["first_name"]
  student.last_name = parsedFormPayload["last_name"]
  student.address = parsedFormPayload["address"]
  student.age = parsedFormPayload["age"]
  student.phone_number = parsedFormPayload["phone_number"]
  student.classroom = classroom
  student.avatar = params["kidPhoto"]
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
    updated_at: student.updated_at,
    avatar: student.avatar
  }

  render json: student_object
end

def edit
  student = Student.find_by(id: params["id"])

  render json: student
end

def update
  parsedFormPayload = JSON.parse(params['formPayload'])
  classroom = Classroom.find(parsedFormPayload["classroom_id"])
  student = Student.find_by(id: parsedFormPayload["student_id"])
  student.update(first_name: parsedFormPayload["first_name"], last_name: parsedFormPayload["last_name"], address: parsedFormPayload["address"], age: parsedFormPayload["age"], phone_number: parsedFormPayload["phone_number"], avatar: params["kidPhoto"])

  studentArray = Student.where(classroom_id: classroom.id)

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
