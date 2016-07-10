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

// May not work for "+" non-product items, eg Scrap Metal+, Cooking Bread+ etc.
// Will work for "+" products with different recipe levels than their base products, eg Platinum Sword+, War Hammer+ etc.
// Will not work for "+" products with equal recipe levels as their base products, but there are no known such "+" products.
Object.prototype.getUniqueNameString = function(){
	var itemProductionLevel = this.getProductionLevel()
	var itemName = this.name
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

masterItemList={};
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
	
	////This part maps products to materials
	// May have issues with some products needing more than 1 copy of a material, e.g. Twin Leeks
	if (item.materials!==undefined){
		for (i=0;i<item.materials.length;i++){
			var currentMaterialName = item.materials[i].getModifiedNameString("")
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
