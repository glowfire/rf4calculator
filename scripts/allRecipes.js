var allRecipesListing=[];

var recipeHeaderArray=["Name","Category","Sell Price","Materials"]

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
		currentRecipeInfo.arrayPush(currentRecipe.materials);
		allRecipesListing.push(currentRecipeInfo)
	}
}

function categoryComparator(a, b) {
	var categoryColumnIndex = recipeHeaderArray.indexOf("Category")
	if (a[categoryColumnIndex] < b[categoryColumnIndex]){ return -1;
	} else if (a[categoryColumnIndex] > b[categoryColumnIndex]){ return 1;
	} else {return 0};
}

var sortedRecipeListByCategory = allRecipesListing.sort(categoryComparator);

var allRecipesTable = document.createElement("table");
//document.getElementById('otherInfo').appendChild(allRecipesTable);
allRecipesTableHeader=document.createElement('tr');
allRecipesTable.appendChild(allRecipesTableHeader);

function appendRecipeHeader(string){
	var c = document.createElement('td');
	allRecipesTableHeader.appendChild(c);
	c.innerHTML=string;
	c.style.color="yellow"
	if (string=="Materials"){
		c.colSpan = 6
	}
}

recipeHeaderArray.forEach(appendRecipeHeader)

for (i=0;i<allRecipesListing.length;i++){
	var row = document.createElement('tr');
	allRecipesTable.appendChild(row);
	
	var currentRow = allRecipesListing[i];
	var nColumn = recipeHeaderArray.length+5
	for (j=0;j<nColumn;j++){
		var c = document.createElement('td');
		row.appendChild(c);
		var currentString = currentRow[j]
		if (currentString!==undefined){
			c.innerHTML=currentString;
		} else {
			c.innerHTML=""
		}
	}
}

function showAllRecipes(){
	clearPage()
	document.getElementById('otherInfo').appendChild(allRecipesTable);
}
