var objectListing=[];

for (i=0;i<masterNameList.length;i++){
	var currentNameSet = masterNameList[i];
	var currentUniqueName = currentNameSet[2];
	var currentObject = masterItemList[currentUniqueName]
	var previousName
	if (currentObject.sell!==undefined&&currentObject.name!=previousName){
		var currentObjectInfo = [];
		currentObjectInfo.push(currentObject.name);
		currentObjectInfo.push(currentObject.sell);
		currentObjectInfo.push(currentObject.pricemultiplier);
		if (currentObject.buy!==undefined){
			currentObjectInfo.push(currentObject.buy);
		} else {
			currentObjectInfo.push("Not Buyable");
		}
		currentObjectInfo.push(currentObject.flavourtext);
		objectListing.push(currentObjectInfo)
		previousName = currentObject.name;
	}
}

function fooComparator(a, b) {
	if (parseInt(a[1]) < parseInt(b[1])){ return -1;
	} else if (parseInt(a[1]) > parseInt(b[1])){ return 1;
	} else {return 0};
}

var sortedObjectListBySell = objectListing.sort(fooComparator);

var objectTable = document.createElement("table");
//document.getElementById('otherInfo').appendChild(objectTable);
objectTableHeader=document.createElement('tr');
objectTable.appendChild(objectTableHeader);

function appendObjectHeader(string){
	var c = document.createElement('td');
	objectTableHeader.appendChild(c);
	c.innerHTML=string;
}

appendObjectHeader("Number");
appendObjectHeader("Name");
appendObjectHeader("Sell Price");
appendObjectHeader("Price Multiplier");
appendObjectHeader("Buy Price");
appendObjectHeader("Flavour Text");

for (i=0;i<objectListing.length;i++){
	var row = document.createElement('tr');
	objectTable.appendChild(row);
	
	var c = document.createElement('td');
	row.appendChild(c);
	c.innerHTML=i+1;
	
	var currentRow = objectListing[i];
	for (j=0;j<currentRow.length;j++){
		var c = document.createElement('td');
		row.appendChild(c);
		c.innerHTML=currentRow[j];
	}
}

function showAllItems(){
	clearPage()
	document.getElementById('otherInfo').appendChild(objectTable)
}
