# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Bench.destroy_all

User.create({ username: "gcoooop", password: "password" })

Bench.create({ lat: 37.7540709, long: -122.4473081, description: "Twin Peaks" })
Bench.create({ lat: 37.777549, long: -122.4206065, description: "Good Music" })
Bench.create({ lat: 37.7699991, long: -122.4470189, description: "Party Bench" })