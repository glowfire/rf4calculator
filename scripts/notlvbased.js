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

function showRecipesOfItem(){
	
	currentRecipeListing = []
	
	for (i=0;i<currentSpecificRecipeListing.length;i++){
		currentRecipeListing.push(currentSpecificRecipeListing[i])
	}
	
	for (i=0;i<currentGeneralRecipeListing.length;i++){
		currentRecipeListing.push(currentGeneralRecipeListing[i])
	}
	
	var recipeComment = document.createElement("p");
	document.getElementById('currentItemDiv').appendChild(recipeComment);
	recipeComment.innerHTML = ""
	
	if (currentSpecificRecipeListing.length>0&&currentGeneralRecipeListing.length>0){
		recipeComment.innerHTML += "There "
		if (currentSpecificRecipeListing.length!==1){
			recipeComment.innerHTML += "are " + currentSpecificRecipeListing.length + " recipes"
		} else {
			recipeComment.innerHTML += "is " + currentSpecificRecipeListing.length + " recipe"
		}
		recipeComment.innerHTML += " involving " + currentItem.name + " and "
		if (currentGeneralRecipeListing.length!==1){
			recipeComment.innerHTML += currentGeneralRecipeListing.length + " recipes"
		} else {
			recipeComment.innerHTML += currentGeneralRecipeListing.length + " recipe"
		}
		recipeComment.innerHTML += " involving " + currentItem.category
		recipeComment.innerHTML += " for a total of " + currentRecipeListing.length + " recipes."
	} else if (currentSpecificRecipeListing.length>0){
		recipeComment.innerHTML += "There "
		if (currentSpecificRecipeListing.length!==1){
			recipeComment.innerHTML += "are " + currentSpecificRecipeListing.length + " recipes"
		} else {
			recipeComment.innerHTML += "is " + currentSpecificRecipeListing.length + " recipe"
		}
		recipeComment.innerHTML += " involving " + currentItem.name + "."
	} else if (currentGeneralRecipeListing.length>0){
		recipeComment.innerHTML += "There "
		if (currentGeneralRecipeListing.length!==1){
			recipeComment.innerHTML += "are " + currentGeneralRecipeListing.length + " recipes"
		} else {
			recipeComment.innerHTML += "is " + currentGeneralRecipeListing.length + " recipe"
		}
		recipeComment.innerHTML += " involving " + currentItem.category + "."
	}
	
	var borderString = "1px solid red"
	
	var recipeTable = document.createElement('table')
	recipeTable.style.border=borderString
	recipeTable.style.borderCollapse="collapse"
	document.getElementById('currentItemDiv').appendChild(recipeTable);
	var recipeTableHeader = document.createElement('tr')
	recipeTable.appendChild(recipeTableHeader)
	
	var recipeArray = [];
	var maxMaterialListLength = 0
	
	function addRecipeToArray(item,index){
		var currentRecipeArray = [];
		currentRecipeArray.push(item.name)
		currentRecipeArray.push(item.category)
		if (item.craftinglevel!==undefined){
			currentRecipeArray.push(item.craftinglevel)
		}
		if (item.forginglevel!==undefined){
			currentRecipeArray.push(item.forginglevel)
		}
		if (item.cookinglevel!==undefined){
			currentRecipeArray.push(item.cookinglevel)
		}
		if (item.chemistrylevel!==undefined){
			currentRecipeArray.push(item.chemistrylevel)
		}
		currentRecipeArray.push(item.sell)
		currentRecipeArray.push(item.materials)
		recipeArray.push(currentRecipeArray)
		
		var currentMaterials_List = item.materials
		
		if (currentMaterials_List.length>maxMaterialListLength){
			maxMaterialListLength=currentMaterials_List.length
		}
	}
	
	currentRecipeListing.forEach(addRecipeToArray)
	
	function sellComparator(a, b) {
		if (parseInt(a[3]) > parseInt(b[3])){ return -1;
		} else if (parseInt(a[3]) < parseInt(b[3])){ return 1;
		} else {return 0};
	}
	
	recipeArray = recipeArray.sort(sellComparator);
	
	var headerStrings = ["Name","Category","Recipe Lv","Sell Price","Materials"]
	
	function addHeaderColumn(item,index){
		var c = document.createElement('td')
		recipeTableHeader.appendChild(c)
		c.innerHTML=item
		c.style.color="yellow"
		c.style.border=borderString
		if (item=="Materials"){
			c.colSpan=maxMaterialListLength
		}
	}
	
	headerStrings.forEach(addHeaderColumn)
	
	function addRecipeToTable(item,index){
		var currentRecipe = item
		
		var recipeTableRow = document.createElement('tr')
		recipeTable.appendChild(recipeTableRow)
		recipeTableRow.style.border=borderString
		
		var nameColumn = document.createElement('td')
		recipeTableRow.appendChild(nameColumn)
		nameColumn.innerHTML = currentRecipe[0]
		nameColumn.style.border=borderString
		
		var catColumn = document.createElement('td')
		recipeTableRow.appendChild(catColumn)
		catColumn.innerHTML = currentRecipe[1]
		catColumn.style.border=borderString
		
		var lvColumn = document.createElement('td')
		recipeTableRow.appendChild(lvColumn)
		lvColumn.innerHTML = currentRecipe[2]
		lvColumn.style.border=borderString
		
		var sellColumn = document.createElement('td')
		recipeTableRow.appendChild(sellColumn)
		sellColumn.innerHTML = currentRecipe[3]
		sellColumn.style.border=borderString
		
		var currentMaterial_List = currentRecipe[4]
		for (i=0;i<maxMaterialListLength;i++){
			var matColumn = document.createElement('td')
			recipeTableRow.appendChild(matColumn)
			matColumn.style.border=borderString
			var currentMaterials_Name = currentMaterial_List[i]
			if (currentMaterials_Name!==undefined){
				matColumn.innerHTML = currentMaterials_Name
			}
		}
	}
	
	recipeArray.forEach(addRecipeToTable)

}
    
var materialsList // May not be needed

var currentMaterialsBuyPrice // needed
var currentMaterialsBuyPriceDiscount // needed
var canBuyAllMaterials // Used because the allMaterialsBuyable function seems unfixable

function createMaterialTable(){
	currentMaterialsBuyPrice = 0
	currentMaterialsBuyPriceDiscount = 0
	
	canBuyAllMaterials = true
	
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
	appendMaterialHeader("Discounted<br>Buy Price");
	appendMaterialHeader("Normal<br>Buy Price");
	
	function createMaterialRow(item,index){
		
		var materialRow = document.createElement("tr");
		materialTable.appendChild(materialRow);
		
		function appendMaterialRow(string){
			var c = document.createElement('td');
			materialRow.appendChild(c);
			c.innerHTML=string;
		}
		
		appendMaterialRow(index+1);
		appendMaterialRow(item);
		
		if (masterCategoryList[item]!==undefined){
			
			var currentCategory = masterCategoryList[item];
			
			if (currentCategory.minBuy==currentCategory.maxBuy){
				appendMaterialRow(Math.ceil(currentCategory.minBuy*.9));
				appendMaterialRow(currentCategory.minBuy);
				currentMaterialsBuyPrice+=currentCategory.minBuy;
				currentMaterialsBuyPriceDiscount+=Math.ceil(currentCategory.minBuy*.9);
			} else if (currentCategory.minBuy<currentCategory.maxBuy){
				var c34 = document.createElement('td');
				materialRow.appendChild(c34);
				c34.colSpan=2
				c34.innerHTML=Math.ceil(currentCategory.minBuy*.9);
				c34.innerHTML+=" - "
				c34.innerHTML+=currentCategory.maxBuy
				currentMaterialsBuyPrice+=currentCategory.minBuy;
				currentMaterialsBuyPriceDiscount+=Math.ceil(currentCategory.minBuy*.9);
			} else {
				var c34 = document.createElement('td');
				c34.colSpan=2
				materialRow.appendChild(c34);
				c34.innerHTML="Not Buyable";
				canBuyAllMaterials = false
			}
			
		} else {
			var currentMaterial = item.convertStringToItem();
			
			if (currentMaterial.buy!==undefined){
				appendMaterialRow(Math.ceil(currentMaterial.buy*.9));
				appendMaterialRow(currentMaterial.buy);
				currentMaterialsBuyPrice+=currentMaterial.buy;
				currentMaterialsBuyPriceDiscount+=Math.ceil(currentMaterial.buy*.9);
			} else {
				var c34 = document.createElement('td');
				c34.colSpan=2
				materialRow.appendChild(c34);
				c34.innerHTML="Not Buyable";
				canBuyAllMaterials = false
			
			}
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
		c3.innerHTML=currentMaterialsBuyPriceDiscount;
		
		var c4 = document.createElement('td');
		summationRow.appendChild(c4);
		c4.innerHTML=currentMaterialsBuyPrice;
		
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
		materialComments.innerHTML+="This item cannot be bought in any shop in the game and must be produced."
	} else if (canBuyAllMaterials){
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

var sign;

function signString(number){
	if (number>0){
		sign = "+";
	} else {
		sign = "";
	}
}

function getUpgradeInfo(){
	
	var upgradeStatListHead = document.createElement('p');
	document.getElementById('currentItemDiv').appendChild(upgradeStatListHead);
	upgradeStatListHead.style.fontWeight = "bold";
	
	if (currentItem.upgradeinfo!==undefined){
		var currentUpgradeInfo = currentItem.upgradeinfo;
		upgradeStatListHead.innerHTML = "Upgrade Info".toUpperCase();
	} else if (currentItem.upgradematerial!==undefined){
		var currentUpgradeInfo = currentItem.upgradematerial;
		upgradeStatListHead.innerHTML = "Upgrade Material".toUpperCase();
	}
	
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
