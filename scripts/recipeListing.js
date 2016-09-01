var allRecipeListing=[];

for (i=0;i<sortedMasterNameList.length;i++){
	var currentNameSet = sortedMasterNameList[i];
	var currentUniqueName = currentNameSet[2];
	var currentObject = masterItemList[currentUniqueName]
	if (currentObject.materials!==undefined){
		var currentRecipe = currentObject;
		var currentRecipeInfo = [];
		currentRecipeInfo.push(currentRecipe.name);
		currentRecipeInfo.push(currentRecipe.category);
		currentRecipeInfo.push(currentRecipe.sell);
		currentRecipeInfo.push(currentRecipe.pricemultiplier);
		currentRecipeInfo.push(currentRecipe.materials);
		allRecipeListing.push(currentRecipeInfo)
	}
}

function categoryComparator(a, b) {
	if (a[1] < b[1]){ return -1;
	} else if (a[1] > b[1]){ return 1;
	} else {return 0};
}

var sortedRecipeList = allRecipeListing.sort(categoryComparator);

var allRecipeTable = document.createElement("table");
//document.getElementById('otherInfo').appendChild(allRecipeTable);
allRecipeTableHeader=document.createElement('tr');
allRecipeTable.appendChild(AllRecipeTableHeader);

function appendRecipeHeader(string){
	var c = document.createElement('td');
	allRecipeTableHeader.appendChild(c);
	c.innerHTML=string;
	if (string=="Materials"){
	    c.colSpan=6
	}
}

appendRecipeHeader("Name");
appendRecipeHeader("Category");
appendRecipeHeader("Sell Price");
appendRecipeHeader("Price Multiplier");
appendRecipeHeader("Materials");

for (i=0;i<allRecipeListing.length;i++){
	var row = document.createElement('tr');
	allRecipeTable.appendChild(row);
	
	var currentRow = allRecipeListing[i];
	for (j=0;j<(currentRow.length-1);j++){
		var c = document.createElement('td');
		row.appendChild(c);
		c.innerHTML=currentRow[j];
	}
	var materialArr = currentRow[currentRow.length-1]
	for (k=0;k<materialArr.length;k++){
		var c = document.createElement('td');
		row.appendChild(c);
		c.innerHTML=materialArr[j];
	}
}

function showAllRecipes(){
	clearPage()
	document.getElementById('otherInfo').appendChild(allRecipeTable);
}
