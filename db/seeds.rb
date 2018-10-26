# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: "sheab822@gmail.com", password: "123456", first_name: "Brendon", last_name: "Shea", phone: "5089229333", address: "351 Robinson St.", city: "Woonsocket", state: "RI", zip_code: "02895", pickup_permission: true, vet: "Medway Animal Hospital", vet_phone: "5089999999", business_discover: "Google")
