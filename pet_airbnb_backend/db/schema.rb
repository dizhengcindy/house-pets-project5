# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_04_005152) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string "company_name"
    t.string "address_line"
    t.string "city"
    t.string "state"
    t.string "country"
    t.integer "zip"
    t.string "picture1"
    t.string "picture2"
    t.string "picture3"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "companyservices", force: :cascade do |t|
    t.bigint "company_id", null: false
    t.bigint "service_id", null: false
    t.string "charge"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_companyservices_on_company_id"
    t.index ["service_id"], name: "index_companyservices_on_service_id"
  end

  create_table "schedules", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "companyservice_id", null: false
    t.integer "num_of_pets"
    t.date "start_date"
    t.time "start_time"
    t.date "end_date"
    t.time "end_time"
    t.float "rating"
    t.string "comment"
    t.boolean "done"
    t.float "totalCost"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["companyservice_id"], name: "index_schedules_on_companyservice_id"
    t.index ["user_id"], name: "index_schedules_on_user_id"
  end

  create_table "services", force: :cascade do |t|
    t.string "service_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "companyservices", "companies"
  add_foreign_key "companyservices", "services"
  add_foreign_key "schedules", "companyservices"
  add_foreign_key "schedules", "users"
end
