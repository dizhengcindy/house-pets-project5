class CreateCompanyservices < ActiveRecord::Migration[6.0]
  def change
    create_table :companyservices do |t|
      t.references :company, null: false, foreign_key: true
      t.references :service, null: false, foreign_key: true
      t.string :charge

      t.timestamps
    end
  end
end
