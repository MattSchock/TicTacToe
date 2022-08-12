


const player1 = 'X';     //assigns player1 as string x
const player2 = 'O';     //assigns player 2 as string o
let heading = $("#heading");      //jquery to target heading to change on turns
let currentPlayer = player1;      //starts game as x player
let allDivs = $('.col-4')         //jquery to target all squares. 
let winAlert = $("#winAlert");     //jquery for win alert at end of game.

//jquery to get divs for boxes
let box0 = $('#box0')[0].id;
let box1 = $('#box1')[0].id;
let box2 = $('#box2')[0].id;
let box3 = $('#box3')[0].id;
let box4 = $('#box4')[0].id;
let box5 = $('#box5')[0].id;
let box6 = $('#box6')[0].id;
let box7 = $('#box7')[0].id;
let box8 = $('#box8')[0].id;

//available moves left
let moveOptions = ['box0', 'box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8'];



//Win conditions
const winningCombos = [
[box0, box1, box2], 
[box3, box4, box5],  
[box6, box7, box8],  
[box0, box3, box6],  
[box1, box4, box7],  
[box2, box5, box8],  
[box0, box4, box8],
[box2, box4, box6]
];


//arrays to hold player selections
let xPlayerSelections = []
let oPlayerSelections = []



//Reset button. removes text X and O and replaces onclick listeners. also clears player selections and clears and replaces move options.
function resetButton () {
    heading.text('New Game')
    winAlert.text(' ')
    allDivs.text(' ')       //clears X and O
    allDivs.attr('onClick', 'clickSelector(this.id)')   //replaces onclick listeners for squares
    xPlayerSelections.splice(0, xPlayerSelections.length);    //clears x players choices array
    oPlayerSelections.splice(0, oPlayerSelections.length);    //clears o players choices array
    moveOptions.splice(0, moveOptions.length);                //clears move options array
    moveOptions.push('box0', 'box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8');    //repopulates available move options array.
}



//Game Logic
function clickSelector(clicked_Id) {
    let boxId = clicked_Id;                           //Transfers element Id to variable
    document.getElementById(boxId).innerHTML = currentPlayer;   //Writes either x or o to DOM
    document.getElementById(boxId).removeAttribute("onClick");  //Makes selected box unclickable
    for(let i = 0; i < moveOptions.length; i++) {               //iterates through available move options and removes whatever was played
        if (moveOptions[i] == boxId) {
            moveOptions.splice(i, 1);
        }
    };

    if (currentPlayer == player1) {
        heading.text('It is O turn.');          //Changes heading
        xPlayerSelections.push(boxId);          //pushes selection to array to be compared
        for( let i = 0; i < winningCombos.length; i++) {    //iterates through winning combos array to sees if anything in player selection array matches
            if(xPlayerSelections.includes(winningCombos[i][0]) && xPlayerSelections.includes(winningCombos[i][1]) && xPlayerSelections.includes(winningCombos[i][2])) {
                allDivs.removeAttr("onClick");    //if game is over removes ability to click squares on all squares
                heading.text("X Wins!!!!!");      //changes heading to winning text
                document.getElementById("winAlert").removeAttribute('style');    //shows alert banner on bottom
                winAlert.text("End of Game. Congrats X Wins!!!!")      //populates banner with winning text
            } else if (moveOptions.length == 0) {           //detects if a game has tied out
                heading.text('Tie game');                  //changes heading text to tie
                document.getElementById("winAlert").removeAttribute('style');    //shows alert banner
                winAlert.text("End of Game. Tie game!");         //changes text of alert banner
            };
        };
        currentPlayer = player2      //changes turn to other player
        return currentPlayer;
    };
    if (currentPlayer == player2) {         
        heading.text('It is X turn.');        //changes heading text
        oPlayerSelections.push(boxId);        //pushes selection to array to it can be compared
        for( let i = 0; i < winningCombos.length; i++) {  //iterates through winning combos array to sees if anything in player selection array matches
            if(oPlayerSelections.includes(winningCombos[i][0]) && oPlayerSelections.includes(winningCombos[i][1]) && oPlayerSelections.includes(winningCombos[i][2])) {
                allDivs.removeAttr("onClick");    //makes all squares unclickable on win
                heading.text("O Wins!!!!!");      //changes heading text on win
                document.getElementById("winAlert").removeAttribute('style');   //makes alert visible
                winAlert.text("End of Game, O Wins!!!!")     //alert banner text
            } else if (moveOptions.length == 0) {        //detects tie
                heading.text('Tie game');                //changes header to tie text
                document.getElementById("winAlert").removeAttribute('style');  //shows alert banner
                winAlert.text("End of Game, Tie game!")     //alert banner text
            };
        };
        currentPlayer = player1        //flips player turn
        return currentPlayer;
    };
};
