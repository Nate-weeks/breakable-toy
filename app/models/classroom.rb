class Classroom < ApplicationRecord
  has_many :users
  has_many :students

  validates :name, presence: true
  validates :creator_id, presence: true

end
