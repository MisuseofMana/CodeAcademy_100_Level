let gameMarker = "X";

function placeMark(id) {
    
    if (document.getElementById(id).innerHTML == "") {
        document.getElementById(id).innerHTML = "<p>" + gameMarker + "</p>";     
    } else {
        return;
    }
            
    if (gameMarker == "X") {
            return gameMarker = "O";
        } else {
            return gameMarker = "X"
        }
}

function clearBoard() {
    let i = 1;
    for (i = 1; 1 <= 9; i++) {
        document.getElementById("box" + i).innerHTML = "";
    }
}
