var allRecipesListing=[];
var recipeHeaderArray = ["Name","Category","Sell Price","Level","Materials"]

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
		if (currentObject.chemistrylevel!==undefined){
			currentRecipeInfo.push(currentRecipe.chemistrylevel);
		} else if (currentObject.cookinglevel!==undefined){
			currentRecipeInfo.push(currentRecipe.cookinglevel);
		} else if (currentObject.forginglevel!==undefined){
			currentRecipeInfo.push(currentRecipe.forginglevel);
		} else if (currentObject.craftinglevel!==undefined){
			currentRecipeInfo.push(currentRecipe.craftinglevel);
		}
		currentRecipeInfo.arrayPush(currentRecipe.materials);
		allRecipesListing.push(currentRecipeInfo)
	}
}

//function categoryComparator(a, b) {
//	if (a[1] < b[1]){ return -1;
//	} else if (a[1] > b[1]){ return 1;
//	} else {return 0};
//}

//var sortedRecipeListByCategory = allRecipesListing.sort(categoryComparator);

var allRecipesTable = document.createElement("table");
//document.getElementById('otherInfo').appendChild(allRecipesTable);
allRecipesTableHeader=document.createElement('tr');
allRecipesTable.appendChild(allRecipesTableHeader);

function appendRecipeHeader(string){
	var c = document.createElement('td');
	allRecipesTableHeader.appendChild(c);
	c.innerHTML=string;
	c.style.color="yellow"
}

recipeHeaderArray.forEach(appendRecipeHeader);

for (i=0;i<sortedRecipeListByCategory.length;i++){
	var row = document.createElement('tr');
	allRecipesTable.appendChild(row);
	
	var currentRow = sortedRecipeListByCategory[i];
	var nColumn=recipeHeaderArray.length+5
	for (j=0;j<nColumn;j++){
		var c = document.createElement('td');
		row.appendChild(c);
		if (currentRow[j]!==undefined){
			c.innerHTML=currentRow[j];
		} else {
			c.innerHTML=""
		}
	}
}

function showAllRecipes(){
	clearPage()
	//var p=document.createElement('p')
	//p.innerHTML="Coming Soon"
	//document.getElementById('otherInfo').appendChild(p);
	document.getElementById('otherInfo').appendChild(allRecipesTable);
}
