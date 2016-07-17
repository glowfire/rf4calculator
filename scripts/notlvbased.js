//

function showBasicStats(){
	var nameLine = document.createElement('h1');
	var nameString = currentItem.name;
	nameLine.appendChild(document.createTextNode(nameString));
	document.getElementById('currentItemDiv').appendChild(nameLine);
	
	var flavourTextLine = document.createElement('p');
	document.getElementById('currentItemDiv').appendChild(flavourTextLine);
	flavourTextLine.innerHTML=currentItem.flavourtext;

	var basicStats = document.createElement('p');
	document.getElementById('currentItemDiv').appendChild(basicStats);
	var basicStatsString = "Category: "+currentItem.category
	var node = document.createTextNode(basicStatsString);
	basicStats.appendChild(node);
	basicStats.innerHTML+="<br>";
	if (currentItem.cookinglevel!==undefined){
		basicStats.innerHTML+="Cooking Lv: "+currentItem.cookinglevel
	}
	if (currentItem.forginglevel!==undefined){
		basicStats.innerHTML+="Forging Lv: "+currentItem.forginglevel
	}
	if (currentItem.craftinglevel!==undefined){
		basicStats.innerHTML+="Crafting Lv: "+currentItem.craftinglevel
	}
	if (currentItem.chemistrylevel!==undefined){
		basicStats.innerHTML+="Chemistry Lv: "+currentItem.chemistrylevel
	}

	if (currentItem.buy!==undefined){
		currentBuyPrice=currentItem.buy;
		currentBuyPriceDiscount=Math.ceil(currentBuyPrice*.9);
	}

	var priceLine = document.createElement('p');
	document.getElementById('currentItemDiv').appendChild(priceLine);
	var priceString="Base Sell Price: "+currentSellPrice+" G";
	var node = document.createTextNode(priceString);
	priceLine.appendChild(node);
	if (currentItem.buy!==undefined){
		priceLine.innerHTML+="<br>Base Buy Price: "+currentBuyPrice+" G";
		priceLine.innerHTML+=" (with discount: "+currentBuyPriceDiscount+" G)";
	}
}
    
var materialsList // May not be needed

var currentMaterialsBuyPrice // needed
var currentMaterialsBuyPriceDiscount // needed

function createMaterialTable(){
	currentMaterialsBuyPrice = 0
	currentMaterialsBuyPriceDiscount = 0
	
	var materialTable = document.createElement("table");
	document.getElementById('currentItemDiv').appendChild(materialTable);
	materialTableHeader=document.createElement('tr');
	materialTable.appendChild(materialTableHeader);
	
	function appendMaterialHeader(string){
		var c = document.createElement('td');
		materialTableHeader.appendChild(c);
		c.innerHTML=string;
	}
	
	appendMaterialHeader("#");
	appendMaterialHeader("Name of Material");
	appendMaterialHeader("Normal<br>Buy Price");
	appendMaterialHeader("Discounted<br>Buy Price");
	
	function createMaterialRow(item,index){
		var currentMaterial = item.convertStringToItem();
		
		var materialRow = document.createElement("tr");
		materialTable.appendChild(materialRow);
		
		function appendMaterialRow(string){
			var c = document.createElement('td');
			materialRow.appendChild(c);
			c.innerHTML=string;
		}
		
		appendMaterialRow(index+1);
		appendMaterialRow(item);
		if (currentMaterial.buy!==undefined){
			appendMaterialRow(currentMaterial.buy);
			appendMaterialRow(Math.ceil(currentMaterial.buy)*.9);
			currentMaterialsBuyPrice+=currentMaterial.buy;
			currentMaterialsBuyPriceDiscount+=Math.ceil(currentMaterial.buy*.9);
		} else {
			var c34 = document.createElement('td');
			c34.colSpan=2
			materialRow.appendChild(c34);
			c34.innerHTML="Not buyable";
		}
	}
	
	currentItem.materials.forEach(createMaterialRow);
	
	var summationRow = document.createElement("tr");
	materialTable.appendChild(summationRow);
	
	if (currentMaterialsBuyPrice>0){
		
		var c12 = document.createElement('td');
		c12.colSpan=2
		summationRow.appendChild(c12);
		c12.innerHTML="Total cost of buyable materials";
		
		var c3 = document.createElement('td');
		summationRow.appendChild(c3);
		c3.innerHTML=currentMaterialsBuyPrice;
		
		var c4 = document.createElement('td');
		summationRow.appendChild(c4);
		c4.innerHTML=currentMaterialsBuyPriceDiscount;
	} else {
		var lastC = document.createElement('td');
		lastC.colSpan = 4;
		summationRow.appendChild(lastC);
		lastC.innerHTML = "None of the materials can be bought."
	}
	
	var materialComments = document.createElement("p");
	document.getElementById('currentItemDiv').appendChild(materialComments);
	
	materialComments.style.marginTop=0;
	
	if (currentItem.buy==undefined){
		materialComments.innerHTML+="This item cannot be bought and must be produced."
	} else if (allMaterialsBuyable(currentItem.materials)){
		if (currentMaterialsBuyPrice>currentItem.buy){
			materialComments.innerHTML+="Assuming no discounts, it is cheaper to "
			materialComments.innerHTML+="<span style='text-decoration:underline'>buy the product directly</span>";
			materialComments.innerHTML+=" than buying and processing the materials."
		} else {
			materialComments.innerHTML+="Assuming no discounts, it is cheaper to "
			materialComments.innerHTML+="<span style='text-decoration:underline'>buy and process the materials</span>";
			materialComments.innerHTML+=" than buying the product directly."
		}
	}
	
}

function getUpgradeInfo(){
	
	var currentUpgradeInfo = currentItem.upgradeinfo;
	var sign
	
	function signString(number){
		if (number>0){
			sign = "+"
		} else {
			sign = ""
		}
	}
	
	var upgradeStatListHead = document.createElement('p');
	document.getElementById('currentItemDiv').appendChild(upgradeStatListHead);
	upgradeStatListHead.innerHTML = "Upgrade Info".toUpperCase();
	upgradeStatListHead.style.fontWeight = "bold";
	
	var upgradeStatListing = document.createElement('p');
	document.getElementById('currentItemDiv').appendChild(upgradeStatListing);
	upgradeStatListing.innerHTML = ""
	
	var upgradeInfoNumbers = [];
	var upgradeInfoFrontString = [];
	var upgradeInfoSignString = [];
	var upgradeInfoBackString = [];
	
	function writeUpgradeInfo(item,index){
		upgradeStatListing.innerHTML += upgradeInfoFrontString[index];
		upgradeStatListing.innerHTML += upgradeInfoSignString[index];
		upgradeStatListing.innerHTML += upgradeInfoNumbers[index];
		upgradeStatListing.innerHTML += upgradeInfoBackString[index];
	}
	
	if (currentUpgradeInfo.rarity!==undefined){
		upgradeInfoNumbers.push(currentUpgradeInfo.rarity);
		upgradeInfoFrontString.push("Rarity: ");
		upgradeInfoSignString.push("");
		upgradeInfoBackString.push("<br>");
	}
	
	if (currentUpgradeInfo.difficulty!==undefined){
		upgradeInfoNumbers.push(currentUpgradeInfo.difficulty);
		upgradeInfoFrontString.push("Difficulty: ");
		upgradeInfoSignString.push("");
		upgradeInfoBackString.push("<br>");
	}
	
	function updateUpgradeInfoArrays(number,string,percent){
		if (number!==undefined){
			upgradeInfoNumbers.push(number);
			upgradeInfoFrontString.push(string+": ");
			signString(number);
			upgradeInfoSignString.push(sign);
			var backString = "";
			if (percent){
				backString += "%";
			}
			upgradeInfoBackString.push(backString+"<br>");
		}
	}
	
	updateUpgradeInfoArrays(currentUpgradeInfo.atk,"ATK",false);
	updateUpgradeInfoArrays(currentUpgradeInfo.def,"DEF",false);
	updateUpgradeInfoArrays(currentUpgradeInfo.matk,"M.ATK",false);
	updateUpgradeInfoArrays(currentUpgradeInfo.mdef,"M.DEF",false);
	
	updateUpgradeInfoArrays(currentUpgradeInfo.str,"STR",false);
	updateUpgradeInfoArrays(currentUpgradeInfo.vit,"VIT",false);
	updateUpgradeInfoArrays(currentUpgradeInfo.int,"INT",false);
	
	updateUpgradeInfoArrays(currentUpgradeInfo.fireresP,"Fire Res",true);
	updateUpgradeInfoArrays(currentUpgradeInfo.waterresP,"Water Res",true);
	updateUpgradeInfoArrays(currentUpgradeInfo.earthresP,"Earth Res",true);
	updateUpgradeInfoArrays(currentUpgradeInfo.windresP,"Wind Res",true);
	
	updateUpgradeInfoArrays(currentUpgradeInfo.lightresP,"Light Res",true);
	updateUpgradeInfoArrays(currentUpgradeInfo.darkresP,"Dark Res",true);
	updateUpgradeInfoArrays(currentUpgradeInfo.loveresP,"Love Res",true);
	
	updateUpgradeInfoArrays(currentUpgradeInfo.psnatkP,"Psn Atk",true);
	updateUpgradeInfoArrays(currentUpgradeInfo.slpatkP,"Slp Atk",true);
	updateUpgradeInfoArrays(currentUpgradeInfo.faintatkP,"Faint Atk",true);
	
	updateUpgradeInfoArrays(currentUpgradeInfo.psnresP,"Psn Res",true);
	updateUpgradeInfoArrays(currentUpgradeInfo.slpresP,"Slp Res",true);
	updateUpgradeInfoArrays(currentUpgradeInfo.ftgresP,"Ftg Res",true);
	
	upgradeInfoNumbers.forEach(writeUpgradeInfo);
}
