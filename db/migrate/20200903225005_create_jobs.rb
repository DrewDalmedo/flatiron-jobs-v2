class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :job_type
      t.string :company
      t.string :company_url
      t.string :location
      t.string :title
      t.text :description
      t.text :how_to_apply

      t.timestamps
    end
  end
end
