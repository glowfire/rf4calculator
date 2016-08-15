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

var seedListing=[];

for (i=0;i<sortedMasterNameList.length;i++){
	var currentNameSet = sortedMasterNameList[i];
	var currentUniqueName = currentNameSet[2];
	var currentObject = masterItemList[currentUniqueName]
	if (currentObject.sell!==undefined){
		var currentSeed = currentObject;
		var currentSeedInfo = [];
		currentSeedInfo.push(i+1);
		currentSeedInfo.push(currentSeed.name);
		currentSeedInfo.push(currentSeed.sell);
		seedListing.push(currentSeedInfo)
	}
}

var sortedSeedListSpring = seedListing.sort(springComparator);

var seedTable = document.createElement("table");
document.getElementById('otherInfo').appendChild(seedTable);
seedTableHeader=document.createElement('tr');
seedTable.appendChild(seedTableHeader);

function appendSeedHeader(string){
	var c = document.createElement('td');
	seedTableHeader.appendChild(c);
	c.innerHTML=string;
}

appendSeedHeader("Number");
appendSeedHeader("Name");
appendSeedHeader("Sell Price");

for (i=0;i<seedListing.length;i++){
	var row = document.createElement('tr');
	seedTable.appendChild(row);
	
	var currentRow = seedListing[i];
	for (j=0;j<currentRow.length;j++){
		var c = document.createElement('td');
		row.appendChild(c);
		c.innerHTML=currentRow[j];
	}
	var c = document.createElement('td');
	row.appendChild(c);
	c.innerHTML=i+1;
}
