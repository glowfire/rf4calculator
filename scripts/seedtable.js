var seedListing=[];

Object.prototype.getGrowthAtSeason = function(currentSeason){
	var seedSeasons = this.seasons
	switch(seedSeasons.currentSeason){
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

for (i in masterItemList){
	if (i.category=="Seed"){
		var currentSeed = i;
		var currentSeedInfo = [];
		if (currentSeed.crop!==undefined){
			currentSeedInfo.push(currentSeed.crop);
		} else {
			currentSeedInfo.push("")
		}
		currentSeedInfo.push(currentSeed.buy);
		currentSeedInfo.push(currentSeed.getGrowthAtSeason("spring"));
		currentSeedInfo.push(currentSeed.getGrowthAtSeason("summer"));
		currentSeedInfo.push(currentSeed.getGrowthAtSeason("autumn"));
		currentSeedInfo.push(currentSeed.getGrowthAtSeason("winter"));
		seedListing.push(currentSeedInfo)
	}
}
