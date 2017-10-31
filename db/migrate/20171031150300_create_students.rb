class CreateStudents < ActiveRecord::Migration[5.1]
  def change
    create_table :students do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :address
      t.string :age
      t.string :phone_number

      t.belongs_to :classroom

      t.timestamps null:false
    end
  end
end
