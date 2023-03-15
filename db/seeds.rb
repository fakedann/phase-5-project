# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Film.destroy_all
Review.destroy_all

user = User.create!({
  fullname: "Daniel Escalona",
  email: "daniel07escalona@gmail.com",
  password: "123456",
  address: "4924 NW 28TH PL",

})

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

},

{
  title: "Stalker",
  director: "Andrei Tarkovsky",
  year: "1979",
  genre: "Science Fiction",
  runtime: 161,
  price: 19,
  description: "This one will have you thinking",
  poster: "https://m.media-amazon.com/images/I/91pDAUwHrsL._SY445_.jpg"

},
{
  title: "Wolf of Wall Street",
  director: "Martin Scorsese",
  year: "2013",
  genre: "Biographical",
  runtime: 83,
  price: 22,
  description: "One of the best scorseses",
  poster: "https://m.media-amazon.com/images/I/91g+zn7SCcL._SY445_.jpg"

},
{
  title: "Burning",
  director: "Lee Chang-Dong",
  year: "2018",
  genre: "Thriller",
  runtime: 83,
  price: 22,
  description: "CRAZY MYSTERY!!",
  poster: "https://m.media-amazon.com/images/I/71B+xn-pHKL._SX342_.jpg"

}
])



reviews = Review.create!([
  {
    user_id: User.first.id,
    film_id: films[2].id,
    comments: "Awesome shit man!!!!!",
    score: 5
  },
  {
    user_id: User.first.id,
    film_id: films[2].id,
    comments: "Awesome shit man!!!!!",
    score: 4
  },
  {
    user_id: User.first.id,
    film_id: films[2].id,
    comments: "Awesome shit man!!!!!",
    score: 3
  },
  {
    user_id: User.first.id,
    film_id: films[2].id,
    comments: "Awesome shit man!!!!!",
    score: 5
  }
])