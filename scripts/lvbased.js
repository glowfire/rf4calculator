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
	
	var profitArrayNoDisc = [];
	var profitArrayWDisc = [];
	
	var ROInoDiscArray = [];
	var ROIwDiscArray = [];
	
	var seedROIarray = [];
	var seedROIperDayArray = [];
	
	var opportunityArray = [];
	
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
	
	if ((currentItem.cookinglevel!=undefined||currentItem.chemistrylevel!==undefined)&&currentMaterialsBuyPrice>0){
		headerArray.push("Profit<br>(no discounts)")
		headerArray.push("Profit<br>(with discounts)")
		
		headerArray.push("Return On<br>Investment")
		headerArray.push("ROI with<br>Discounts")
		
		for (i=0;i<maxLv;i++){
			var currentSellPrice = getSellPriceAtLevel(currentItem,i+1)
			
			var currentProfitNoDisc = currentSellPrice-currentMaterialsBuyPrice
			var currentProfitWDisc = currentSellPrice-currentMaterialsBuyPriceDiscount
			var currentROInoDisc = currentProfitNoDisc/currentMaterialsBuyPrice
			var currentROIwDisc = currentProfitWDisc/currentMaterialsBuyPriceDiscount
			
			profitArrayNoDisc.push(currentProfitNoDisc)
			profitArrayWDisc.push(currentProfitWDisc)
			ROInoDiscArray.push(currentROInoDisc.toPrecision(5))
			ROIwDiscArray.push(currentROIwDisc.toPrecision(5))
		}
	}
	
	if (currentItem.harvested!==undefined){
		headerArray.push("Return On<br>Investment")
		headerArray.push("ROI/Day<br>(Normal Growth)")
		
		var currentSeed = currentItem
		
		var currentCropString = currentSeed.crop
		var currentCrop = currentCropString.convertStringToItem()
			
		for (i=0;i<maxLv;i++){
			var currentTotalValue = currentSeed.harvested*getSellPriceAtLevel(currentCrop,i+1)
			var currentROI = (currentTotalValue-currentSeed.buy)/currentSeed.buy
			var currentROIperDay = currentROI/currentSeed.growth
			seedROIarray.push(currentROI.toPrecision(5))
			seedROIperDayArray.push(currentROIperDay.toPrecision(5))
		}
	}
	////////////// unfinished
	if (currentItem.cookinglevel!=undefined||currentItem.chemistrylevel!==undefined){
		//headerArray.push("Opportunity Cost")
		
		for (i=0;i<maxLv;i++){
			//opportunityArray.push()
		}
	}
	
	var priceTableEntry = lvArray
	priceTableEntry.arrayPush(priceMultiArray)
	priceTableEntry.arrayPush(sellPriceArray)
	priceTableEntry.arrayPush(incrementArray)
	priceTableEntry.arrayPush(cumulativeArray)
	
	priceTableEntry.arrayPush(profitArrayNoDisc)
	priceTableEntry.arrayPush(profitArrayWDisc)
	
	priceTableEntry.arrayPush(ROInoDiscArray)
	priceTableEntry.arrayPush(ROIwDiscArray)
	
	priceTableEntry.arrayPush(seedROIarray)
	priceTableEntry.arrayPush(seedROIperDayArray)
	
	//priceTableEntry.arrayPush(opportunityArray)
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
			
			if (j==headerArray.indexOf("Return On<br>Investment")||j==headerArray.indexOf("ROI with<br>Discounts")||j==headerArray.indexOf("ROI/Day<br>(Normal Growth)")){
				c.innerHTML*=100;
				c.innerHTML+="%"
			}
		}
	}
	
}
