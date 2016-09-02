var allRecipesListing = []
var allRecipeTableHeaderArray = ["Name","Category","Sell Price","Recipe Level"]

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
		allRecipesListing.push(currentRecipeInfo)
	}
}

function categoryComparator(a, b) {
	if (a[1].toLowerCase() < b[1].toLowerCase()){ return -1;
	} else if (a[1].toLowerCase() > b[1].toLowerCase()){ return 1;
	} else {return 0;}
}

// Cannot use this function without crashing
function levelComparator(a, b) {
	if (parseInt(a[3]) < parseInt(b[3])){ return -1;
	} else if (parseInt(a[3]) > parseInt(b[3])){ return 1;
	} else {return 0;}
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

for (i=0;i<allRecipesListing.length;i++){
	var row = document.createElement('tr');
	recipeTable.appendChild(row);
	
	var currentRow = allRecipesListing[i];
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
