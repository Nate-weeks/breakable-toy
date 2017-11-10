class AddAvatarToSchools < ActiveRecord::Migration[5.1]
  def change
    add_column :schools, :avatar, :string
  end
end
