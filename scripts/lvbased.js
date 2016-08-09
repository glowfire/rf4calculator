function getPriceTable(){
	var headerArray=["Lv.","Multiplier<br>(Type: ","Sell Price","Increment","Cumulative<br>Increment"];
	headerArray[1]+=currentItem.pricemultiplier+")";
	
	var integerCorrector = 1e8;
	
	var lvArray = [];
	var priceMultiArray = getPriceMultiplierArray(currentItem.pricemultiplier);
	var sellPriceArray = [];
	var incrementArray = ["N/A"];
	var cumulativeArray = [];
	var cumSum = 0;
	
	for (i=0;i<maxLv;i++){
		lvArray.push(i+1);
		var multiplier = priceMultiArray[i]*integerCorrector
		sellPriceArray.push(multiplier*currentItem.sell/integerCorrector)
		cumulativeArray.push(cumSum)
		if (i>0){
			incrementArray.push(sellPriceArray[i]-sellPriceArray[i-1])
			cumSum+=incrementArray[i];
		}
	}
	
}
