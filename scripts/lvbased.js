function getPriceTable(){
	
	document.getElementById('profitTable').innerHTML=""
	
	var headerArray=["Lv.","Multiplier<br>(Type: ","Sell Price","Increment from<br>Previous Level","Cumulative<br>Increment"];
	headerArray[1]+=currentItem.pricemultiplier+")";
	
	var integerCorrector = 1e8;
	var currentPriceMultiplier = getPriceMultiplierArray(currentItem.pricemultiplier);
	
	var lvArray = [];
	var priceMultiArray = [];
	var sellPriceArray = [];
	var incrementArray = ["N/A"];
	var cumulativeArray = [];
	
	var cumSum = 0;
	
	var ROIarray = [];
	var ROIperDayArray = [];
	
	var profitArrayNoDisc = [];
	var profitArrayWDisc = [];
	
	for (i=0;i<maxLv;i++){
		lvArray.push(i+1);
		priceMultiArray.push(currentPriceMultiplier[i].toPrecision(3))
		sellPriceArray.push(getSellPriceAtLevel(currentItem,i+1))
		if (i>0){
			incrementArray.push(sellPriceArray[i]-sellPriceArray[i-1])
			cumSum+=incrementArray[i];
		}
		cumulativeArray.push(cumSum)
	}
	
	if (currentItem.harvested!==undefined){
		headerArray.push("Return On<br>Investment")
		headerArray.push("ROI/Day<br>(Normal Growth)")
		
		var currentSeed = currentItem
		
		var integerCorrector=1e6;
		// Not converting all factors into integers may result in undesirable floating numbers
		var currentCropString = currentSeed.crop
		var currentCrop = currentCropString.convertStringToItem()
		var currentCropPriceMultiplier = getPriceMultiplierArray(currentCrop.pricemultiplier)
			
		for (i=0;i<maxLv;i++){
			var currentModifiedMultiplier=integerCorrector*currentCropPriceMultiplier[i];
			
			var currentValueModified = currentModifiedMultiplier*currentSeed.harvested*currentCrop.sell
			var currentValue = Math.floor(currentValueModified/integerCorrector);
			var currentROI = (currentValue-currentSeed.buy)/currentSeed.buy
			var currentROIperDay = currentROI/currentSeed.growth
			ROIarray.push(currentROI.toPrecision(5))
			ROIperDayArray.push(currentROIperDay.toPrecision(5))
		}
	}
	
	if ((currentItem.cookinglevel!=undefined||currentItem.chemistrylevel!==undefined)&&currentMaterialsBuyPrice>0){
		headerArray.push("Profit<br>(no discounts)")
		headerArray.push("Profit<br>(with discounts)")
		
		for (i=0;i<maxLv;i++){
			var currentSellPrice = getSellPriceAtLevel(currentItem,i+1)
			profitArrayNoDisc.push(currentSellPrice-currentMaterialsBuyPrice)
			profitArrayWDisc.push(currentSellPrice-currentMaterialsBuyPriceDiscount)
		}
		
	}
	
	var priceTableEntry = lvArray
	priceTableEntry.arrayPush(priceMultiArray)
	priceTableEntry.arrayPush(sellPriceArray)
	priceTableEntry.arrayPush(incrementArray)
	priceTableEntry.arrayPush(cumulativeArray)
	
	priceTableEntry.arrayPush(ROIarray)
	priceTableEntry.arrayPush(ROIperDayArray)
	
	priceTableEntry.arrayPush(profitArrayNoDisc)
	priceTableEntry.arrayPush(profitArrayWDisc)
	//priceTableEntry.arrayPush()
	
	var priceTable = document.createElement('table')
	var priceTableHeader = document.createElement('tr')
	priceTable.appendChild(priceTableHeader)
	
	document.getElementById('profitTable').appendChild(priceTable);
	
	for (i=0;i<headerArray.length;i++){
		var c = document.createElement('td');
		priceTableHeader.appendChild(c);
		c.innerHTML=headerArray[i];
	}
	
	for (i=0;i<maxLv;i++){
		var lvRow = document.createElement('tr')
		priceTable.appendChild(lvRow)
		
		for (j=0;j<(priceTableEntry.length)/maxLv;j++){
			var c = document.createElement('td');
			c.innerHTML=priceTableEntry[i+j*maxLv];
			lvRow.appendChild(c);
			
			if (j==headerArray.indexOf("Profit<br>(no discounts)")){
				if (c.innerHTML<0){
					c.style.color="red";
				} else {
					c.style.color="#00FF00";
					c.style.fontWeight="bold";
				}
			}
			
			if (j==headerArray.indexOf("Profit<br>(with discounts)")){
				if (c.innerHTML<0){
					c.style.color="red"
				} else if(priceTableEntry[i+(j-1)*maxLv]<0){
					c.style.color="lightskyblue";
					c.style.fontWeight="bold";
				} else {
					c.style.color="#00FF00";
					c.style.fontWeight="bold";
				}
			}
		}
	}
	
}
