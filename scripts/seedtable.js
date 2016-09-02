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

Object.prototype.getTotalFourSeasonsGrowth = function(){
	var totalGrowthFourSeasons = 0
	totalGrowthFourSeasons += this.getGrowthAtSeason("spring")
	totalGrowthFourSeasons += this.getGrowthAtSeason("summer")
	totalGrowthFourSeasons += this.getGrowthAtSeason("autumn")
	totalGrowthFourSeasons += this.getGrowthAtSeason("winter")
	return totalGrowthFourSeasons
}

for (i=0;i<sortedMasterNameList.length;i++){
	var currentNameSet = sortedMasterNameList[i];
	var currentUniqueName = currentNameSet[2];
	var currentObject = masterItemList[currentUniqueName]
	if (currentObject.category=="Seed"){
		var currentSeed = currentObject;
		var currentSeedInfo = [];
		currentSeedInfo.push(currentSeed.name);
		currentSeedInfo.push(currentSeed.buy);
		currentSeedInfo.push(currentSeed.getGrowthAtSeason("spring"));
		currentSeedInfo.push(currentSeed.getGrowthAtSeason("summer"));
		currentSeedInfo.push(currentSeed.getGrowthAtSeason("autumn"));
		currentSeedInfo.push(currentSeed.getGrowthAtSeason("winter"));
		currentSeedInfo.push(currentSeed.getTotalFourSeasonsGrowth());
		seedListing.push(currentSeedInfo)
	}
}

function springComparator(a, b) {
	if (parseInt(a[2]) < parseInt(b[2])){ return -1;
	} else if (parseInt(a[2]) > parseInt(b[2])){ return 1;
	} else {return 0};
}

function fourSeasonsComparator(a, b) {
	if (parseInt(a[6]) < parseInt(b[6])){ return -1;
	} else if (parseInt(a[6]) > parseInt(b[6])){ return 1;
	} else {return 0};
}

var sortedSeedListSpring = seedListing.sort(springComparator);
var sortedSeedListByFourSeasons = seedListing.sort(fourSeasonsComparator);

var seedTable = document.createElement("table");
//document.getElementById('otherInfo').appendChild(seedTable);
seedTableHeader=document.createElement('tr');
seedTable.appendChild(seedTableHeader);

function appendSeedHeader(string){
	var c = document.createElement('td');
	seedTableHeader.appendChild(c);
	c.innerHTML=string;
	c.style.color="yellow"
}

appendSeedHeader("Seed");
appendSeedHeader("Buy Price");
appendSeedHeader("Spring Growth");
appendSeedHeader("Summer Growth");
appendSeedHeader("Autumn Growth");
appendSeedHeader("Winter Growth");

for (i=0;i<sortedSeedListByFourSeasons.length;i++){
	var row = document.createElement('tr');
	seedTable.appendChild(row);
	
	var currentRow = sortedSeedListByFourSeasons[i];
	var nColumn=currentRow.length-1
	for (j=0;j<nColumn;j++){
		var c = document.createElement('td');
		row.appendChild(c);
		c.innerHTML=currentRow[j];
	}
}

function showAllSeed(){
	clearPage()
	document.getElementById('otherInfo').appendChild(seedTable);
}
