class CreateIncidentReport < ActiveRecord::Migration[5.1]
  def change
    create_table :incident_reports do |t|

      t.belongs_to :student

      t.timestamps null:false
    end
  end
end
