var seedListing=[];

Object.prototype.getGrowthAtSeason = function(currentSeason){
	var seedSeasons = this.seasons
	switch(seedSeasons[currentSeason]){
		case ("good"):
			return Math.ceil(this.growth*2/3);
			break;
		case ("bad"):
			return Math.ceil(this.growth*3/2);
			break;
		default:
			return this.growth
	}
}

for (i=0;i<sortedMasterNameList.length;i++){
	var currentNameSet = sortedMasterNameList[i];
	var currentUniqueName = currentNameSet[2];
	var currentObject = masterItemList[currentUniqueName]
	if (currentObject.category=="Seed"){
		var currentSeed = currentObject;
		var currentSeedInfo = [];
		if (currentSeed.crop!==undefined){
			currentSeedInfo.push(currentSeed.crop);
		} else {
			currentSeedInfo.push("Dungeon")
		}
		currentSeedInfo.push(currentSeed.buy);
		currentSeedInfo.push(currentSeed.getGrowthAtSeason("spring"));
		currentSeedInfo.push(currentSeed.getGrowthAtSeason("summer"));
		currentSeedInfo.push(currentSeed.getGrowthAtSeason("autumn"));
		currentSeedInfo.push(currentSeed.getGrowthAtSeason("winter"));
		seedListing.push(currentSeedInfo)
	}
}

function springComparator(a, b) {
	if (parseInt(a[2]) < parseInt(b[2])){ return -1;
	} else if (parseInt(a[2]) > parseInt(b[2])){ return 1;
	} else {return 0};
}

var sortedSeedListSpring = seedListing.sort(springComparator);

var seedTable = document.createElement("table");
//document.getElementById('otherInfo').appendChild(seedTable);
seedTableHeader=document.createElement('tr');
seedTable.appendChild(seedTableHeader);

function appendSeedHeader(string){
	var c = document.createElement('td');
	seedTableHeader.appendChild(c);
	c.innerHTML=string;
}

appendSeedHeader("Crop");
appendSeedHeader("Buy Price");
appendSeedHeader("Spring Growth");
appendSeedHeader("Summer Growth");
appendSeedHeader("Autumn Growth");
appendSeedHeader("Winter Growth");

for (i=0;i<seedListing.length;i++){
	var row = document.createElement('tr');
	seedTable.appendChild(row);
	
	var currentRow = seedListing[i];
	for (j=0;j<currentRow.length;j++){
		var c = document.createElement('td');
		row.appendChild(c);
		c.innerHTML=currentRow[j];
	}
}

var objectListing=[];

for (i=0;i<sortedMasterNameList.length;i++){
	var currentNameSet = sortedMasterNameList[i];
	var currentUniqueName = currentNameSet[2];
	var currentObject = masterItemList[currentUniqueName]
	var previousName
	if (currentObject.sell!==undefined&&currentObject.name!=previousName){
		var currentObjectInfo = [];
		currentObjectInfo.push(currentObject.name);
		currentObjectInfo.push(currentObject.sell);
		if (currentObject.buy!==undefined){
			currentObjectInfo.push(currentObject.buy);
		} else {
			currentObjectInfo.push("Not Buyable");
		}
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
document.getElementById('otherInfo').appendChild(objectTable);
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
appendObjectHeader("Buy Price");

for (i=0;i<objectListing.length;i++){
	var row = document.createElement('tr');
	objectTable.appendChild(row);
	
	var c = document.createElement('td');
	row.appendChild(c);
	c.innerHTML=i+1;
	
	var currentRow = seedListing[i];
	for (j=0;j<currentRow.length;j++){
		var c = document.createElement('td');
		row.appendChild(c);
		c.innerHTML=currentRow[j];
	}
}
