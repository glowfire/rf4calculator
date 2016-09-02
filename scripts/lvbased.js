function getPriceTable(){
	
	document.getElementById('profitTable').innerHTML="<b>Price Table</b>"
	
	var headerArray=["Lv.","Multiplier<br>(Type: ","Sell Price","Increment from<br>Previous Level","Cumulative<br>Increment"];
	headerArray[1]+=currentItem.pricemultiplier+")";
	
	var currentPriceMultiplier = getPriceMultiplierArray(currentItem.pricemultiplier);
	
	var lvArray = [];
	var priceMultiArray = [];
	var sellPriceArray = [];
	var incrementArray = ["N/A"];
	var cumulativeArray = [];
	
	var cumSum = 0;
	
	var profitArrayNoDisc = [];
	var profitArrayWDisc = [];
	var profitArrayWDisc20 = [];
	
	var ROInoDiscArray = [];
	var ROIwDiscArray = [];
	var ROIwDiscArray20 = [];
	
	var seedProfitArray = [];
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
		headerArray.push("Profit<br>(10% discount)")
		headerArray.push("Profit<br>(20% discount)")
		
		headerArray.push("Return On<br>Investment")
		headerArray.push("ROI with<br>10% Discount")
		headerArray.push("ROI with<br>20% Discount")
		
		for (i=0;i<maxLv;i++){
			var currentSellPrice = getSellPriceAtLevel(currentItem,i+1)
			
			var currentProfitNoDisc = currentSellPrice-currentMaterialsBuyPrice
			var currentProfitWDisc = currentSellPrice-currentMaterialsBuyPriceDiscount
			var currentProfitWDisc20 = currentSellPrice-currentMaterialsBuyPriceDiscount20
			var currentROInoDisc = currentProfitNoDisc/currentMaterialsBuyPrice
			var currentROIwDisc = currentProfitWDisc/currentMaterialsBuyPriceDiscount
			var currentROIwDisc20 = currentProfitWDisc20/currentMaterialsBuyPriceDiscount20
			
			profitArrayNoDisc.push(currentProfitNoDisc)
			profitArrayWDisc.push(currentProfitWDisc)
			profitArrayWDisc20.push(currentProfitWDisc20)
			ROInoDiscArray.push(currentROInoDisc)
			ROIwDiscArray.push(currentROIwDisc)
			ROIwDiscArray20.push(currentROIwDisc20)
		}
	}
	
	if (currentItem.harvested!==undefined){
		headerArray.push("Crop Profit<br>(one harvest)")
		headerArray.push("ROI/Day<br>(Normal Growth)")
		
		var currentSeed = currentItem
		
		var currentCropString = currentSeed.crop
		var currentCrop = currentCropString.convertStringToItem()
			
		for (i=0;i<maxLv;i++){
			var currentTotalValue = currentSeed.harvested*getSellPriceAtLevel(currentCrop,i+1)
			var currentProfit = currentTotalValue-currentSeed.buy
			var currentROI = (currentProfit)/currentSeed.buy
			var currentROIperDay = currentROI/currentSeed.growth
			seedProfitArray.push(currentProfit)
			seedROIperDayArray.push(currentROIperDay)
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
	priceTableEntry.arrayPush(profitArrayWDisc20)
	
	priceTableEntry.arrayPush(ROInoDiscArray)
	priceTableEntry.arrayPush(ROIwDiscArray)
	priceTableEntry.arrayPush(ROIwDiscArray20)
	
	priceTableEntry.arrayPush(seedProfitArray)
	priceTableEntry.arrayPush(seedROIperDayArray)
	
	//priceTableEntry.arrayPush(opportunityArray)
	//priceTableEntry.arrayPush()
	
	var priceTable = document.createElement('table')
	var priceTableHeader = document.createElement('tr')
	priceTable.appendChild(priceTableHeader)
	
	document.getElementById('profitTable').appendChild(priceTable);
	
	var redText = false
	var blueText = false
	var greenText = false
	
	for (i=0;i<headerArray.length;i++){
		var c = document.createElement('td');
		priceTableHeader.appendChild(c);
		c.innerHTML=headerArray[i];
		c.style.color="yellow"
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
					redText = true
				} else {
					c.style.color="#00FF00";
					c.style.fontWeight="bold";
					greenText = true
				}
			}
			
			if (j==headerArray.indexOf("Profit<br>(10% discount)")){
				if (c.innerHTML<0){
					c.style.color="red"
					redText = true
				} else if(priceTableEntry[i+(j-1)*maxLv]<0){
					c.style.color="lightskyblue";
					c.style.fontWeight="bold";
					blueText = true
				} else {
					c.style.color="#00FF00";
					c.style.fontWeight="bold";
					greenText = true
				}
			}
			
			if (j==headerArray.indexOf("Profit<br>(20% discount)")){
				if (c.innerHTML<0){
					c.style.color="red"
					redText = true
				} else if(priceTableEntry[i+(j-1)*maxLv]<0){
					c.style.color="darkblue";
					c.style.fontWeight="bold";
					blueText = true
				} else if(priceTableEntry[i+(j-2)*maxLv]<0){
					c.style.color="lightskyblue";
					c.style.fontWeight="bold";
					blueText = true
				} else {
					c.style.color="#00FF00";
					c.style.fontWeight="bold";
					greenText = true
				}
			}
			
			if (j==headerArray.indexOf("Return On<br>Investment")||
			j==headerArray.indexOf("ROI with<br>10% Discount")||
			j==headerArray.indexOf("ROI with<br>20% Discount")||
			j==headerArray.indexOf("ROI/Day<br>(Normal Growth)")){
				var correctedValue = c.innerHTML
				correctedValue*=100;
				c.innerHTML=correctedValue.toPrecision(5)+"%"
			}
		}
	}
	
	var footerString = ""
	if (redText==true){
		footerString += "Red denotes <span style='color:#FF0000'>not profitable</span> at the specified level.<br>"
	}
	if (blueText==true){
		footerString += "Blue denotes profit only if the <span style='color:#87CEFA'>materials are discounted</span>.<br>"
	}
	if (greenText==true){
		footerString += "Green denotes <span style='color:#00FF00'>profit</span> at the specified level.<br>"
	}
	
	if (footerString!==""){
		priceTableFooter = document.createElement('p')
		priceTableFooter.style.color="yellow"
		priceTableFooter.innerHTML = footerString
		document.getElementById('profitTable').appendChild(priceTableFooter)
	}
}
