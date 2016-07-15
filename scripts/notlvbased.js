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
    
var materialsList

var currentMaterialsBuyPrice
var currentMaterialsBuyPriceDiscount

function createMaterialListing(){
	
	currentMaterialsBuyPrice = 0
	currentMaterialsBuyPriceDiscount = 0

	if (currentItem.materials!==undefined){
		var materialsList = document.createElement('p');
		var materialsListString = "Materials: "
		var node = document.createTextNode(materialsListString);
		materialsList.appendChild(node);
		
		for (j=0;j<currentItem.materials.length;j++){
			var currentMaterial = currentItem.materials[j].convertStringToItem()
			materialsList.innerHTML+="<br>"+(j+1)+". "+currentMaterial.name
			if (currentMaterial.buy!==undefined){
				currentMaterialBuy=currentMaterial.buy;
				currentMaterialsBuyPrice+=currentMaterialBuy;
				currentMaterialsBuyPriceDiscount+=Math.ceil(currentMaterialBuy*.9);
				materialsList.innerHTML+=" (buy: "+currentMaterial.buy+" G, discounted: "
				materialsList.innerHTML+=Math.ceil(currentMaterial.buy*.9)+" G)"
			} else {
				materialsList.innerHTML+=" (cannot be bought)"
			}
		}
		
		if (currentMaterialsBuyPrice>0){
			materialsList.innerHTML+="<br><br>Total cost of buyable materials: "+currentMaterialsBuyPrice+" G "
			materialsList.innerHTML+="(all discounted: "+currentMaterialsBuyPriceDiscount+" G)"
			
			if (currentItem.buy==undefined){
				materialsList.innerHTML+="<br>This item cannot be bought and must be produced."
			} else if (allMaterialsBuyable(currentItem.materials)){
				if (currentMaterialsBuyPrice>currentItem.buy){
					materialsList.innerHTML+="<br>Assuming no discounts, it is cheaper to "
					materialsList.innerHTML+="<span style='font-weight:bold'>buy the product directly</span>";
					materialsList.innerHTML+=" than buying and processing the materials."
				} else {
					materialsList.innerHTML+="<br>Assuming no discounts, it is cheaper to "
					materialsList.innerHTML+="<span style='font-weight:bold'>buy and process the materials</span>";
					materialsList.innerHTML+=" than buying the product directly."
				}
			}
		} else {
			materialsList.innerHTML+="<br><br>None of the materials can be bought."
		}
	}
	document.getElementById('currentItemDiv').appendChild(materialsList)
}

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
	appendMaterialHeader("Material Name");
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
			materialComments.innerHTML+="<span style='font-weight:bold'><span style="text-decoration:underline;">buy the product directly</span></span>";
			materialComments.innerHTML+=" than buying and processing the materials."
		} else {
			materialComments.innerHTML+="Assuming no discounts, it is cheaper to "
			materialComments.innerHTML+="<span style='font-weight:bold'><span style="text-decoration:underline;">buy and process the materials</span></span>";
			materialComments.innerHTML+=" than buying the product directly."
		}
	}
	
}
