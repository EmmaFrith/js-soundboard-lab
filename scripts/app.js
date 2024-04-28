
/*-------------------------------- Constants --------------------------------*/

//const buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, button13, button14, button15, button16]

//const button1 = document.querySelector('#work_it')
//const for each button?

/*-------------------------------- Variables --------------------------------*/

//let userChoice = ''

/*------------------------ DOM events ------------------------*/

// do a query selector on the element with the work it hastag 
const button = document.querySelector('#work_it')


// do a query selector on the audio element, which is invisible to the user but written in the html file
const audioPlayer = document.querySelector('audio')


/*-------------------------------- Functions --------------------------------*/

//console.log(userChoice)


// create a function which adds in the relevant music into the invisible audio tag in the html file, then plays it

function play() {
     //audioPlayer refers to the audioPlayer query selector above, which finds the audio element. It finds the empty source string and inserts the relevant sound bite.
    audioPlayer.src = './sounds/work_it.wav'
     // ! Play the audio element
     audioPlayer.play()
   }

 
// some kind of random index
// some kind of loop

/*----------------------------- Event Listeners -----------------------------*/

// add an event listener which runs the play function when the user clicks 
button.addEventListener('click', play)

// some kind of event listener on the randomiser button



