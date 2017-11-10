class Student < ApplicationRecord
  belongs_to :classroom
  has_many :incident_reports
  has_many :behavior_charts

  validates :first_name, presence: true
  validates :last_name, presence: true

  mount_uploader :avatar, AvatarUploader
end
