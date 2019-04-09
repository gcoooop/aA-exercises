# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all

rexi = User.create(username: 'Rexi')
susi = User.create(username: 'Susi')
book = User.create(username: 'Book')
rocky = User.create(username: 'Rocky')
cheeto = User.create(username: 'Cheeto')

squeakygalore = Artwork.create(title: 'SqueakyGalore', image_url: 'squeakygalore.com', artist_id: rexi.id )
meatjerkygalore = Artwork.create(title: 'MeatJerkyGalore', image_url: 'meatjerkygalore.com', artist_id: susi.id )
cardboardboxgalore = Artwork.create(title: 'CardboardBoxGalore', image_url: 'cardboardboxgalore.com', artist_id: book.id )
electriccordsgalore = Artwork.create(title: 'ElectricCordsGalore', image_url: 'electriccordsgalore.com', artist_id: rocky.id )

ArtworkShare.create(artwork_id: squeakygalore.id, viewer_id: cheeto.id)
ArtworkShare.create(artwork_id: cardboardboxgalore.id, viewer_id: cheeto.id)
ArtworkShare.create(artwork_id: squeakygalore.id, viewer_id: susi.id)
ArtworkShare.create(artwork_id: electriccordsgalore.id, viewer_id: rocky.id )
ArtworkShare.create(artwork_id: cardboardboxgalore.id, viewer_id: rexi.id )
ArtworkShare.create(artwork_id: electriccordsgalore.id, viewer_id: cheeto.id)