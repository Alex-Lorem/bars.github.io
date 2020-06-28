const string = "Привет! Как дела?";

const vowels = ['а','у','и','о','ы','ю','ё','я','э','е','А','У','И','О','Ы','Ю','Ё','Я','Э','Е'];
const getVowels = string => {
    let filteredString = '';

    for(let i=0; i<string.length;i++){
        const currentLetter = string[i];

        if(vowels.indexOf(currentLetter)!= -1){
            filteredString += currentLetter;
        }
    }
    return filteredString;
}


console.log(getVowels(string));