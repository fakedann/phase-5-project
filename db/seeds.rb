# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Film.destroy_all

films = Film.create!([
{
  title: "The Dark Knight",
  director: "Christopher Nolan",
  year: "2008",
  genre: "Action",
  runtime: 152,
  price: 20,
  description: "Best batman movie ever",
  poster: "https://m.media-amazon.com/images/I/818hyvdVfvL._AC_SY879_.jpg"

},

{
  title: "Rashomon",
  director: "Akira Kurosawa",
  year: "1950",
  genre: "Mystery",
  runtime: 88,
  price: 15,
  description: "Amazing japanese classic",
  poster: "https://m.media-amazon.com/images/I/A1XvQ0-eXBL._AC_SY741_.jpg"

},

{
  title: "Persona",
  director: "Ingmar Bergman",
  year: "1966",
  genre: "Drama",
  runtime: 83,
  price: 22,
  description: "Best movies of all time",
  poster: "https://m.media-amazon.com/images/I/510eyR8rawL._AC_.jpg"

}


])