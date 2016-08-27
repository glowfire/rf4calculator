// For sorting list of objects.

var sortedMasterNameList = masterNameList.sort(listedNameComparator);

for (i=0;i<nonUniqueNames.length;i++){
	var currentName = nonUniqueNames[i];
	for (j=0;j<sortedMasterNameList.length;j++){
    	if (sortedMasterNameList[j][0]==currentName){
        	sortedMasterNameList[j][0]+=" ("
            if (sortedMasterNameList[j][3]==0){
        		sortedMasterNameList[j][0]+=1
            } else {
            	sortedMasterNameList[j][0]+=sortedMasterNameList[j][3]
            }
        	sortedMasterNameList[j][0]+=")"
        }
    }
}

var dropdownList = document.createElement("select");
dropdownList.setAttribute("id","itemSelect")
document.getElementById("itemSelectionDiv").appendChild(dropdownList);

var getStatsBtn = document.createElement("button");
getStatsBtn.setAttribute("id","getInfo")
getStatsBtn.setAttribute("onclick","getItemInfo()")
getStatsBtn.innerHTML="Get Item Statistics"
document.getElementById("itemSelectionDiv").appendChild(getStatsBtn);

for (i=0;i<sortedMasterNameList.length;i++){
	var currentNameSet = sortedMasterNameList[i];
	var currentUniqueName = currentNameSet[2];
	option=document.createElement("option");
	document.getElementById("itemSelect").appendChild(option);
	option.innerHTML = currentNameSet[0];
	option.value = currentUniqueName;
}
    
var currentItem
var currentSellPrice
var currentBuyPrice
var currentBuyPriceDiscount
var currentRecipeListing = []
var currentSpecificRecipeListing = []
var currentGeneralRecipeListing = []
        
function getItemInfo(){
	var itemSelected = document.getElementById("itemSelect").value
	currentItem=masterItemList[itemSelected]
	currentSellPrice=currentItem.sell;
	document.getElementById("currentItemDiv").innerHTML = '';
	showBasicStats()
	if (currentItem.materials!==undefined){
		createMaterialTable()
	}
	//document.getElementById("dependantDiv").innerHTML = '';
	//getEffectsTable()
	if (currentItem.upgradeinfo!==undefined||currentItem.upgradematerial!==undefined){
		getUpgradeInfo()
	}
	if (productMaterialMapping[currentItem.name.getModifiedNameString("")]!==undefined){
		currentSpecificRecipeListing = productMaterialMapping[currentItem.name.getModifiedNameString("")];
	} else {
		currentSpecificRecipeListing = []
	}
	if (productMaterialMapping[currentItem.category.getModifiedNameString("")]!==undefined){
		currentGeneralRecipeListing = productMaterialMapping[currentItem.category.getModifiedNameString("")];
	} else {
		currentGeneralRecipeListing = []
	}
	if (currentItem.category!=="Magic"){
		if (currentSpecificRecipeListing.length>0||currentGeneralRecipeListing.length>0){
			showRecipesOfItem();
		}
	}
	getPriceTable()
}
