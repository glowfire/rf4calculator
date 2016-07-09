var maxLv=10;
var integerCorrector = 1e6; // For use when non-integers are involved in multiplications.

var statMultiplier=[1];
var statIncrement=.125;

var priceMultiplierE=[1];
var EIncrement=.1;

var priceMultiplierC1=[1,1.05,1.1,1.15,1.25,1.4,1.6,2,2.5,3];
var priceMultiplierC2=[1,1.05,1.1,1.15,1.25,1.5,2,2.5,3,4];
var priceMultiplierC3=[1,1.05,1.1,1.15,1.25,1.5,2,3,4,5];

var priceMultiplierCh=[1];
var ChIncrement=.05;

var priceMultiplierSd=[1];
var SdIncrement=.02;

var priceMultiplierX=[1];

for (i=1;i<maxLv;i++){
	
	priceMultiplierX.push(1);
	
	var lastElementStat=statMultiplier[i-1];
	var currentElementStat=lastElementStat+statIncrement;
	
	var lastElementCh=priceMultiplierCh[i-1];
	var currentElementCh=lastElementCh+ChIncrement;
	
	var lastElementE=priceMultiplierE[i-1];
	var currentElementE=lastElementE+EIncrement;
	
	var lastElementSd=priceMultiplierSd[i-1];
	var currentElementSd=lastElementSd+SdIncrement;
	
	if (i==(maxLv-1)){
		currentElementCh=lastElementCh+(2*(ChIncrement*integerCorrector))/integerCorrector;
		currentElementE=lastElementE+(2*(EIncrement*integerCorrector))/integerCorrector;
		currentElementSd=lastElementSd+(2*(SdIncrement*integerCorrector))/integerCorrector;
	}
	
	statMultiplier.push(currentElementStat);
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
appendMultiplierTable("Type E");
appendMultiplierTable("Type C1");
appendMultiplierTable("Type C2");
appendMultiplierTable("Type C3");
appendMultiplierTable("Type Ch");
appendMultiplierTable("Type Sd");
appendMultiplierTable("Type X");
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
	}
	
	for (i=0;i<rowOfValue.length;i++){
		appendMultiplierValueByRow(rowOfValue[i]);
	}
	
	tdf = document.createElement('td');
	tr.appendChild(tdf);
	tdf.innerHTML = row+1;
	
	multiplierTable.appendChild(tr);
}
    
var explanation = document.createElement('p');
var examples = document.createElement('p');

explanation.innerHTML="An item's sell price at a specified level can be predicted with its price multiplier type and base sell price. ";
explanation.innerHTML+="The item's base sell price is its sell price at Lv. 1. This info can be obtained from the item's info screen in shipping records, recipes, etc. ";
explanation.innerHTML+="The item's price multiplier type is not shown and must be determined by experimentation.<br><br>";
explanation.innerHTML+="For example, Pickled Turnip has a base sell price of 48 G (from the info screen) and price multiplier type C1 (as determined experimentally). At Lv. 6, the price multiplier value for C1 is ×1.40. Multiply the sell price by this multiplier: 48 G × 1.40 = 67.2 G. Round this result down. Thus, Lv. 6 Pickled Turnip sells for 67 G.";

examples.innerHTML="<br>Items with the same price multiplier type can be grouped together. The following is a breakdown of the groups by price multipler type.<br>";
examples.innerHTML+="<br>Group E: By far the biggest price multiplier group in the game. Raw materials, growables, equipment, rune abilities and spells have price multiplier type E. It may be easier to list items that are not in this group: seeds, cooked dishes, [Fish] items and products of the Chemistry Set.<br>";
examples.innerHTML+="<br>Group C1: Almost all cooked dishes fall under this group. Interestingly, some [Fish] items also have price multiplier type C1. <br>";
examples.innerHTML+="<br>Group C2: Known cooked dishes with this price multiplier have [Fish] with 10,000 G - 59,000 G buy prices. For example: Blowfish Sashimi, Grilled Yellowtail and Rockfish Stew. Some [Fish] also have this price multiplier type.<br>";
examples.innerHTML+="<br>Group C3: This group includes cooked [Fish] dishes whose [Fish] ingredient have buy prices above 60,000 G. Some [Fish] also fall under this group.<br>";
examples.innerHTML+="<br>Group Ch: This group mainly consists of Chemistry Set products. Also included are Branch, Rock, Lumber and Material Stone.<br>";
examples.innerHTML+="<br>Group Sd: This group may exclusively consist of [Seed] items.<br>";
examples.innerHTML+="<br>Group X: Items in this tiny group have sell prices that are the same regardless of their levels. Currently known items with this behaviour are Dolphin Brooch and Strange Pendant.";

function showMultiplierTable(){
	var node = document.getElementById('multiplierTable');
	node.innerHTML="Hide Multiplier Table";
	document.getElementById('multiplierTableDiv').appendChild(multiplierTable);
	document.getElementById('multiplierTableDiv').appendChild(explanation);
	document.getElementById('multiplierTableDiv').appendChild(examples);
	node.setAttribute('onclick','hideMultiplierTable()');
}

function hideMultiplierTable(){
	var node = document.getElementById('multiplierTable');
	node.innerHTML="Show Multiplier Table";
	node.setAttribute('onclick','showMultiplierTable()');
	document.getElementById('multiplierTableDiv').removeChild(multiplierTable);
	document.getElementById('multiplierTableDiv').removeChild(explanation);
	document.getElementById('multiplierTableDiv').removeChild(examples);
}
