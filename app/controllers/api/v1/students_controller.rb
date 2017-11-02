class Api::V1::StudentsController < ApplicationController
  skip_before_action :verify_authenticity_token


def index
  classroom = Classroom.find(params[:classroom_id])
  render json: {
    students: classroom.students.all
  }
end
end
