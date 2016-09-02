var allRecipesListing = []
var allRecipeTableHeaderArray = ["Name","Category","Sell Price","Recipe Level","Materials"]

for (i=0;i<shippingList.length;i++){
	var currentNameSet = shippingList[i];
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
		currentRecipeInfo.push(currentRecipe.materials)
		allRecipesListing.push(currentRecipeInfo)
	}
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
	if (string=="Materials"){
		c.colSpan=6
	}
}

allRecipeTableHeaderArray.forEach(appendRecipeHeader)

var materialsIndex = allRecipeTableHeaderArray.indexOf("Materials")
var categoryIndex = allRecipeTableHeaderArray.indexOf("Category")

var colString1 = "white"
var colString2 = "pink"

var switchCat = 1
var previousCat = (allRecipesListing[0])[categoryIndex]

for (i=0;i<allRecipesListing.length;i++){
	if ((allRecipesListing[i])[categoryIndex]!==previousCat){
		switchCat*=-1
	}
	var row = document.createElement('tr');
	recipeTable.appendChild(row);
	
	var currentRow = allRecipesListing[i];
	for (j=0;j<(allRecipeTableHeaderArray.length-1);j++){
		var c = document.createElement('td');
		row.appendChild(c);
		if (j!==materialsIndex){
			c.innerHTML=currentRow[j]
		}
		if (switchCat>0){
			c.style.color=colString1
		} else {
			c.style.color=colString2
		}
	}
	var currentMaterials = currentRow[materialsIndex]
	for (k=0;k<6;k++){
		var c = document.createElement('td');
		row.appendChild(c);
		currentString=currentMaterials[k]
		if (currentString!==undefined){
			c.innerHTML=currentString
		} else {
			c.innerHTML=""
		}
		if (switchCat>0){
			c.style.color=colString1
		} else {
			c.style.color=colString2
		}
	}
	previousCat = (allRecipesListing[i])[categoryIndex]
}

function showAllRecipes(){
	clearPage()
	var p=document.createElement('p')
	p.innerHTML="Coming Soon!"
	//document.getElementById('otherInfo').appendChild(p);
	document.getElementById('otherInfo').appendChild(recipeTable);
}
