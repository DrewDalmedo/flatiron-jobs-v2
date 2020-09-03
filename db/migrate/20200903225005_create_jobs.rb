class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs, id: :uuid do |t|
      t.string :type
      t.string :company
      t.string :company_url
      t.string :location
      t.string :title
      t.text :description
      t.text :how_to_apply

      t.datetime :created_at
    end
  end
end
