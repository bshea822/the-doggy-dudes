# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_05_131110) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "dogs", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name", null: false
    t.string "breed", null: false
    t.integer "size", null: false
    t.date "birthday"
    t.boolean "rabies", null: false
    t.string "rabies_docs"
    t.text "shots"
    t.text "dog_handling"
    t.text "voice_commands"
    t.text "dog_aggression"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "fixed", null: false
    t.text "dog_return"
    t.text "dog_issues"
    t.boolean "tos_accept", null: false
    t.string "tos_name", null: false
    t.datetime "tos_date", null: false
    t.index ["user_id"], name: "index_dogs_on_user_id"
  end

  create_table "pickups", force: :cascade do |t|
    t.bigint "dog_id", null: false
    t.bigint "user_id", null: false
    t.bigint "service_id", null: false
    t.date "pickup_date", null: false
    t.text "instructions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dog_id"], name: "index_pickups_on_dog_id"
    t.index ["service_id"], name: "index_pickups_on_service_id"
    t.index ["user_id"], name: "index_pickups_on_user_id"
  end

  create_table "services", force: :cascade do |t|
    t.string "service_name", null: false
    t.time "pickup_time", null: false
    t.time "dropoff_time", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "phone", null: false
    t.string "address", null: false
    t.string "unit_number"
    t.string "city", null: false
    t.string "state", null: false
    t.string "zip_code", null: false
    t.boolean "pickup_permission", null: false
    t.string "vet"
    t.string "vet_phone"
    t.boolean "free_trial", default: false, null: false
    t.string "business_discover"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "pickup_instructions"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

end
