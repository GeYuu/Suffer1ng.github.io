// when click the button called Hiragana, alert hello

//a array contains all the hiragana with the romaji
var hiraganaArray = [{char: "あ", value: "a"},  {char: "い", value: "i" },  {char: "う", value: "u"},   {char: "え", value: "e"},  {char: "お", value: "o"}, 
                     {char: "か", value: "ka"}, {char: "き", value: "ki"},  {char: "く", value: "ku"},  {char: "け", value: "ke"}, {char: "こ", value: "ko"}, 
                     {char: "さ", value: "sa"}, {char: "し", value: "shi"}, {char: "す", value: "su"},  {char: "せ", value: "se"}, {char: "そ", value: "so"},  
                     {char: "た", value: "ta"}, {char: "ち", value: "chi"}, {char: "つ", value: "tsu"}, {char: "て", value: "te"}, {char: "と", value: "to"}, 
                     {char: "な", value: "na"}, {char: "に", value: "ni"},  {char: "ぬ", value: "nu"},  {char: "ね", value: "ne"}, {char: "の", value: "no"},
                     {char: "は", value: "ha"}, {char: "ひ", value: "hi"},  {char: "ふ", value: "fu"},  {char: "へ", value: "he"}, {char: "ほ", value: "ho"}, 
                     {char: "ま", value: "ma"}, {char: "み", value: "mi"},  {char: "む", value: "mu"},  {char: "め", value: "me"}, {char: "も", value: "mo"}, 
                     {char: "や", value: "ya"},                           　{char: "ゆ", value: "yu"},                           　{char: "よ", value: "yo"}, 
                     {char: "ら", value: "ra"}, {char: "り", value: "ri"},  {char: "る", value: "ru"},  {char: "れ", value: "re"}, {char: "ろ", value: "ro"}, 
                     {char: "わ", value: "wa"},                                                                              　　　{char: "を", value: "wo"},
                     {char: "が", value: "ga"}, {char: "ぎ", value: "gi"},  {char: "ぐ", value: "gu"},  {char: "げ", value: "ge"}, {char: "ご", value: "go"}, 
                     {char: "ざ", value: "za"}, {char: "じ", value: "ji"},  {char: "ず", value: "zu"},  {char: "ぜ", value: "ze"}, {char: "ぞ", value: "zo"}, 
                     {char: "だ", value: "da"}, {char: "ぢ", value: "ji"},  {char: "づ", value: "zu"},  {char: "で", value: "de"}, {char: "ど", value: "do"},  
                     {char: "ば", value: "ba"}, {char: "び", value: "bi"},  {char: "ぶ", value: "bu"},  {char: "べ", value: "be"}, {char: "ぼ", value: "bo"}, 
                     {char: "ぱ", value: "pa"}, {char: "ぴ", value: "pi"},  {char: "ぷ", value: "pu"},  {char: "ぺ", value: "pe"}, {char: "ぽ", value: "po"},
                     {char: "ん", value: "n"}];

//random function to randomize the hiraganaArray
function randomize() {
    //return a ramdomized array of hiraganaArray, save as a variable called randomizedHiraganaArray
    var randomizedHiraganaArray = hiraganaArray.sort(function() {return 0.5 - Math.random()});
    console.log(randomizedHiraganaArray);
    return randomizedHiraganaArray;
}

//bound enter key of the input box id = "answer" to button id = "check"
document.getElementById("answer").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("check").click();
    }
});

//set color white id =testh1 before the game starts
document.getElementById("testh1").style.color = "white";

document.getElementById("progress").style.color = "white";

//game function
function game() {
    let randomized = randomize();
    let correct = 0;


    // turn testh1, progress back to black
    document.getElementById("testh1").style.color = "black";
    document.getElementById("progress").style.color = "black";
    document.getElementById("progress").innerHTML = 0 + "/" + 71;

    document.getElementById("testh1").innerHTML = randomized[0].char;
    
    //when the user click the button, check if the input is correct
    document.getElementById("check").addEventListener("click", function() {
        let input = document.getElementById("answer").value;
        //lowercase the input
        input = input.toLowerCase();
        if (input == randomized[0].value) {
            //correct + 1
            correct++;
            //p id = alert change to correct
            document.getElementById("alert").innerHTML = "Correct!";
            //change p id = progress to length of randomizedHiraganaArray / hiraganaArray
            document.getElementById("progress").innerHTML = correct + "/" + 71;
            //clear the input box
            document.getElementById("answer").value = "";




            //if correct = 71, alert "You win!"
            if (correct == 71) {
                document.getElementById("alert").innerHTML = "You win!";
                document.getElementById("progress").innerHTML = "71/71";
                document.getElementById("testh1").innerHTML = "Congratulations!";
                document.getElementById("answer").value = "";
                document.getElementById("answer").disabled = true;
                document.getElementById("check").disabled = true;
            }
            //remove the first element of the array
            randomized.shift();
            //display the next hiragana
            document.getElementById("testh1").innerHTML = randomized[0].char;
        } else {
            //clear the input box
            document.getElementById("answer").value = "";
            //p id = alert change to wrong
            document.getElementById("alert").innerHTML = "Wrong!";
        }
    }
);
}

// when click the button id hiraganabtn, change h1 id=testh1 to randomized hiraganaArray
document.getElementById("HiraganaBtn").addEventListener("click", function() {
    //randomize the array
    
    game();
    //change the h1 id=testh1 to the first element of the randomized array
});









