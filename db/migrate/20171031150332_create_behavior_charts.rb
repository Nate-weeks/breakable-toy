class CreateBehaviorCharts < ActiveRecord::Migration[5.1]
  def change
    create_table :behavior_charts do |t|
      t.belongs_to :student

      t.timestamps null:false
    end
  end
end
