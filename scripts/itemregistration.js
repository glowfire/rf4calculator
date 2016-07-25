String.prototype.lettersOnly=function(){
	return this.replace(/[^A-Za-z]/g, "")
}

String.prototype.numbersOnly=function(){
	return this.replace(/[^0-9]/g, "")
}

String.prototype.alphanumericOnly=function(){
	return this.replace(/[^A-Za-z0-9]/g, "")
}

String.prototype.getModifiedNameString=function(number){
	return this.lettersOnly().toLowerCase()+number
}

Object.prototype.getProductionLevel=function(){
	var productionLevel = 0;
	if (this.cookinglevel!==undefined){
		productionLevel = this.cookinglevel
	}
	if (this.craftinglevel!==undefined){
		productionLevel = this.craftinglevel
    	}
	if (this.chemistrylevel!==undefined){
		productionLevel = this.chemistrylevel
    	}
	if (this.forginglevel!==undefined){
		productionLevel = this.forginglevel
    	}
    	return productionLevel
}

// Will work for Greenifer+ and Greenifier et al because they have different recipe levels.
// Will work for Scrap Metal+ even if Scrap Metal is registered, because the + is accounted for.
// Will not work for eg Scrap Metal-, because the - is not accounted for.
// The six varities of mushrooms have identical names, but they are accounted for by the registration function.
// Should change this function and the registration function to account for the + in Scrap Metal+ and Recipe Breads+.
Object.prototype.getUniqueNameString = function(){
	var itemProductionLevel = this.getProductionLevel()
	var itemName = this.name
	if (itemName.slice(-1)==="+"){
		itemName+="plus"
	}
	return itemName.getModifiedNameString(itemProductionLevel)
}

function stringIsInArray(arrayOfStrings,string){
    var foo=false;
    if (arrayOfStrings.indexOf(string) > -1){
    	foo=true;
    }
    	return foo;
}

Array.prototype.arrayPush = function(elementArray){
	for (i=0;i<elementArray.length;i++){
		this.push(elementArray[i]);
	};
};

// Really charming code that cleverly kills duplicates by exploiting the fact object keys must be unique.
// Source: https://dreaminginjavascript.wordpress.com/2008/08/22/eliminating-duplicates/
// Works for arrays of strings, but untested for arrays of objects.
Array.prototype.killDuplicates = function() {
	var arrayLength=this.length;
	var onlyUniques=[];
	var dummyObject={};
	
	for (i=0;i<arrayLength;i++) {
		dummyObject[this[i]]=0;
	}
	for (j in dummyObject) {
		onlyUniques.push(j);
	}
	return onlyUniques;
}

masterItemList={};
masterCategoryList={};
masterNameList=[];
productMaterialMapping={};
normalNameList=[];
nonUniqueNames=[];

function registerItem(item){
	var normalName = item.name;
	var uniqueNumber = item.getProductionLevel();
	var uniqueName = item.getUniqueNameString();
	var listedName = normalName;
	
	if (normalNameList.indexOf(normalName) > -1){
		if (nonUniqueNames.indexOf(normalName)<0){
			nonUniqueNames.push(normalName)
		}
	}
	
	var itemCategory = item.category
	var itemCategoryKey = itemCategory.lettersOnly()
	
	if (masterCategoryList[itemCategoryKey]!==undefined){
		masterCategoryList[itemCategoryKey].membershipList.push(item)
		if (masterCategoryList[itemCategoryKey].minSell>item.sell){
			masterCategoryList[itemCategoryKey].minSell=item.sell
		}
		if (masterCategoryList[itemCategoryKey].maxSell<item.sell){
			masterCategoryList[itemCategoryKey].maxSell=item.sell
		}
	} else {
		masterCategoryList[itemCategoryKey]={}
		masterCategoryList[itemCategoryKey].name=itemCategory
		masterCategoryList[itemCategoryKey].membershipList=[item]
		masterCategoryList[itemCategoryKey].minSell=item.sell
		masterCategoryList[itemCategoryKey].maxSell=item.sell
	}
	
	if (item.buy!==undefined){
		if (masterCategoryList[itemCategoryKey].minBuy==undefined){
			masterCategoryList[itemCategoryKey].minBuy=item.buy
			masterCategoryList[itemCategoryKey].maxBuy=item.buy
		} else {
			if (masterCategoryList[itemCategoryKey].minBuy>item.buy){
				masterCategoryList[itemCategoryKey].minBuy=item.buy
			}
			if (masterCategoryList[itemCategoryKey].maxBuy<item.buy){
				masterCategoryList[itemCategoryKey].maxBuy=item.buy
			}
		}
	}
	
	////This part maps products to materials
	// Should have no issues with products needing more than 1 copy of a material, e.g. Twin Leeks, Para-Gone (18)
	if (item.materials!==undefined){
		var uniqueMaterials = item.materials.killDuplicates();
		for (i=0;i<uniqueMaterials.length;i++){
			var currentMaterialName = uniqueMaterials[i].getModifiedNameString("")
			if (productMaterialMapping[currentMaterialName]!==undefined){
				productMaterialMapping[currentMaterialName].push(item)
			} else {
				productMaterialMapping[currentMaterialName]=[item]
			}
		}
	} else {
		if (normalNameList.indexOf(normalName) > -1){
			uniqueNumber++
			for (j=0;j<normalNameList.length;j++){
				if (normalNameList[j]==normalName){
					uniqueNumber++
				}
			}
			uniqueName = normalName.getModifiedNameString(uniqueNumber)
		}
	}
	
	if (normalNameList.indexOf(normalName)>-1){
		listedName += " (" + uniqueNumber +")"
	}
	
	masterItemList[uniqueName]=item;
	masterNameList.push([listedName,normalName,uniqueName,uniqueNumber]);
	normalNameList.push(normalName)
}

function listedNameComparator(a, b) {
   if (a[0].toLowerCase() < b[0].toLowerCase()){ return -1;
   } else if (a[0].toLowerCase() > b[0].toLowerCase()){ return 1;
   } else {return 0;}
}

function levelComparator(a, b) {
   if (parseInt(a[2]) < parseInt(b[2])){ return -1;
   } else if (parseInt(a[2]) > parseInt(b[2])){ return 1;
   } else {return 0};
}

function canProduceAtVaryingLevels(item){
	var foo=false;
    
    if (item.cookinglevel!==undefined){
    	//Cooked dishes can be produced at levels above 1
    	foo=true; 
    	}
    if (item.chemistrylevel!==undefined){
    	// Chemistry products can be produced at levels above 1
    	foo=true;
        }
        
    return foo
    }

function canBuyAtVaryingLevels(item){
	var foo=false
    
    switch(item.category){
		case ("Vegetable"):
			foo=true;
    		break;
    	case ("Seed"):
			foo=true;
    		break;
    	case ("Plant"):
			foo=true;
    		break;
	}
    
    switch(item.name){
    
		case ("Pineapple"): // Most fruits do not vary level by purchase
			foo=true; // Pineapple can be bought at different levels
    		break;
    	case ("Strawberry"): // Fruit
			foo=true; // Strawberry can be bought at different levels
    		break;
            
    	case ("Antidote Grass"): // Plant
			foo=false; // cannot be bought at levels above 1
    		break;
    	case ("Bamboo Sprout"): // Vegetable
			foo=false; // cannot be bought at levels above 1
    		break;
    	case ("Elli Leaves"): // Plant
			foo=false; // cannot be bought at levels above 1
    		break;
    	case ("Medicinal Herb"): // Plant
			foo=false; // cannot be bought at levels above 1
    		break;
    	case ("Weeds"): // Plant
			foo=false; // cannot be bought at levels above 1
    		break;
    	case ("Withered Grass"): // Plant
			foo=false; // cannot be bought at levels above 1
    		break;
            
    	case ("Black Grass"): // Plant
			foo=false; // cannot be bought at levels above 1
    		break;
    	case ("White Grass"): // Plant
			foo=false; // cannot be bought at levels above 1
    		break;
    	case ("Red Grass"): // Plant
			foo=false; // cannot be bought at levels above 1
    		break;
    	case ("Orange Grass"): // Plant
			foo=false; // cannot be bought at levels above 1
    		break;            
    	case ("Yellow Grass"): // Plant
			foo=false; // cannot be bought at levels above 1
    		break;
    	case ("Green Grass"): // Plant
			foo=false; // cannot be bought at levels above 1
    		break;
    	case ("Blue Grass"): // Plant
			foo=false; // cannot be bought at levels above 1
    		break;
    	case ("Indigo Grass"): // Plant
			foo=false; // cannot be bought at levels above 1
    		break;
    	case ("Purple Grass"): // Plant
			foo=false; // cannot be bought at levels above 1
    		break;
	}
        
    if (item.buy==undefined){
    	foo=false;
        }
    
    return foo;
    }

String.prototype.convertStringToItem=function(){
	var fullLength = masterNameList.length
	var halfWayPoint = Math.ceil(fullLength/2)
	for (i=0;i<halfWayPoint;i++){
    	var frontNameSet = sortedMasterNameList[i]
        var backNameSet = sortedMasterNameList[fullLength-1-i]
        
        var currentString = this
        var frontString = frontNameSet[1]
        var backString = backNameSet[1]
        
        var currentModifiedString = this.replace(/ /g,'').toLowerCase()
        var frontModifiedString = frontNameSet[1].replace(/ /g,'').toLowerCase()
        var backModifiedString = backNameSet[1].replace(/ /g,'').toLowerCase()
    	
        if (currentString==frontString){
        	return masterItemList[frontNameSet[2]]
            break;
        } else if (currentString==backString){
        	return masterItemList[backNameSet[2]]
            break;
        } else if (currentModifiedString==backModifiedString){
        	return masterItemList[backNameSet[2]]
            break;
        } else if (currentModifiedString==frontModifiedString){
        	return masterItemList[frontNameSet[2]]
            break;
        }
    }
}

String.prototype.convertStringToItemByListedName=function(){
	var fullLength = masterNameList.length
	var halfWayPoint = Math.ceil(fullLength/2)
	for (i=0;i<halfWayPoint;i++){
    	var frontNameSet = masterNameList[i]
        var backNameSet = masterNameList[fullLength-1-i]
        var currentString = this.replace(/ /g,'').toLowerCase().alphanumericOnly()
        var frontString = frontNameSet[0].replace(/ /g,'').toLowerCase().alphanumericOnly()
        var backString = backNameSet[0].replace(/ /g,'').toLowerCase().alphanumericOnly()
    	if (currentString==frontString){
        	return masterItemList[frontNameSet[2]]
            break;
        } else if (currentString==backString){
        	return masterItemList[backNameSet[2]]
            break;
        }
    }
}

Array.prototype.convertStringListToObjectList=function(){
	var materialsArray = [];
    for (i=0;i<this.length;i++){
    	this[i].convertStringToItem()
    }
}

function getSellPriceAtLevel(item,level){
	// Gets the price of an item at a specified level
	var sellPriceAtLv1=item.sell;
    var currentMultiplierArray = getPriceMultiplierArray(item.pricemultiplier);
    var currentMultiplier=getMultiplierAtLevel(currentMultiplierArray,level);
    var integerCorrector=1e6;
    // Not converting all factors into integers may result in undesirable floating numbers
    var currentModifiedMultiplier=integerCorrector*currentMultiplier;
    var sellPriceAtSpecifiedLvModified=sellPriceAtLv1*currentModifiedMultiplier;
    var sellPriceAtSpecifiedLv=Math.floor(sellPriceAtSpecifiedLvModified/integerCorrector);
    return sellPriceAtSpecifiedLv;
}

String.prototype.isAnItem=function(){
	(normalNameList.indexOf(this) > -1)
}

function allMaterialsBuyable(materialsArray){
	var foo=true
	for (i=0;i<materialsArray.length;i++){
		if (materialsArray[i].isAnItem()!==true){
			var currentCategory = masterCategoryList[materialsArray[i].lettersOnly()];
			if (currentCategory.minBuy==undefined){
				foo=false;
				break;
			}
		} else {
		
			var currentMaterial = materialsArray[i].convertStringToItem();
			if (currentMaterial.buy==undefined){
				foo=false;
				break;
			}
		}
        }
        return foo
}
