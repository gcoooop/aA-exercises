# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ActiveRecord::Base.connection.tables.each do |table|
#     result = ActiveRecord::Base.connection.execute("SELECT id FROM #{table} ORDER BY id DESC LIMIT 1")
#     if result.any?
#       ai_val = result.first['id'].to_i + 1
#       puts "Resetting auto increment ID for #{table} to #{ai_val}"
#       ActiveRecord::Base.connection.execute("ALTER SEQUENCE #{table}_id_seq RESTART WITH #{ai_val}")
#     end
#   end
Cat.destroy_all
CatRentalRequest.destroy_all

scott = Cat.create!(birth_date: "2012/03/17", name: "Scott", color: "green", sex: "F", description: "Good ole green Scott")
html = Cat.create!(birth_date: "2014/04/01", name: "html", color: "TIGER", sex: "M", description: "www.w3.com")
rocky = Cat.create!(birth_date: "2008/04/15", name: "Rocky", color: "grey", sex: "M", description: "smelly smelly smelly")
book = Cat.create!(birth_date: "2012/10/31", name: "Book", color: "black", sex: "M", description: "usually drunk")
cheeto = Cat.create!(birth_date: "2009/06/21", name: "Cheeto", color: "brown", sex: "M", description: "pees in the house")

request1 = CatRentalRequest.create!(cat_id: scott.id, start_date: "2019/04/10", end_date: "2019/04/12", status: "APPROVED")
request2 = CatRentalRequest.create!(cat_id: scott.id, start_date: "2019/03/20", end_date: "2019/04/08", status: "APPROVED")
request3 = CatRentalRequest.create!(cat_id: rocky.id, start_date: "2019/02/11", end_date: "2019/04/10", status: "APPROVED")
request4 = CatRentalRequest.create!(cat_id: book.id, start_date: "2019/04/20", end_date: "2019/04/29", status: "PENDING")
request5 = CatRentalRequest.create!(cat_id: cheeto.id, start_date: "2019/04/01", end_date: "2019/04/12", status: "DENIED")