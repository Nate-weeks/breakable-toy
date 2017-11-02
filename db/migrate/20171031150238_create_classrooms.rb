class CreateClassrooms < ActiveRecord::Migration[5.1]
  def change
    create_table :classrooms do |t|
      t.string :name, null: false
      t.text :description

      t.integer :creator_id, null:false
      t.belongs_to :school

      t.timestamps null:false
    end
  end
end
