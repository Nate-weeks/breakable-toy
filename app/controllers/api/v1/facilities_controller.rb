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
end
