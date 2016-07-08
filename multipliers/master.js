
var multiplierTable = document.createElement('table'), tr, td, row, cell;

multiplierTableHeader=document.createElement('tr');

function appendMultiplierTable(string){
	var c = document.createElement('td');
    multiplierTableHeader.appendChild(c);
    c.innerHTML=string;
}

appendMultiplierTable("Lv.");
appendMultiplierTable("Effects");
appendMultiplierTable("Price (E)");
appendMultiplierTable("Price (C1)");
appendMultiplierTable("Price (C2)");
appendMultiplierTable("Price (C3)");
appendMultiplierTable("Price (Ch)");
appendMultiplierTable("Price (X)");
appendMultiplierTable("Lv.");

multiplierTable.appendChild(multiplierTableHeader);

for (row = 0; row < maxLv; row++) {
    var tr = document.createElement('tr');
    var rowOfValue = [];
    
    td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.innerHTML = row+1;
    
    rowOfValue.push("×"+statMultiplier[row].toPrecision(4));
    rowOfValue.push("×"+priceMultiplierE[row].toPrecision(2));
    rowOfValue.push("×"+priceMultiplierC1[row].toPrecision(3));
    rowOfValue.push("×"+priceMultiplierC2[row].toPrecision(3));
    rowOfValue.push("×"+priceMultiplierC3[row].toPrecision(3));
    rowOfValue.push("×"+priceMultiplierCh[row].toPrecision(3));
    rowOfValue.push("×"+priceMultiplierX[row].toPrecision(2));
    
    function appendMultiplierValueByRow(value){
    	td = document.createElement('td');
		tr.appendChild(td);
        td.innerHTML=value;
        td.align="center";
    }
    
    for (i=0;i<rowOfValue.length;i++){
    	appendMultiplierValueByRow(rowOfValue[i])
    }
    
    tdf = document.createElement('td');
    tr.appendChild(tdf);
    tdf.innerHTML = row+1;
    
    multiplierTable.appendChild(tr);
}
    
var explanation = document.createElement('p');
var examples = document.createElement('p');

explanation.innerHTML="An item's sell price at a specified level can be predicted with its price multiplier. "
explanation.innerHTML+="The item's base sell price is its sell price at Lv. 1. "
explanation.innerHTML+="This info can be obtained from the item's info screen in shipping records, "
explanation.innerHTML+="shop lists, recipe lists, material lists in recipes, etc. "
explanation.innerHTML+="The item's price multiplier is not shown and must be determined by experimentation.<br><br>";
explanation.innerHTML+="For example, Pickled Turnip has a base sell price of 48 G (from the info screen) "
explanation.innerHTML+="and price multiplier C1 (as determined experimentally). "
explanation.innerHTML+="At Lv. 6, the price multiplier value for C1 is ×1.40. "
explanation.innerHTML+="Multiply the sell price by this multiplier:<br>48 G × 1.40 = 67.2 G<br>";
explanation.innerHTML+="Round this result down. Thus, Lv. 6 Pickled Turnip sells for 67 G.";

examples.innerHTML+="Raw materials and equipment have price multiplier E.<br>";
examples.innerHTML+="Most cooked dishes have price multiplier C1.<br>";
examples.innerHTML+="Some cooked dishes have price multiplier C2.<br>";
examples.innerHTML+="A few cooked dishes have price multiplier C3.<br>";
examples.innerHTML+="Most items produceable with the Chemistry Set have price multiplier Ch.<br>";
examples.innerHTML+="A few items have price multiplier X i.e. their sell prices do not change with respect to their level."

function showMultiplierTable(){
	var node = document.getElementById('multiplierTable');
	node.innerHTML="Hide Multiplier Table";
	document.getElementById('multiplierTableDiv').appendChild(multiplierTable);
    
    document.getElementById('multiplierTableDiv').appendChild(explanation)
    
    document.getElementById('multiplierTableDiv').appendChild(examples)
	node.setAttribute('onclick','hideMultiplierTable()');
    }

function hideMultiplierTable(){
	var node = document.getElementById('multiplierTable');
	node.innerHTML="Show Multiplier Table";
	node.setAttribute('onclick','showMultiplierTable()');
	document.getElementById('multiplierTableDiv').removeChild(multiplierTable);
    document.getElementById('multiplierTableDiv').removeChild(explanation)
    document.getElementById('multiplierTableDiv').removeChild(examples)
    }
