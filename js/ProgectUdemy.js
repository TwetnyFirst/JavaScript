
const numberOffilms = +prompt("How many films do you watched?",'');
const PersonalMoviesDB = {
    conts:numberOffilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false

}




for(let x = 0;x < 2;x++ ){
    let film = prompt("one of the last films you watched?"),
        a= prompt("Grade?");

    if(film != null && a != null && film != '' && a != '' && a.length < 50){
        PersonalMoviesDB.movies[film] = a;
    }else{
        console.log("idi hanij");
        x--;
    }

}
if(PersonalMoviesDB.count < 10){
    console.log("pizdet ty tupoj");

}else if(PersonalMoviesDB.count >= 10 && PersonalMoviesDB.count <= 30){
    console.log("Ny normalno");

}else{
    console.log("Ebat ty krasavczik");
}

console.log(PersonalMoviesDB);
