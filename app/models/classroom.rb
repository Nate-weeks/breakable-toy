class Classroom < ApplicationRecord
  has_many :users
  has_many :students
  belongs_to :school
  belongs_to :creator, class_name: :User

  validates :name, presence: true
  validates :creator_id, presence: true

end
