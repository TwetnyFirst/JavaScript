
const numberOffilms = +prompt("How many films do you watched?",'');
const PersonalMoviesDB = {
    conts:numberOffilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false

}
const film1 = prompt("one of the last films you watched?"),
    b = prompt("Grade?");
PersonalMoviesDB.movies[film1] = b;

console.log(PersonalMoviesDB);