let currentQuestion = 0;
let score = 0;
let questions = [
   {
	"question": "What is the name of the jail?",
	"a": "Bastille",
	"b": "Broken Hill",
	"c": "Madstone",
	"d": "Sky Vaults",
	"image":"quizimages/q1.jpg",
	"answer": "a"
   
   },
   {
   "question": "Who is he?",
      "a": "Georges Danton",
      "b": "Trump",
      "c": "Louis XVI  ",
      "d": "Robespierre",
      "image":"quizimages/q2.jpg",
      "answer": "c"
   },
   {
   "question": "What's that famous constituion callled?",
   "a": "The French Constitution of 1791",
   "b": "The Bill of Rights ",
   "c": "The Declaration of Independence",
   "d": "The Declaration of the Rights of Man and of the Citizen",
   "image":"quizimages/q3.jpg",
   "answer": "d"
   },
   {
      "question": "When did Estates General take place at versailles?",
      "a": "5th May 1789",
      "b": "6th June 1789",
      "c": "2nd Feb 1790 ",
      "d": "12th May 1789",
      "image":"quizimages/q4.jpg",
      "answer": "a"
   },
   {  "question": "Where was Louis XVI  executed  ?",
      "a": "Arc de Triomphe",
      "b": "Place de la Concorde",
      "c": "Avenue Foch ",
      
      "d": "Le Marais",
      "image":"quizimages/q5.jpg",
      "answer": "b"
   },
   {
      "question": " Who painted that picture ?",
      "a": "William Blake",
      "b": "Caspar David Friedrich ",
      "c": "Frantisek Xaveri Lampi",
      "d": "Eugène Delacroix",
      "image":"quizimages/q6.jpg",
      "answer": "d"
   },
   {
      "question": "When did citizens of Paris occupy the Tuileries Palace?",
      "a": "1795",
      "b": "1793",
      "c": "1792",
      "d": "1791",
      "image":"quizimages/q7.jpg",
      "answer": "c"
   },
   {
      "question": "When did Louis XVI decide to leave France   ?",
      "a": "July 1791",
      "b": "June 1791",
      "c": "August 1791",
      "d": "May 1791",
      "image":"quizimages/q8.jpg",
      "answer": "b"
   },
   {
      "question": "Where did the oath take place ?",
      "a": "tennis court",
      "b": "golf court",
      "c": "badminton court",
      "d": "soccer field",
      "image":"quizimages/q9.jpg",
      "answer": "a"
     
   },
   {
      "question": "Who started the  Coup of 18 Brumaire?",
      "a": "Hébertists",
      "b": "The Mountain",
      "c": "Jacobitism",
      "d": "Napoleon Bonaparte ",
      "image":"quizimages/q10.jpg",
      "answer": "d"
   },



   
 ];
 
 if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/sw.js');
 }
 
 
 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct!!!! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect :< Your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
       message = "You are awesome or not ,or whatever, part of your mark is to give a good message based what the user's score is  "+score+"";
    } else {
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox
 
 
 
 
 
 
 
 
 
 
 
 
   
