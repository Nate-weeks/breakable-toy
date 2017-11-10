class School < ApplicationRecord
  has_many :users
  has_many :classrooms
  has_many :students, through: :classrooms

  validates :name, presence: true

  mount_uploader :avatar, AvatarUploader
end
