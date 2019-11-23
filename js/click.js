//function clikc the enter
function clikcEnter(ref){
    if (window.event.keyCode === 13){
        //get value from the text box
       var tbValue = document.getElementById(ref.id).value;
        document.getElementById(`${GLOBALROW}_${GLOBALCOLLUMN}`).innerHTML = tbValue;
        //put the index into array
        tblArray[GLOBALROW - 1][GLOBALCOLLUMN - 1] = tbValue;
        //we have to do -1 because the index starts with 0
        calculateCell(GLOBALROW - 1, GLOBALCOLLUMN - 1);
        recalculate();
    }
}
function clickCell(clickCell) {
    //get the cell id
    let cellId = clickCell.id;
    //output the id to the console
    console.log(cellId);
    //shows the index of the cell with the '_'
    var indexOfCell = clickCell.id.split('_');
    indexOfCell[0] = parseInt(indexOfCell[0]);
    indexOfCell[1] = parseInt(indexOfCell[1]);
    cellInd = indexOfCell;
    GLOBALROW = indexOfCell[0];
    GLOBALCOLLUMN = indexOfCell[1];
    //change the color of the clicked cell
    clickCell.style.backgroundColor = "#a4cffc";
    //output the value to the input field
    document.getElementById('value').value = tblArray[GLOBALROW - 1][GLOBALCOLLUMN - 1];
    
}