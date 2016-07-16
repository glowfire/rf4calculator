// Registration of items in the order as shown in the shipping records.
// This list contains the items listed in the second section.

registerItem({
	"name":"Minimizer",
	"category":"Nutrient",
	"sell":100,
	"buy":8e3,
	"materials":[],
	"flavourtext":"Sprinkle on soil to grow smaller plants. Also makes soil healthier.",
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Giantizer",
	"category":"Nutrient",
	"sell":300,
	"buy":12e3,
	"materials":[],
	"flavourtext":"Sprinkle on soil to grow gargantuan produce.",
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"No Rot β",
	"category":"Nutrient",
	"sell":480,
	"buy":8e3,
	"materials":[],
	"flavourtext":"Sprinkle on soil to prevent plants from wilting. It's more effective than the α version.",
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"No Rot α",
	"category":"Nutrient",
	"sell":50,
	"buy":2e3,
	"materials":[],
	"flavourtext":"Sprinkle on soil to prevent plants from wilting.",
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Formula C",
	"category":"Nutrient",
	"sell":500,
	"buy":9800,
	"materials":[],
	"flavourtext":"Sprinkle on soil to grow crops faster. It's super effective!",
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Formula B",
	"category":"Nutrient",
	"sell":240,
	"buy":3600,
	"materials":[],
	"flavourtext":"Sprinkle on soil to grow crops faster. It's pretty effective.",
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Formula A",
	"category":"Nutrient",
	"sell":30,
	"buy":1200,
	"materials":[],
	"flavourtext":"Sprinkle on soil to grow crops faster. It's somewhat effective.",
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Greenifier+",
	"category":"Nutrient",
	"sell":800,
	"buy":12e3,
	"materials":[],
	"flavourtext":"An item used to raise soil quality. Improves soil's ability to grow higher-level crops.",
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Greenifier",
	"category":"Nutrient",
	"sell":80,
	"buy":3e3,
	"materials":[],
	"flavourtext":"An item used to raise soil quality. Improves soil's ability to grow higher-level crops.",
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Wettable Powder",
	"category":"Nutrient",
	"sell":150,
	"buy":2e3,
	"materials":[],
	"flavourtext":"Sprinkle on soil to make plants stronger against typhoons and snowstorms.",
	"cookingeffects":{},
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
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Magical Potion",
	"category":"Medicine",
	"sell":2e3,
	"buy":5e3,
	"materials":[],
	"flavourtext":"One of the greatest achievements of magic medical science. Was only possible through the greatest of efforts.",
	"effects":{
		"hpP":50
	},
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Mystery Potion",
	"category":"Medicine",
	"sell":200,
	"buy":1500,
	"materials":[],
	"flavourtext":"A blue-colored medicinal drink. Recovers HP.",
	"effects":{
		"hp":3000
	},
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Healing Potion",
	"category":"Medicine",
	"sell":120,
	"buy":500,
	"materials":[],
	"flavourtext":"A deep green-colored medicinal drink. Recovers HP.",
	"effects":{
		"hp":800
	},
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Recovery Potion",
	"category":"Medicine",
	"sell":15,
	"buy":80,
	"materials":[],
	"flavourtext":"A light green-colored medicinal drink. Recovers HP.",
	"effects":{
		"hp":150
	},
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Leveliser",
	"category":"Medicine",
	"sell":3e3,
	"buy":5e6,
	"materials":[],
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
	"materials":[],
	"flavourtext":"You can be invincible! ...Or not. But it cures all status effects, so that's pretty cool.",
	"effects":{
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
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Love Potion",
	"category":"Medicine",
	"sell":500,
	"buy":3e6,
	"materials":[],
	"flavourtext":"A medicine loved by all. Give it to someone and they might like you. Heals all status effects.",
	"effects":{
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
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Formuade",
	"category":"Medicine",
	"sell":2500,
	"buy":2e4,
	"materials":[],
	"flavourtext":"Medicine made from fertilizer. Tastes awful, but whatever doesn't kill you can only make you stronger, right?",
	"effects":{
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
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Cold Medicine",
	"category":"Medicine",
	"sell":110,
	"buy":1e3,
	"materials":[],
	"flavourtext":"Caught a cold? Nine out of ten doctors agree this medicine will cure it. And the tenth one is a quack.",
	"effects":{
		"heal":["SICK"],
		"hp":1000
	},
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Roundoff",
	"category":"Medicine",
	"sell":60,
	"buy":800,
	"materials":[],
	"flavourtext":"Medicine that dissolves seals.",
	"effects":{
		"heal":["SEAL"],
		"hp":300
	},
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Para-Gone",
	"category":"Medicine",
	"sell":80,
	"buy":900,
	"materials":[],
	"flavourtext":"Medicine that cures paralysis.",
	"effects":{
		"heal":["PAR"],
		"hp":500
	},
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Antidote Potion",
	"category":"Medicine",
	"sell":150,
	"buy":1200,
	"materials":[],
	"flavourtext":"Easier to take than herbs. Used for curing poison.",
	"effects":{
		"heal":["PSN"],
		"hp":1500
	},
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Heart Drink",
	"category":"Medicine",
	"sell":1300,
	"buy":15e5,
	"materials":[],
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
	"materials":[],
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
	"materials":[],
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
	"materials":[],
	"flavourtext":"A specially made medicine. Increases maximum strength. Get fit, brah.",
	"effects":{},
	"cookingeffects":{},
	"pricemultiplier":"Ch"
})
