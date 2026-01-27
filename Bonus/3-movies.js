const movies = [
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    ratings: [9, 8, 10, 9],
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    ratings: [10, 9, 9, 8],
    actors: ["Matthew McConaughey", "Anne Hathaway","Leonardo DiCaprio", "Jessica Chastain"]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    ratings: [10, 9, 10, 10],
    actors: ["Christian Bale","Leonardo DiCaprio", "Heath Ledger", "Aaron Eckhart"]
  },
  {
    title: "La La Land",
    year: 2016,
    genre: "Musical",
    ratings: [8, 9, 7, 8],
    actors: ["Ryan Gosling","Leonardo DiCaprio", "Emma Stone"]
  }
];

//Get all Sci-Fi movies released after 2010.
// console.log(movies.filter(({year,genre})=>year>2010 && genre==='Sci-Fi'));

//Get the average rating of each movie and return an array of objects:
const avg=movies.reduce((acc,{title,ratings})=>{
    const avgrat=ratings.reduce((a,c)=>a+c,0)/ratings.length;
    acc.push({title,average_rating:avgrat})
    return acc;
},[])
// console.log(avg);

//Get a list of all actors in all movies without duplicates.
const a=[];
for(let i of movies){
    a.push(i.actors)
}

// console.log(new Set(a.flat().sort()));

//Get the first 2 words of each movie title (hint: use split and slice).
for(let i of movies){
    const a=i.title.split(" ");
    // console.log(a[0]+" "+(a[1]?a[1]:""));
}

//Create a function that takes any number of movies and returns the highest rated movie (hint: use rest parameters).
function highestrated(...args){    
    let a;
    let h=0;
    for(let i of args){
        if(i.average_rating>h){
            h=i.average_rating
            a=i;
            
        }

    }
    // console.log(a);
    
}

highestrated(avg[0],avg[1],avg[2])
//Use destructuring to extract the first movie and the rest of the movies into separate variables.

const [first,...rest]=movies
// console.log(first);
// console.log(rest);

//Copy a movie object and add a new property boxOffice without modifying the original object (hint: spread operator).
const b={...movies[0],boxOffice:"300 cr"}
// console.log(b);
// console.log(movies[0]);

//



