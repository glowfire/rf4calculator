var seedListing=[];
var seedHeaderArray=["Seed","Buy Price","Spring Growth","Summer Growth","Autumn Growth","Winter Growth","Harvested","Value","Min ROI/day"];

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
		if (currentSeed.harvest!==undefined||currentSeed.value!==undefined){
			currentSeedInfo.push(currentSeed.harvested);
			currentSeedInfo.push(currentSeed.value);
			var a = currentSeed.harvested
			var b = currentSeed.value
			var c = currentSeed.sell
			var d = Math.max(currentSeed.getGrowthAtSeason("spring"),currentSeed.getGrowthAtSeason("summer"),currentSeed.getGrowthAtSeason("winter"))
			var current ROIpd = (a*b-c)/d
		} else {
			currentSeedInfo.push("N/A");
			currentSeedInfo.push("N/A");
			currentSeedInfo.push("N/A");
		}
		currentSeedInfo.push(currentSeed.getTotalFourSeasonsGrowth());
		seedListing.push(currentSeedInfo)
	}
}

function springComparator(a, b) {
	var index = seedHeaderArray.length + 1
	if (parseInt(a[index]) < parseInt(b[index])){ return -1;
	} else if (parseInt(a[index]) > parseInt(b[index])){ return 1;
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

seedHeaderArray.forEach(appendSeedHeader);

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
