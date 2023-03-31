# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).



User.destroy_all
Film.destroy_all
Rate.destroy_all
Purchase.destroy_all

user1 = User.new({
  fullname: "Alejandra Zepeda",
  email: "alezepeda@gmail.com",
  password: "123456",
  address: "4000 NW 27TH TR",

})
user1.image.attach(io: File.open('./client/pictures/ale.jpg'), filename: 'ale.jpg' )
user1.save

user2 = User.new({
  fullname: "Daniel Escalona",
  email: "daniel07escalona@gmail.com",
  password: "123456",
  address: "4924 NW 28TH PL",

})
user2.image.attach(io: File.open('./client/pictures/daniel.jpg'), filename: 'daniel.jpg' )
user2.save

user3 = User.new({
  fullname: "Alexander Romero",
  email: "alex01romero@gmail.com",
  password: "123456",
  address: "3789 2nd Ave",

})
user3.image.attach(io: File.open('./client/pictures/alex.jpg'), filename: 'alex.jpg' )
user3.save

user4 = User.new({
  fullname: "Adam Leon",
  email: "adammleonn@gmail.com",
  password: "123456",
  address: "1234 South Ridgeview St",

})
user4.image.attach(io: File.open('./client/pictures/adam.jpg'), filename: 'adam.jpg' )
user4.save

user5 = User.new({
  fullname: "Annalise Bourn",
  email: "annarbourn@gmail.com",
  password: "123456",
  address: "80 Glenridge Ave",

})
user5.image.attach(io: File.open('./client/pictures/anna.jpg'), filename: 'anna.jpg' )
user5.save


films = Film.create!([
{
  title: "The Dark Knight",
  director: "Christopher Nolan",
  year: "2008",
  genre: "Action",
  runtime: 152,
  price: 20,
  description: "Batman accepts one of the greatest psychological and physical tests of his ability to fight injustice",
  poster: "https://m.media-amazon.com/images/I/818hyvdVfvL._AC_SY879_.jpg"

},

{
  title: "Rashomon",
  director: "Akira Kurosawa",
  year: "1950",
  genre: "Mystery",
  runtime: 88,
  price: 15,
  description: "The rape of a bride and the murder of her husband are recalled from the perspectives of multiple people",
  poster: "https://m.media-amazon.com/images/I/A1XvQ0-eXBL._AC_SY741_.jpg"

},

{
  title: "Persona",
  director: "Ingmar Bergman",
  year: "1966",
  genre: "Drama",
  runtime: 83,
  price: 22,
  description: "A nurse is put in charge of a mute actress and finds that their personae are melding together",
  poster: "https://m.media-amazon.com/images/I/510eyR8rawL._AC_.jpg"

},

{
  title: "Stalker",
  director: "Andrei Tarkovsky",
  year: "1979",
  genre: "Science Fiction",
  runtime: 161,
  price: 19,
  description: "A guide leads two men through an area known as the Zone to find a room that grants wishes.",
  poster: "https://m.media-amazon.com/images/I/91pDAUwHrsL._SY445_.jpg"

},
{
  title: "The Wolf of Wall Street",
  director: "Martin Scorsese",
  year: "2013",
  genre: "Biographical",
  runtime: 83,
  price: 22,
  description: "A true story. From his rise to wealth to his fall involving crime, corruption and the federal government",
  poster: "https://m.media-amazon.com/images/I/91g+zn7SCcL._SY445_.jpg"

},
{
  title: "Burning",
  director: "Lee Chang-Dong",
  year: "2018",
  genre: "Thriller",
  runtime: 83,
  price: 22,
  description: "A mystery regarding a girl's wellbeing that might leave you with more questions than answers",
  poster: "https://m.media-amazon.com/images/I/71B+xn-pHKL._SX342_.jpg"

},
{
  title: "The Power of the Dog",
  director: "Jane Campion",
  year: "2021",
  genre: "Western",
  runtime: 128,
  price: 30,
  description: "A rancher inspires fear and awe in those around him. When his brother brings home a new wife and her son, his life falls apart",
  poster: "https://m.media-amazon.com/images/P/0316436607.01._SCLZZZZZZZ_SX500_.jpg"

},
{
  title: "Flee",
  director: "Jonas Poher Rasmussen",
  year: "2021",
  genre: "Documentary",
  runtime: 90,
  price: 15,
  description: "The extraordinary true story of a man, Amin, on the verge of marriage which compels him to reveal his hidden past for the first time",
  poster: "https://dx35vtwkllhj9.cloudfront.net/neonrated/flee/images/regions/us/onesheet.jpg"

},
{
  title: "A Star is Born",
  director: "Bradley Cooper",
  year: "2018",
  genre: "Romance",
  runtime: 136,
  price: 24,
  description: "A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral",
  poster: "https://m.media-amazon.com/images/I/61ufb6xRZML._AC_SL1024_.jpg"

},
{
  title: "Sunset Boulevard",
  director: "Billy Wilder",
  year: "1950",
  genre: "Drama",
  runtime: 110,
  price: 35,
  description: "A hack screenwriter writes a screenplay for a former silent film star who has faded into Hollywood obscurity",
  poster: "https://m.media-amazon.com/images/I/81QwVSvnTVL._SX342_.jpg"

},
{
  title: "Rebecca",
  director: "Alfred Hitchcock",
  year: "1940",
  genre: "Thriller",
  runtime: 130,
  price: 15,
  description: "A newlywed arrives at her husband's house and finds herself battling the shadow of his first wife whose legacy seems to live on",
  poster: "https://m.media-amazon.com/images/I/71Ew17+Rv9L._AC_SL1000_.jpg"

},
{
  title: "The Gold Rush",
  director: "Charles Chaplin",
  year: "1925",
  genre: "Adventure",
  runtime: 89,
  price: 25,
  description: "A man goes to the Klondike during the 1890s gold rush in hopes of making his fortune, and is smitten with a girl he sees in a dance hall",
  poster: "https://m.media-amazon.com/images/I/81Dmmk7ZVmL._SL1500_.jpg"

}
])

purchases = Purchase.create!(
  [
    {
      user_id: User.first.id,
      film_id: films[0].id,
    },
    {
      user_id: User.first.id,
      film_id: films[1].id,
    },
    {
      user_id: User.first.id,
      film_id: films[2].id,
    },
    {
      user_id: User.first.id,
      film_id: films[5].id,
    },
    {
      user_id: user2.id,
      film_id: films[3].id,
    },
    {
      user_id: user2.id,
      film_id: films[4].id,
    },
    {
      user_id: user2.id,
      film_id: films[6].id,
    },
    {
      user_id: user2.id,
      film_id: films[7].id,
    },
    {
      user_id: user2.id,
      film_id: films[8].id,
    },
    {
      user_id: user3.id,
      film_id: films[0].id,
    },
    {
      user_id: user3.id,
      film_id: films[10].id,
    },
    {
      user_id: user3.id,
      film_id: films[9].id,
    },
    {
      user_id: user3.id,
      film_id: films[11].id,
    },
    {
      user_id: user3.id,
      film_id: films[1].id,
    },
    {
      user_id: user4.id,
      film_id: films[7].id,
    },
    {
      user_id: user4.id,
      film_id: films[2].id,
    },
    {
      user_id: user4.id,
      film_id: films[10].id,
    },
    {
      user_id: user5.id,
      film_id: films[11].id,
    },
    {
      user_id: user5.id,
      film_id: films[10].id,
    },
    {
      user_id: user5.id,
      film_id: films[6].id,
    },
    {
      user_id: user5.id,
      film_id: films[8].id,
    },
    {
      user_id: user5.id,
      film_id: films[7].id,
    }
  ]
)



rates = Rate.create!([
  {
    user_id: User.first.id,
    film_id: films[1].id,
    comments: "Awesome shit man!!!!!",
    score: 5
  },
  {
    user_id: User.first.id,
    film_id: films[0].id,
    comments: "Best batman movie ever",
    score: 4
  },
  {
    user_id: User.first.id,
    film_id: films[2].id,
    comments: "I did not understand anything about this film",
    score: 3
  },
  {
    user_id: User.first.id,
    film_id: films[5].id,
    comments: "This is a great thriller. Would watch over and over",
    score: 5
  },
  {
      user_id: user2.id,
      film_id: films[3].id,
      comments: "Mesmerizing film. Cannot miss but might be a little slow for some",
      score: 5
    },
    {
      user_id: user2.id,
      film_id: films[4].id,
      comments: "A bunch of macho nonsense. Hated it",
       score: 2
    },
    {
      user_id: user2.id,
      film_id: films[6].id,
      comments: "Very solid film. A little slow at times, but it delivers at the end",
      score: 4
    },
    {
      user_id: user2.id,
      film_id: films[7].id,
      comments: "Great animation. It's a very cool mix between different genres",
      score: 4
    },
    {
      user_id: user2.id,
      film_id: films[8].id,
      comments: "I could sing these songs all day!!!",
      score: 5
    },
    {
      user_id: user3.id,
      film_id: films[0].id,
      comments: "To be honest, I prefer the old batman movies. Christian bale is not it",
      score: 3
    },
    {
      user_id: user3.id,
      film_id: films[10].id,
      comments: "Hitchcock is a master. Arguably one of his best films, and that's saying something",
      score: 5
    },
    {
      user_id: user3.id,
      film_id: films[9].id,
      comments: "Classic film. This one will endure throughout history",
      score: 5
    },
    {
      user_id: user3.id,
      film_id: films[11].id,
      comments: "I love Chaplin's charisma. Very entertaining despite it being silent",
      score: 4
    },
    {
      user_id: user3.id,
      film_id: films[1].id,
      comments: "Who doesn't love a great samurai film? Although this is kind of different!",
      score: 4
    },
    {
      user_id: user4.id,
      film_id: films[7].id,
      comments: "Boriiiiiing. But don't listen to me, I hate documentaries",
      score: 1
    },
    {
      user_id: user4.id,
      film_id: films[2].id,
      comments: "I don't know who said this could be a classic film",
      score: 2
    },
    {
      user_id: user4.id,
      film_id: films[10].id,
      comments: "It was okay. A little outdated for my taste",
      score: 3
    },
    {
      user_id: user5.id,
      film_id: films[11].id,
      comments: "I hate black and white movies. I was forced to watch this",
      score: 1
    },
    {
      user_id: user5.id,
      film_id: films[10].id,
      comments: "Despite being black and white, it had an interesting story",
      score: 3
    },
    {
      user_id: user5.id,
      film_id: films[6].id,
      comments: "What a great film! Jane Campion is the best director",
      score: 5
    },
    {
      user_id: user5.id,
      film_id: films[8].id,
      comments: "Bradley and Gaga had great chemistry. This is better than the original",
      score: 4
    },
    {
      user_id: user5.id,
      film_id: films[7].id,
      comments: "The ending was so touching. Really important piece of work",
      score: 4
    }
])