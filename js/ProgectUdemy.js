
let numberOffilms;

function start (){
    numberOffilms = +prompt("How many films do you watched?",'');

    while(isNaN(numberOffilms) || numberOffilms == null || numberOffilms == ""){
        numberOffilms = +prompt("How many films do you watched?",'');
    }
}
start();

const PersonalMoviesDB = {
    conts:numberOffilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false

}




function informationAboutFilms(){
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
}
informationAboutFilms();

function howManyFilms(){
    if(PersonalMoviesDB.conts < 10){
        console.log("<10");
    
    }else if(PersonalMoviesDB.conts >=10 && PersonalMoviesDB.conts <30){
        console.log(">10 and <30")
    }else if(PersonalMoviesDB.conts > 30){
        console.log(">30")
    }else{
        console.log("error")
    }
}
howManyFilms();





function writeYourGenser(){
    for(let i = 1; i<4; i++){
        PersonalMoviesDB.genres[i - 1] = prompt(`what is your Genres number ${i} of 3`); 
    }

}
writeYourGenser();

function showMyDB(object){
    if(!object){
        console.log(PersonalMoviesDB);
    }else{
        console.log("all is privat");
    }

}
showMyDB(PersonalMoviesDB.privat);




