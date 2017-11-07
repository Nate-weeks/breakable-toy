class AddApprovalsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :classroom_approval, :boolean, default: false
    add_column :users, :school_approval, :boolean, default: false
  end
end
