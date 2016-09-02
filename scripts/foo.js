var allRecipesListing = []
var allRecipeTableHeaderArray = ["Name","Category","Sell Price","Recipe Level"]
var allRecipeCategoryArray = [];
var allRecipeCategory = {}
var masterRecipeByCategory = []

for (i=0;i<sortedMasterNameList.length;i++){
	var currentNameSet = sortedMasterNameList[i];
	var currentUniqueName = currentNameSet[2];
	var currentObject = masterItemList[currentUniqueName]
	if (currentObject.materials!==undefined){
		var currentRecipe = currentObject;
		var currentRecipeInfo = [];
		currentRecipeInfo.push(currentRecipe.name)
		currentRecipeInfo.push(currentRecipe.category)
		currentRecipeInfo.push(currentRecipe.sell)
		if (currentRecipe.cookinglevel!==undefined){
			currentRecipeInfo.push(currentRecipe.cookinglevel)
		} else if (currentRecipe.chemistrylevel!==undefined){
			currentRecipeInfo.push(currentRecipe.chemistrylevel)
		} else if (currentRecipe.craftinglevel!==undefined){
			currentRecipeInfo.push(currentRecipe.craftinglevel)
		} else if (currentRecipe.forginglevel!==undefined){
			currentRecipeInfo.push(currentRecipe.forginglevel)
		}
		allRecipesListing.push(currentRecipeInfo)
		
		var currentCategory = currentRecipe.category
		if (allRecipeCategoryArray.indexOf(currentCategory)<0){
			allRecipeCategoryArray.push(currentCategory)
			allRecipeCategory[currentCategory]=[currentRecipeInfo]
		} else {
			allRecipeCategory[currentCategory].push(currentRecipeInfo)
		}
	}
}

function categoryComparator(a, b) {
	if (a[1].toLowerCase() < b[1].toLowerCase()){ return -1;
	} else if (a[1].toLowerCase() > b[1].toLowerCase()){ return 1;
	} else {return 0;}
}

function levelComparator(a, b) {
	if (a[3].toLowerCase() < b[3].toLowerCase()){ return -1;
	} else if (a[3].toLowerCase() > b[3].toLowerCase()){ return 1;
	} else {return 0;}
}

allRecipeCategoryArray = allRecipeCategoryArray.sort

for (i=0;i<allRecipeCategoryArray.length;i++){
	var currentCategory = allRecipeCategory[i]
	var currentCategoryEntries = allRecipeCategory[currentCategory]
	var newSubOrder=currentCategoryEntries.sort(levelComparator)
	masterRecipeByCategory.push(newSubOrder)
}

var sortedRecipeListByCategory = allRecipesListing.sort(categoryComparator);

var sortedRecipeListByCategoryThenLevel = [];

for (i=0;i<allRecipeCategoryArray.length;i++){
	var currentCategory = allRecipeCategoryArray[i]
	sortedRecipeListByCategoryThenLevel.push(allRecipeCategory[currentCategory])
}

var recipeTable = document.createElement("table");
//document.getElementById('otherInfo').appendChild(seedTable);
recipeTableHeader=document.createElement('tr');
recipeTable.appendChild(recipeTableHeader);

function appendRecipeHeader(string){
	var c = document.createElement('td');
	recipeTableHeader.appendChild(c);
	c.innerHTML=string;
	c.style.color="yellow"
}

allRecipeTableHeaderArray.forEach(appendRecipeHeader)

//for (i=0;i<allRecipesListing.length;i++){
for (i=0;i<sortedRecipeListByCategoryThenLevel.length;i++){
	var row = document.createElement('tr');
	recipeTable.appendChild(row);
	
	var currentRow = masterRecipeByCategory[i];
	for (j=0;j<currentRow.length;j++){
		var c = document.createElement('td');
		row.appendChild(c);
		c.innerHTML=currentRow[j];
	}
}

function showAllRecipes(){
	clearPage()
	var p=document.createElement('p')
	p.innerHTML="Coming Soon!"
	//document.getElementById('otherInfo').appendChild(p);
	document.getElementById('otherInfo').appendChild(recipeTable);
}
