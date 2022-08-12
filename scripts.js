


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


//im pretty sure this currently doesnt do anything
const boxIdArr = [
    box0, box1, box2, box3, box4, box5, box6, box7, box8
];

// console.log(boxIdArr);


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



//experimental code below
function clickSelector(clicked_Id) {
    let boxId = clicked_Id;
    document.getElementById(boxId).innerHTML = currentPlayer;
    document.getElementById(boxId).removeAttribute("onClick");
    for(let i = 0; i < moveOptions.length; i++) {
        if (moveOptions[i] == boxId) {
            moveOptions.splice(i, 1);
        }
    };

    if (currentPlayer == player1) {
        heading.text('It is O turn.');
        xPlayerSelections.push(boxId);
        console.log('xplayerselections', xPlayerSelections);
        console.log('winning combos', winningCombos[0]);
        console.log(xPlayerSelections, 'xplayerselections');
        console.log(moveOptions, 'move options');
        for( let i = 0; i < winningCombos.length; i++) {
            console.log(winningCombos[i], winningCombos.length, 'Win conditions');
            console.log('Testtesttest', typeof winningCombos[i][0]);
            console.log('typeof xplayer', typeof xPlayerSelections[0]);
            if(xPlayerSelections.includes(winningCombos[i][0]) && xPlayerSelections.includes(winningCombos[i][1]) && xPlayerSelections.includes(winningCombos[i][2])) {
                allDivs.removeAttr("onClick");
                heading.text("X Wins!!!!!");
                document.getElementById("winAlert").removeAttribute('style');
                winAlert.text("End of Game. Congrats X Wins!!!!")
            } else if (moveOptions.length == 0) {
                heading.text('Tie game');
                document.getElementById("winAlert").removeAttribute('style');
                winAlert.text("End of Game. Tie game!");
            };
        };
        currentPlayer = player2
        return currentPlayer;
    };
    if (currentPlayer == player2) {
        heading.text('It is X turn.');
        oPlayerSelections.push(boxId);
        console.log('xplayerselections', xPlayerSelections);
        console.log('winning combos', winningCombos[0]);
        console.log(oPlayerSelections, 'oplayerselections');
        console.log(moveOptions, 'move options');
        for( let i = 0; i < winningCombos.length; i++) {
            console.log(winningCombos[i], winningCombos.length, 'Win conditions');
            console.log('Testtesttest', typeof winningCombos[i][0]);
            console.log('typeof xplayer', typeof xPlayerSelections[0]);
            if(oPlayerSelections.includes(winningCombos[i][0]) && oPlayerSelections.includes(winningCombos[i][1]) && oPlayerSelections.includes(winningCombos[i][2])) {
                allDivs.removeAttr("onClick");
                heading.text("O Wins!!!!!");
                document.getElementById("winAlert").removeAttribute('style');
                winAlert.text("End of Game, O Wins!!!!")
            } else if (moveOptions.length == 0) {
                heading.text('Tie game');
                document.getElementById("winAlert").removeAttribute('style');
                winAlert.text("End of Game, Tie game!")
            };
        };
        currentPlayer = player1
        return currentPlayer;
    };
};



















// Working code below
// function clickSelector(clicked_Id) {
//     // console.log(clicked_Id);
//     let boxId = clicked_Id;
//      console.log(boxId);
//     document.getElementById(boxId).innerHTML = currentPlayer;
//     document.getElementById(boxId).removeAttribute("onClick");
//     // console.log(document.getElementById(boxId).innerHTML);
//     for(let i =0; i < moveOptions.length; i++) {
//         if (moveOptions[i] == boxId) {
//             moveOptions.splice(i, 1);
//         }
//     };
//     console.log("available moves", moveOptions);
    
//     if (currentPlayer == player1) {
//         heading.text('It is O turn.');
//         xPlayerSelections.push(boxId);
//         console.log('xPlayer', xPlayerSelections);
//         if(xPlayerSelections.includes('box0') && xPlayerSelections.includes('box1') && xPlayerSelections.includes('box2') 
//         || xPlayerSelections.includes('box3') && xPlayerSelections.includes('box4') && xPlayerSelections.includes('box5') 
//         || xPlayerSelections.includes('box6') && xPlayerSelections.includes('box7') && xPlayerSelections.includes('box8')
//         || xPlayerSelections.includes('box0') && xPlayerSelections.includes('box3') && xPlayerSelections.includes('box6')
//         || xPlayerSelections.includes('box1') && xPlayerSelections.includes('box4') && xPlayerSelections.includes('box7')
//         || xPlayerSelections.includes('box2') && xPlayerSelections.includes('box5') && xPlayerSelections.includes('box8')
//         || xPlayerSelections.includes('box0') && xPlayerSelections.includes('box4') && xPlayerSelections.includes('box8')
//         || xPlayerSelections.includes('box2') && xPlayerSelections.includes('box4') && xPlayerSelections.includes('box6')) {
//             allDivs.removeAttr("onClick");
//             heading.text("X Wins!!!!!!!")
//         } else if (moveOptions.length == 0) {
//             heading.text('Tie game')
//         }
//         currentPlayer = player2
//         return currentPlayer;
//     } else {
//         heading.text('it is X turn');
//         oPlayerSelections.push(boxId);
//         console.log('oPlayer', oPlayerSelections);
//         if(xPlayerSelections.includes('box0') && xPlayerSelections.includes('box1') && xPlayerSelections.includes('box2') 
//         || xPlayerSelections.includes('box3') && xPlayerSelections.includes('box4') && xPlayerSelections.includes('box5') 
//         || xPlayerSelections.includes('box6') && xPlayerSelections.includes('box7') && xPlayerSelections.includes('box8')
//         || xPlayerSelections.includes('box0') && xPlayerSelections.includes('box3') && xPlayerSelections.includes('box6')
//         || xPlayerSelections.includes('box1') && xPlayerSelections.includes('box4') && xPlayerSelections.includes('box7')
//         || xPlayerSelections.includes('box2') && xPlayerSelections.includes('box5') && xPlayerSelections.includes('box8')
//         || xPlayerSelections.includes('box0') && xPlayerSelections.includes('box4') && xPlayerSelections.includes('box8')
//         || xPlayerSelections.includes('box2') && xPlayerSelections.includes('box4') && xPlayerSelections.includes('box6')) {
//             allDivs.removeAttr("onClick");
//             heading.text("O Wins!!!!!!!")
//         } else if (moveOptions.length == 0) {
//             heading.text('Tie game')
//         }
//         currentPlayer = player1;
//         return currentPlayer;

//     };
// };


