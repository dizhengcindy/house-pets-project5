class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :company_name
      t.string :adddress_line
      t.string :city
      t.string :state
      t.string :country
      t.integer :zip
      t.string :picture1
      t.string :picture2
      t.string :picture3

      t.timestamps
    end
  end
end
