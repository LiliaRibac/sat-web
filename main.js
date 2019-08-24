// var arr = [];

var words = [{
        word: "Apostroful (')",
        definition: "Semn ortografic in forma de virgula, care marcheaza absenta accidentala in rostire a unor sunete.",
        exemplu: "O vin', al noptii mele domn, De ce nu vii tu vina... ",
        language: "Romanian"

    },
    {
        word: "Punctul și virgula (;)",
        definition: "Semnul punct și virgulă se folosește pentru a separa într-o frază propozițiile sau grupurile de propoziții care sunt independente sintactic, dar care semantic sunt suficient de apropiate pentru a forma un întreg. Astfel punctul și virgula are o utilizare intermediară în raport cu virgula dintre două propoziții și cu punctul care marchează sfârșitul unei fraze.",
        exemplu: "Și când mă uit înapoi, doi hojmălăi se și luaseră după mine; și unde nu încep a fugi de-mi scăpărau picioarele; și trec pe lângă casa noastră, și nu intru acasă, ci cotigesc în stânga și intru în ograda unui megieș al nostru, și din ogradă în ocol, și din ocol în grădina cu păpușoi, care erau chiar atunci prășiți de-al doilea, și băieții după mine; și, până să mă ajungă, eu, de frică, cine știe cum, am izbutit de m-am îngropat în țărnă la rădăcina unui păpușoi.",
        language: "Romanian"

    },
    {
        word: "Virgula (,)",
        definition: "Virgula este semnul de punctuație care delimitează grafic o pauză între părți de propoziție  sau între propozițiile unei fraze,  despărțindu-le pe baza raporturilor sintactice.",
        exemplu: "Ziua, dimineața, noaptea, el se gândea mereu la viața lui trecută.",
        language: "Romanian"

    },
    {
        word: "Dependent clause",
        definition: "A dependent clause is a phrase that has a subject and verb but cannot stand alone as a sentence.",
        exemplu: "Because I decided to build a time machine. A professor who was known more for his quirks that knowledge. Although I have a lot of friends.",
        language: "English"

    },
    {
        word: "Redundancy",
        definition: "Redundancy refers to unnecessary repetition of the same idea. Always eliminate redundancy!",
        exemplu: "Incorrect: There were three teachers that taught each and every hour at school today. <br> Correct: There were three teachers that taught every hour at school today.",
        language: "English"

    },
    {
        word: "Parallel structure",
        definition: "Parallel structure means using the same pattent of words to give equal weight to two or more ideas.",
        exemplu: "Incorrect: At summer camp, I like to hike,I like to swim, and I playing volleyball. <br> Correct: At summer camp, I like to hike, swim, and playing volleyball.",
        language: "English"
    },
    {
        word: "Independent clause",
        definition: "An indepndent clause is a phrase that has a subject and a verb and can stand alone as a sentence",
        exemplu: "I know for a fact that my teacher is an alien. Susan's family celebrated her college acceptance with a dinner at her favorite restaurant.",
        language: "English"
    },
    {
        word: "Coordinating conjuctions (FANBOYS) ",
        definition: "FANBOYS ia an acronym to help us remember the seven coordinating conjunctions: for, and, nor, but, or, yet, so. There are the seven conjunctions that can be used to creat compund sentences linking two independent clauses. ",
        exemplu: "FOR - I got to the library, for I love to read. <br> AND - Anny likes to read and write. <br> NOR - The virus cannot live in immunized individuals, nor in nature. <br> BUT - She objected at first, but finally submitted. <br> OR - You're going to have a little brother or sister. <br> YET - The weather was cold, yet bright and sunny. <br> SO - I know you must be tired, so I will let you rest.",
        language: "English"
    },
    {
        word: "Subordinating conjunctions",
        definition: "Subordinating conjuctions link a supporting clause to a main clause. There are many of them; some common ones are aften, although, before,though, if, where, when, while, until, and unless.",
        exemplu: "Did he say anything before he left?",
        language: "English"
    },
    {
        word: "Conciseness",
        definition: "Conciseness, or concision, is economy in writing, meaning using the most direct way possible to communicate an idea without extra words.",
        exemplu: "Incorrect: Frank M. Robinson is credidted with naming Coca-Cola, along with thinking of and creating the desing of the logo. <br> Correct:  Frank M. Robinson is credited with naming Coca-Cola, along with designing the logo.",
        language: "English"
    },
    {
        word: "Misplaced modifier",
        definition: "A misplaced modifier is a modifier that seems to be describing something else other than what it is supposed to be describing.",
        exemplu: "Incorrect: Driving down the street, my dog barked at every neighbor on the block. (The dog is not driving the car!) <br> Correct: My dog barked at every neighbor on the block while I was driving down the street.",
        language: "English"
    },
    {
        word: "Ambiguous pronouns",
        definition: "Ambiguous pronouns occur when there are multiple antecedents a pronoun could refer to.",
        exemplu: "Incorrect: Jane has many assignments she hasn't turned in. As a result, it is a disaster! <br> Correct: Jane has many assignments she hasn't turned in. As a result, her grade is a disaster!",
        language: "English"
    },
    {
        word: "Comma splice ",
        definition: "A comma splice is when two independent clause are joined together with out only a comma and not an appropriate conjunction.",
        exemplu: "Incorrect: I love studying with Mangoosh, it's my favorite hobby. <br> Correct: I love studying with Mangoosh, for it's my favorite hobby.",
        language: "English"

    },
    {
        word: "Run on sentence",
        definition: "A run - sentence is when two independent clauses are run together without appropriate punctuation or a conjunction. <u>Option to fix a run-on sentence: </u><ol> <li>Add a period </li> <li>Add a semicolon</li> <li>Add a comma and conjunction</li> <li> Change one phrase to a subordinate clause </li></ol>",
        exemplu: "Incorrect: I love all kind of ice cream chocolate chips is my favorite. <br> Correct: <ol><li>I love all kinds of ice cream. Chocolate chip is my favorite.</li><li>I love all kinds of ice cream; chocolate chip is my favorite.</li><li> I love all kinds of ice cream, but chocolate chip is my favorite.</li><li>I love all kinds of ice cream, although chocolate chip is my favorite. </li></ol>",
        language: "English"
    }
]

let results = words.filter(function(hello){
    return hello.language == "Romanian"
    
})

function myFunction() {
    document.getElementById("content").innerHTML = results.filter(word);
  }

//document.write("here is the word : ", results.toString(), "<br/>")

//console.log(word)



for (let i = 0; i < words.length; i++) {
    var body = document.getElementById("content");
    var header = document.createElement("h1");
    header.innerHTML = words[i].word;
    body.appendChild(header);

    var defin = document.createElement("h3");
    defin.innerHTML = words[i].definition
    body.appendChild(defin)

    var exemp = document.createElement("h4");
    exemp.innerHTML = words[i].exemplu;
    body.appendChild(exemp);

    var leng = document.createElement("h5");
    leng.innerHTML = words[i].language;
    body.appendChild(leng);


}


// let result = words.filter(language =>language.length < Romanian)
// console.log(result)



//document.write("Language: ", words.hello, "<br/>")


// find 
 function checkWords(word){
     return word >= "Comma Splice"
 }
 function myFunction(){
     document.getElementById("content").innerHTML = words.find(checkWords)
 }