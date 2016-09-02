var objectListing=[];

var objectHeaderArray = ["Name","Category","Sell Price","Buy Price","Flavour Text"]

var shippingList = masterNameList.sort(indexComparator);

for (i=0;i<shippingList.length;i++){
	var currentNameSet = shippingList[i];
	var currentUniqueName = currentNameSet[2];
	var currentObject = masterItemList[currentUniqueName]
	var previousName
	if (currentObject.sell!==undefined&&currentObject.name!=previousName){
		var currentObjectInfo = [];
		currentObjectInfo.push(currentObject.name);
		currentObjectInfo.push(currentObject.category);
		currentObjectInfo.push(currentObject.sell);
		if (currentObject.buy!==undefined){
			currentObjectInfo.push(currentObject.buy);
		} else {
			currentObjectInfo.push("N/A");
		}
		currentObjectInfo.push(currentObject.flavourtext);
		objectListing.push(currentObjectInfo)
		previousName = currentObject.name;
	}
}

function listedNameComparator(a, b) {
   if (a[0].toLowerCase() < b[0].toLowerCase()){ return -1;
   } else if (a[0].toLowerCase() > b[0].toLowerCase()){ return 1;
   } else {return 0;}
}

function sellComparator(a, b) {
	if (parseInt(a[1]) < parseInt(b[1])){ return -1;
	} else if (parseInt(a[1]) > parseInt(b[1])){ return 1;
	} else {return 0};
}

//var sortedObjectListBySell = objectListing.sort(sellComparator);

var objectTable = document.createElement("table");
//document.getElementById('otherInfo').appendChild(objectTable);
objectTableHeader=document.createElement('tr');
objectTable.appendChild(objectTableHeader);

function appendObjectHeader(string){
	var c = document.createElement('td');
	objectTableHeader.appendChild(c);
	c.innerHTML=string;
	c.style.color="yellow"
}

objectHeaderArray.forEach(appendObjectHeader);

for (i=0;i<objectListing.length;i++){
	var row = document.createElement('tr');
	objectTable.appendChild(row);
	
	//var c = document.createElement('td');
	//row.appendChild(c);
	//c.innerHTML=i+1;
	
	var currentRow = objectListing[i];
	for (j=0;j<currentRow.length;j++){
		var c = document.createElement('td');
		row.appendChild(c);
		c.innerHTML=currentRow[j];
		if (i%2==0){
			c.style.color="pink"
		}
	}
}

function showAllItems(){
	clearPage()
	document.getElementById('otherInfo').appendChild(objectTable)
}
