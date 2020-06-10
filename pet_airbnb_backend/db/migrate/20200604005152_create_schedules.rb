class CreateSchedules < ActiveRecord::Migration[6.0]
  def change
    create_table :schedules do |t|
      t.references :user, null: false, foreign_key: true
      t.references :companyservice, null: false, foreign_key: true
      t.integer :num_of_pets
      t.date :start_date
      t.time :start_time
      t.date :end_date
      t.time :end_time
      t.float :rating
      t.string :comment

      t.timestamps
    end
  end
end
