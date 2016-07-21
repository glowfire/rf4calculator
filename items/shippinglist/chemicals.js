// Registration of items in the order as shown in the shipping records.
// This list contains the items listed in the second section.
// All items entered!!!

// Cooking effects complete
// Price multipliers checked

// STILL NEED TO TEST SOME ITEMS' EFFECTS MULTIPLIERS.

registerItem({
	"name":"Minimizer",
	"category":"Nutrient",
	"sell":100,
	"buy":8e3,
	"chemistrylevel":53,
	"materials":["Ironleaf"],
	"flavourtext":"Sprinkle on soil to grow smaller plants. Also makes soil healthier.",
	"cookingeffects":{
		"hp":-100
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Giantizer",
	"category":"Nutrient",
	"sell":300,
	"buy":12e3,
	"chemistrylevel":57,
	"materials":["Lamp Grass"],
	"flavourtext":"Sprinkle on soil to grow gargantuan produce.",
	"cookingeffects":{
		"hp":-100
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"No Rot β",
	"category":"Nutrient",
	"sell":480,
	"buy":8e3,
	"chemistrylevel":50,
	"materials":["Withered Grass","Red Grass","4-Leaf Clover"],
	"flavourtext":"Sprinkle on soil to prevent plants from wilting. It's more effective than the α version.",
	"cookingeffects":{
		"hp":-100
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"No Rot α",
	"category":"Nutrient",
	"sell":50,
	"buy":2e3,
	"chemistrylevel":26,
	"materials":["Withered Grass","Toyherb"],
	"flavourtext":"Sprinkle on soil to prevent plants from wilting.",
	"cookingeffects":{
		"hp":-100
	},
	"pricemultiplier":"E" // For some reason the price multiplier type of the α version is different from the β version.
})

registerItem({
	"name":"Formula C",
	"category":"Nutrient",
	"sell":500,
	"buy":9800,
	"chemistrylevel":72,
	"materials":["White Grass","Fireflower","Corn"],
	"flavourtext":"Sprinkle on soil to grow crops faster. It's super effective!",
	"cookingeffects":{
		"hp":-100
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Formula B",
	"category":"Nutrient",
	"sell":240,
	"buy":3600,
	"chemistrylevel":41,
	"materials":["Yellow Grass","Pink Cat","4-Leaf Clover"],
	"flavourtext":"Sprinkle on soil to grow crops faster. It's pretty effective.",
	"cookingeffects":{
		"hp":-100
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Formula A",
	"category":"Nutrient",
	"sell":30,
	"buy":1200,
	"chemistrylevel":29,
	"materials":["Withered Grass","Blue Grass","Black Grass"],
	"flavourtext":"Sprinkle on soil to grow crops faster. It's somewhat effective.",
	"cookingeffects":{
		"hp":-100
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Greenifier+",
	"category":"Nutrient",
	"sell":800,
	"buy":12e3,
	"chemistrylevel":64,
	"materials":["Withered Grass","Orange Grass","Corn"],
	"flavourtext":"An item used to raise soil quality. Improves soil's ability to grow higher-level crops.",
	"cookingeffects":{
		"hp":-100
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Greenifier",
	"category":"Nutrient",
	"sell":80,
	"buy":3e3,
	"chemistrylevel":34,
	"materials":["Withered Grass","Indigo Grass","Moondrop Flower"],
	"flavourtext":"An item used to raise soil quality. Improves soil's ability to grow higher-level crops.",
	"cookingeffects":{
		"hp":-100
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Wettable Powder",
	"category":"Nutrient",
	"sell":150,
	"buy":2e3,
	"chemistrylevel":30,
	"materials":["Charm Blue","Cherry Grass"],
	"flavourtext":"Sprinkle on soil to make plants stronger against typhoons and snowstorms.",
	"cookingeffects":{
		"hp":-100
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Object X",
	"category":"Medicine",
	"sell":2,
	"buy":150,
	"flavourtext":"A substance created from a failed Synthesis. How did it happen? Who knows, but it's not for eating. Seriously.",
	"effects":{
		"statusailments":["PSN","SEAL","PAR","SLP","FTG","SICK"],
		"rpP":-50
	},
	"cookingeffects":{
		"statusailments":["PSN","SEAL","PAR","SLP","FTG","SICK"],
		"rpP":-50
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Magical Potion",
	"category":"Medicine",
	"sell":2e3,
	"buy":5e3,
	"chemistrylevel":45,
	"materials":["Medicinal Herb","Elli Leaves"],
	"flavourtext":"One of the greatest achievements of magic medical science. Was only possible through the greatest of efforts.",
	"effects":{
		"hpP":50
	},
	"cookingeffects":{
		"hpP":50
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Magical Potion",
	"category":"Medicine",
	"sell":2e3,
	"buy":5e3,
	"chemistrylevel":70,
	"materials":["Fireflower"],
	"flavourtext":"One of the greatest achievements of magic medical science. Was only possible through the greatest of efforts.",
	"effects":{
		"hpP":50
	},
	"cookingeffects":{
		"hpP":50
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Mystery Potion",
	"category":"Medicine",
	"sell":200,
	"buy":1500,
	"chemistrylevel":33,
	"materials":["Medicinal Herb","White Grass"],
	"flavourtext":"A blue-colored medicinal drink. Recovers HP.",
	"effects":{
		"hp":3000
	},
	"cookingeffects":{
		"hp":3000
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Mystery Potion",
	"category":"Medicine",
	"sell":200,
	"buy":1500,
	"chemistrylevel":60,
	"materials":["Autumn Grass"],
	"flavourtext":"A blue-colored medicinal drink. Recovers HP.",
	"effects":{
		"hp":3000
	},
	"cookingeffects":{
		"hp":3000
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Healing Potion",
	"category":"Medicine",
	"sell":120,
	"buy":500,
	"chemistrylevel":20,
	"materials":["Medicinal Herb","Red Grass"],
	"flavourtext":"A deep green-colored medicinal drink. Recovers HP.",
	"effects":{
		"hp":800
	},
	"cookingeffects":{
		"hp":800
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Healing Potion",
	"category":"Medicine",
	"sell":120,
	"buy":500,
	"chemistrylevel":40,
	"materials":["Pom-Pom Grass"],
	"flavourtext":"A deep green-colored medicinal drink. Recovers HP.",
	"effects":{
		"hp":800
	},
	"cookingeffects":{
		"hp":800
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Recovery Potion",
	"category":"Medicine",
	"sell":15,
	"buy":80,
	"chemistrylevel":3,
	"materials":["Medicinal Herb","Green Grass"],
	"flavourtext":"A light green-colored medicinal drink. Recovers HP.",
	"effects":{
		"hp":150
	},
	"cookingeffects":{
		"hp":150
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Recovery Potion",
	"category":"Medicine",
	"sell":15,
	"buy":80,
	"chemistrylevel":15,
	"materials":["Blue Grass"],
	"flavourtext":"A light green-colored medicinal drink. Recovers HP.",
	"effects":{
		"hp":150
	},
	"cookingeffects":{
		"hp":150
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Leveliser",
	"category":"Medicine",
	"sell":3e3,
	"buy":5e6,
	"chemistrylevel":96,
	"materials":["Emery Flower","4-Leaf Clover","Noel Grass","Autumn Grass","Fireflower","Hot-Hot Fruit"],
	"flavourtext":"A medicine made from a hodge-podge of things. Heats your body and increases your level.",
	"effects":{
		// none
	},
	"cookingeffects":{
		// none in the form of stats
		// resulting dish could raise level like a normal leveliser
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Leveliser",
	"category":"Medicine",
	"sell":3e3,
	"buy":5e6,
	"chemistrylevel":99,
	"materials":["Great Emery Flower","Great 4-Leaf Clover"],
	"flavourtext":"A medicine made from a hodge-podge of things. Heats your body and increases your level.",
	"effects":{},
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Invinciroid",
	"category":"Medicine",
	"sell":5e3,
	"buy":112e4,
	"chemistrylevel":76,
	"materials":["Formuade","Autumn Grass","Hot-Hot Fruit","Noel Grass","Emery Flower"],
	"flavourtext":"You can be invincible! ...Or not. But it cures all status effects, so that's pretty cool.",
	"effects":{ // some/all of the effects follow the minor effect multiplier
		"heal":["PSN","SEAL","PAR","FTG","SICK"],
		"hpP":100,
		"rpP":100,
		"hpmax":1000,
		"hpmaxP":10,
		"str":50,
		"strP":10,
		"vit":50,
		"vitP":10,
		"int":50,
		"intP":10
	},
	"cookingeffects":{
		"heal":["PSN","SEAL","PAR","FTG","SICK"],
		"hpP":100,
		"rpP":100
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Invinciroid",
	"category":"Medicine",
	"sell":5e3,
	"buy":112e4,
	"chemistrylevel":86,
	"materials":["Formuade","Giant Hot-Hot Fruit"],
	"flavourtext":"You can be invincible! ...Or not. But it cures all status effects, so that's pretty cool.",
	"effects":{ // some/all of the effects follow the minor effect multiplier
		"heal":["PSN","SEAL","PAR","FTG","SICK"],
		"hpP":100,
		"rpP":100,
		"hpmax":1000,
		"hpmaxP":10,
		"str":50,
		"strP":10,
		"vit":50,
		"vitP":10,
		"int":50,
		"intP":10
	},
	"cookingeffects":{
		"heal":["PSN","SEAL","PAR","FTG","SICK"],
		"hpP":100,
		"rpP":100
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Love Potion",
	"category":"Medicine",
	"sell":500,
	"buy":3e6,
	"chemistrylevel":87,
	"materials":["Grape Liqueur","Pink Melon","Strawberry","Honey","Hot-Hot Fruit","Emery Flower"],
	"flavourtext":"A medicine loved by all. Give it to someone and they might like you. Heals all status effects.",
	"effects":{// some/all of the effects follow the minor effect multiplier
		"heal":["PSN","SEAL","PAR","FTG","SICK"],
		"rpP":50,
		"critresP":50,
		"knockresP":10,
		"psnresP":25,
		"sealresP":25,
		"parresP":25,
		"slpresP":25,
		"ftgresP":25,
		"sickresP":25,
		"faintresP":25
	},
	"cookingeffects":{
		"heal":["PSN","SEAL","PAR","FTG","SICK"],
		"rpP":50
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Love Potion",
	"category":"Medicine",
	"sell":500,
	"buy":3e6,
	"chemistrylevel":97,
	"materials":["Great Emery Flower"],
	"flavourtext":"A medicine loved by all. Give it to someone and they might like you. Heals all status effects.",
	"effects":{// some/all of the effects follow the minor effect multiplier
		"heal":["PSN","SEAL","PAR","FTG","SICK"],
		"rpP":50,
		"critresP":50,
		"knockresP":10,
		"psnresP":25,
		"sealresP":25,
		"parresP":25,
		"slpresP":25,
		"ftgresP":25,
		"sickresP":25,
		"faintresP":25
	},
	"cookingeffects":{
		"heal":["PSN","SEAL","PAR","FTG","SICK"],
		"rpP":50
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Formuade",
	"category":"Medicine",
	"sell":2500,
	"buy":2e4,
	"chemistrylevel":46,
	"materials":["Heavy Spice","Lamp Grass","Ironleaf","Liquids","Powders and Spores"],
	"flavourtext":"Medicine made from fertilizer. Tastes awful, but whatever doesn't kill you can only make you stronger, right?",
	"effects":{ // follows the standard effects multiplier
		"rpP":75,
		"hpmaxP":-50,
		"str":70,
		"vit":70,
		"int":70,
		"critP":20,
		"psnresP":25,
		"sealresP":25,
		"parresP":25,
		"slpresP":25,
		"ftgresP":25,
		"sickresP":25,
		"faintresP":25
	},
	"cookingeffects":{
		"rpP":75
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Formuade",
	"category":"Medicine",
	"sell":2500,
	"buy":2e4,
	"chemistrylevel":65,
	"materials":["Hot-Hot Fruit"],
	"flavourtext":"Medicine made from fertilizer. Tastes awful, but whatever doesn't kill you can only make you stronger, right?",
	"effects":{ // follows the standard effects multiplier
		"rpP":75,
		"hpmaxP":-50,
		"str":70,
		"vit":70,
		"int":70,
		"critP":20,
		"psnresP":25,
		"sealresP":25,
		"parresP":25,
		"slpresP":25,
		"ftgresP":25,
		"sickresP":25,
		"faintresP":25
	},
	"cookingeffects":{
		"rpP":75
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Cold Medicine",
	"category":"Medicine",
	"sell":110,
	"buy":1e3,
	"chemistrylevel":22,
	"materials":["Orange Grass","Toyherb"],
	"flavourtext":"Caught a cold? Nine out of ten doctors agree this medicine will cure it. And the tenth one is a quack.",
	"effects":{
		"heal":["SICK"],
		"hp":1000
	},
	"cookingeffects":{
		"heal":["SICK"],
		"hp":1000,
		"sickresP":50
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Cold Medicine",
	"category":"Medicine",
	"sell":110,
	"buy":1e3,
	"chemistrylevel":32,
	"materials":["Charm Blue"],
	"flavourtext":"Caught a cold? Nine out of ten doctors agree this medicine will cure it. And the tenth one is a quack.",
	"effects":{
		"heal":["SICK"],
		"hp":1000
	},
	"cookingeffects":{
		"heal":["SICK"],
		"hp":1000,
		"sickresP":50
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Roundoff",
	"category":"Medicine",
	"sell":60,
	"buy":800,
	"chemistrylevel":13,
	"materials":["Black Grass","Black Grass"],
	"flavourtext":"Medicine that dissolves seals.",
	"effects":{
		"heal":["SEAL"],
		"hp":300
	},
	"cookingeffects":{
		"heal":["SEAL"],
		"hp":300,
		"sealresP":50
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Roundoff",
	"category":"Medicine",
	"sell":60,
	"buy":800,
	"chemistrylevel":28,
	"materials":["Moondrop Flower"],
	"flavourtext":"Medicine that dissolves seals.",
	"effects":{
		"heal":["SEAL"],
		"hp":300
	},
	"cookingeffects":{
		"heal":["SEAL"],
		"hp":300,
		"sealresP":50
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Para-Gone",
	"category":"Medicine",
	"sell":80,
	"buy":900,
	"chemistrylevel":18,
	"materials":["Indigo Grass","Indigo Grass"],
	"flavourtext":"Medicine that cures paralysis.",
	"effects":{
		"heal":["PAR"],
		"hp":500
	},
	"cookingeffects":{
		"heal":["PAR"],
		"hp":500,
		"parresP":50
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Para-Gone",
	"category":"Medicine",
	"sell":80,
	"buy":900,
	"chemistrylevel":31,
	"materials":["Pink Cat"],
	"flavourtext":"Medicine that cures paralysis.",
	"effects":{
		"heal":["PAR"],
		"hp":500
	},
	"cookingeffects":{
		"heal":["PAR"],
		"hp":500,
		"parresP":50
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Antidote Potion",
	"category":"Medicine",
	"sell":150,
	"buy":1200,
	"chemistrylevel":25,
	"materials":["Antidote Grass","Yellow Grass"],
	"flavourtext":"Easier to take than herbs. Used for curing poison.",
	"effects":{
		"heal":["PSN"],
		"hp":1500
	},
	"cookingeffects":{
		"heal":["PSN"],
		"hp":1500,
		"psnresP":50
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Antidote Potion",
	"category":"Medicine",
	"sell":150,
	"buy":1200,
	"chemistrylevel":38,
	"materials":["Cherry Grass"],
	"flavourtext":"Easier to take than herbs. Used for curing poison.",
	"effects":{
		"heal":["PSN"],
		"hp":1500
	},
	"cookingeffects":{
		"heal":["PSN"],
		"hp":1500,
		"psnresP":50
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Heart Drink",
	"category":"Medicine",
	"sell":1300,
	"buy":15e5,
	"chemistrylevel":85,
	"materials":["Green Crystal","Green Crystal","Ironleaf","Powders and Spores","Liquids"],
	"flavourtext":"A specially made medicine. Increases maximum HP.",
	"effects":{
		// none
	},
	"cookingeffects":{
		// resulting dish seems to not raise maximum HP
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Heart Drink",
	"category":"Medicine",
	"sell":1300,
	"buy":15e5,
	"chemistrylevel":95,
	"materials":["Big Green Crystal"],
	"flavourtext":"A specially made medicine. Increases maximum HP.",
	"effects":{},
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Vital Gummi",
	"category":"Medicine",
	"sell":1500,
	"buy":2e6,
	"chemistrylevel":83,
	"materials":["Blue Crystal","Blue Crystal","Bok Choy","Powders and Spores","Liquids"],
	"flavourtext":"A specially made medicine. Increases maximum vitality.",
	"effects":{
		// none listed
	},
	"cookingeffects":{
		// resulting dish appears not to raise VIT
	},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Vital Gummi",
	"category":"Medicine",
	"sell":1500,
	"buy":2e6,
	"chemistrylevel":93,
	"materials":["Big Blue Crystal"],
	"flavourtext":"A specially made medicine. Increases maximum vitality.",
	"effects":{},
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Intelligencer",
	"category":"Medicine",
	"sell":1500,
	"buy":2e6,
	"chemistrylevel":82,
	"materials":["White Crystal","White Crystal","Eggplant","Powders and Spores","Liquids"],
	"flavourtext":"A specially made medicine. Increases maximum intelligence.",
	"effects":{},
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Intelligencer",
	"category":"Medicine",
	"sell":1500,
	"buy":2e6,
	"chemistrylevel":92,
	"materials":["Big White Crystal"],
	"flavourtext":"A specially made medicine. Increases maximum intelligence.",
	"effects":{},
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"The Protein",
	"category":"Medicine",
	"sell":1500,
	"buy":2e6,
	"chemistrylevel":80,
	"materials":["Red Crystal","Red Crystal","Spinach","Powders and Spores","Liquids"],
	"flavourtext":"A specially made medicine. Increases maximum strength. Get fit, brah.",
	"effects":{},
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"The Protein",
	"category":"Medicine",
	"sell":1500,
	"buy":2e6,
	"chemistrylevel":90,
	"materials":["Big Red Crystal"],
	"flavourtext":"A specially made medicine. Increases maximum strength. Get fit, brah.",
	"effects":{},
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})
