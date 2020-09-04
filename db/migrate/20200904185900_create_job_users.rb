class CreateJobUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :job_users do |t|
      t.integer :job_id
      t.integer :user_id

      t.timestamps
    end
  end
end
