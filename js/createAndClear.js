var rows = 20;
var columns  = 10;


function clearSpreadsheet(){
    createSpreadsheet();
    document.getElementById('value').value = " ";
    for (var i = 0; i < TBLROWS; i++){
    tblArray[i] = [];
        for (var j = 0; j < TBLCOLUMNS; j++)
    tblArray[i][j] = "";
    }
    console.log(tblArray);

}

function createSpreadsheet() {
    var columns = 10;
    document.getElementById("SpreadsheetTable").innerHTML = buildTable(rows, columns);
}

function buildTable(rows, columns) {
    var divHTML = "<table border='1' cellpadding='0' cellspacing='0' class='TableClass'>";

            // next do the column header labels
            divHTML += "<tr><th></th>";

            for (var j = 0; j < columns; j++)
                divHTML += "<th>" + String.fromCharCode(j + 65) + "</th>";

            // closing row tag for the headers
            divHTML += "</tr>";

            // now do the main table area
            for (var i = 1; i <= rows; i++) {
                divHTML += "<tr>";
                // ...first column of the current row (row label)
                divHTML += "<td id='" + i + "_0' class='BaseColumn'>" + i + "</td>";

                // ... the rest of the columns
                for (var j = 1; j <= columns; j++)
                    divHTML += "<td id='" + i + "_" + j + "' class='AlphaColumn' onclick='clickCell(this)'></td>";

                // ...end of row
                divHTML += "</tr>";
            }

            // finally add the end of table tag
            divHTML += "</table>";

            //alert(divHTML);
            return divHTML;

    
}