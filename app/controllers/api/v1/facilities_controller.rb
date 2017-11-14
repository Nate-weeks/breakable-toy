class Api::V1::FacilitiesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    facilities = School.all
    facilityDivisions = {}

    return_object = facilities.map do |facility|
      facilityDivisions = facility.classrooms.map do |classroom|
        {
          id: classroom.id,
          name: classroom.name
        }
      end
      {
        id: facility.id,
        name: facility.name,
        divisions: facilityDivisions
      }
    end

    render json: return_object
  end

  def create

  end

  def update
    payload = JSON.parse(request.body.read)
    new_division_id = params["id"]
    classroom = Classroom.find_by(id: payload["current_division_id"])

    patient = Student.find_by(id: payload["student_id"])
    patient.update(classroom_id: new_division_id)

    studentArray = Student.where(classroom_id: classroom.id)

    render json: studentArray

  end
end
