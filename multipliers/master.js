var maxLv=10;

var statMultiplier=[1];
var priceMultiplierE=[1];
var priceMultiplierC1=[1,1.05,1.1,1.15,1.25,1.4,1.6,2,2.5,3];
var priceMultiplierC2=[1,1.05,1.1,1.15,1.25,1.5,2,2.5,3,4];
var priceMultiplierC3=[1,1.05,1.1,1.15,1.25,1.5,2,3,4,5];
var priceMultiplierCh=[1];
var priceMultiplierSd=[1];
var priceMultiplierX=[1];

for (i=1;i<maxLv;i++){
	
	priceMultiplierX.push(1);
	
	var lastElementStat=statMultiplier[i-1];
	var statIncrement=.125
	var currentElementStat=lastElementStat+statIncrement;
	statMultiplier.push(currentElementStat);
	
	var lastElementCh=priceMultiplierCh[i-1];
	var ChIncrement=.05
	var currentElementCh=lastElementCh+ChIncrement;
	
	var lastElementE=priceMultiplierE[i-1];
	var EIncrement=.1
	var currentElementE=lastElementE+EIncrement;
	
	var lastElementSd=priceMultiplierSd[i-1];
	var SdIncrement=.02
	var currentElementSd=lastElementSd+SdIncrement;
	if (i==(maxLv-1)){
		currentElementCh=lastElementCh+2*ChIncrement;
		currentElementE=lastElementE+2*EIncrement;
		currentElementSd=lastElementSd+2*SdIncrement;
	}
	priceMultiplierCh.push(currentElementCh);
	priceMultiplierE.push(currentElementE);
	priceMultiplierSd.push(currentElementSd);
        
}

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
appendMultiplierTable("Price (Sd)");
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
    rowOfValue.push("×"+priceMultiplierSd[row].toPrecision(3));
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

examples.innerHTML="<br>Items with the same price multipliers can be grouped together. The following is a breakdown of the groups by price multiplers."
examples.innerHTML+="<br>Group E: By far the most used price multiplier in the game. Raw materials, growables, equipment, rune abilities and spells have this price multiplier. It may be simpler to list the items whose price multiplier is not E: seeds, cooked dishes, fish and products of the Chemistry Set.<br>";
examples.innerHTML+="<br>Group C1: Almost all cooked dishes have this price multiplier. The known exceptions to this rule have [Fish] in the recipe. Also, some [Fish] items have this price multiplier. <br>";
examples.innerHTML+="<br>Group C2: Known cooked dishes with this price multiplier have [Fish] with 10,000 G - 59,000 G buy prices. For example: Blowfish Sashimi, Grilled Yellowtail and Rockfish Stew. Some [Fish] also have this price multiplier.<br>";
examples.innerHTML+="<br>Group C3: This group includes cooked [Fish] dishes whose [Fish] ingredient have buy prices above 60,000 G. Some [Fish] also fall under this group.<br>";
examples.innerHTML+="<br>Group Ch: This group may exclusively consists of Chemistry Set products.<br>";
examples.innerHTML+="<br>Group Sd: This group may exclusively consists of [Seed] items.<br>";
examples.innerHTML+="<br>Group X: Items in this tiny group have sell prices that are the same regardless of their levels. Currently known items with this behaviour are Dolphin Brooch and Strnage Pendant."

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
