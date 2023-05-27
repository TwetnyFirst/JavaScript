const str = "hello";

function isItInStr(x,y){
    
    if(x.indexOf(y.toLowerCase()) == -1){
        console.log('net');
        return false
    }else{
        console.log('da');
    }

}
isItInStr(str,"heL");