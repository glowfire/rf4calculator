

////////////////////////////////////////////////////////////////
//var currentItem="cornonthecob".convertStringToItem()
//var currentItem="leveliser99".convertStringToItemByListedName()
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////

registerItem({
	"name":"Corn",
    "category":"Vegetable",
    "sell":1000,
    "buy":3000,
    "pricemultiplier":"E",
    "effects":{
    	"hp":75
        },
	"upgradeinfo":{
    	"rarity":1,
        "difficulty":1,
    	"vit":6
        },
	"ingredienteffects":{
    	"rp":20
		}
	})

registerItem({
	"name":"Emery Flower",
    "category":"Plant",
    "sell":55000,
    "buy":5e5,
    "pricemultiplier":"E",
    "effects":{
    	"rp":300
        },
	"upgradeinfo":{
    	"rarity":1,//unknown
        "difficulty":66,
        "int":30
        },
	"ingredienteffects":{
    	"rp":20//unknown
		}
	})

registerItem({
	"name":"Fireflower",
    "category":"Plant",
    "sell":2800,
    "buy":10000,
    "pricemultiplier":"E",
    "effects":{
    	"rp":70
        },
	"upgradeinfo":{
    	"rarity":1,//unknown
        "difficulty":41,
    	"str":2,
        "int":6
        },
	"ingredienteffects":{
    	"rp":20//unknown
		}
	})

registerItem({
	"name":"Golden Cabbage",
    "category":"Vegetable",
    "sell":11500,
    "buy":5e4,
    "pricemultiplier":"E",
    "effects":{
    	"hp":500
        },
	"upgradeinfo":{
    	"rarity":1,//unknown
        "difficulty":59,
    	"int":20,
        "faintatkP":1
        },
	"ingredienteffects":{
    	"hp":2//unknown
        }
	})

registerItem({
	"name":"Golden Potato",
    "category":"Vegetable",
    "sell":6e3,
    "buy":3e4,
    "pricemultiplier":"E",
    "effects":{
    	"hp":350
        },
	"upgradeinfo":{
    	"rarity":1,//unknown
        "difficulty":55,
    	"vit":30,
        "faintatkP":1
        },
	"ingredienteffects":{
    	"hp":2//unknown
        }
	})

registerItem({
	"name":"Golden Pumpkin",
    "category":"Vegetable",
    "sell":4000,
    "buy":2e4,
    "pricemultiplier":"E",
    "effects":{
    	"hp":400
        },
	"upgradeinfo":{
    	"rarity":1,//unknown
        "difficulty":56,
    	"str":25,
        "faintatkP":1
        },
	"ingredienteffects":{
    	"hp":2//unknown
        }
	})
    
registerItem({
	"name":"Golden Turnip",
    "category":"Vegetable",
    "sell":2e4,
    "buy":1e5,
    "pricemultiplier":"E",
    "effects":{
    	"hp":800
        },
	"upgradeinfo":{
    	"rarity":1,//unknown
        "difficulty":67,
    	"str":30,
        "faintatkP":1
        },
	"ingredienteffects":{
    	"hp":2//unknown
        }
	})

registerItem({
	"name":"Great Emery Flower",
    "category":"Plant",
    "sell":25*1e4,
    "pricemultiplier":"E",
    "effects":{
    	"rp":500
        },
	"upgradeinfo":{
    	"rarity":1,//unknown
        "difficulty":95,
        "int":80
        },
	"ingredienteffects":{
    	"rp":20//unknown
		}
	})

registerItem({
	"name":"Hot-Hot Fruit",
    "category":"Vegetable",
    "sell":900,
    "buy":7000,
    "pricemultiplier":"E",
    "effects":{
    	// None
        },
	"upgradeinfo":{
    	"rarity":1,//unknown
        "difficulty":35,
    	"mdef":7,
        "fireresP":5
        },
	"ingredienteffects":{
    	"rp":20//unknown
		}
	})
    
registerItem({
	"name":"Noel Grass",
    "category":"Plant",
    "sell":2000,
    "buy":6660,
    "pricemultiplier":"E",
    "effects":{
    	"rp":75
        },
	"upgradeinfo":{
    	"rarity":1,//unknown
        "difficulty":41,
        "int":7
        },
	"ingredienteffects":{
    	"rp":20//unknown
		}
	})

registerItem({
	"name":"Pickled Turnip",
    "cookinglevel":4,
    "category":"No Tool",
    "sell":48,
    "buy":400,
    "pricemultiplier":"C1",
    "effects":{
    	"hp":250,
        "rp":100,
        "str":5,
        "vit":3,
        "int":5
        },
	"materials":["Turnip"]
	})
    
registerItem({
	"name":"Pickled Turnip",
    "cookinglevel":12,
    "category":"No Tool",
    "sell":48,
    "buy":400,
    "pricemultiplier":"C1",
    "effects":{
    	"hp":250,
        "rp":100,
        "str":5,
        "vit":3,
        "int":5
        },
	"materials":["Pink Turnip"]
	})

registerItem({
	"name":"Pink Cat",
    "category":"Plant",
    "sell":110,
    "buy":450,
    "pricemultiplier":"E",
    "effects":{
    	"rp":25
        },
	"upgradeinfo":{
    	"rarity":1,//unknown
        "difficulty":15,
        "int":2
        },
	"ingredienteffects":{
    	"rp":20//unknown
		}
	})

registerItem({
	"name":"Pink Turnip",
    "category":"Vegetable",
    "sell":200,
    "buy":700,
    "pricemultiplier":"E",
    "effects":{
    	"hp":70,
        },
	"upgradeinfo":{
    	"rarity":1,
        "difficulty":21,
    	"str":4
        },
	"ingredienteffects":{
    	"hp":2//unknown
        }
	})
    
registerItem({
	"name":"Prelude to Love",
    "cookinglevel":61,
    "category":"Mixer",
    "sell":2600,
    "buy":11200,
    "pricemultiplier":"C1",
    "effects":{
    	"hp":5000,
        "hpP":68,
        "rp":1000,
        "hpmaxP":-50,
        "rpmaxP":-50,
        "vitP":-50,
        "fireresP":50,
        "waterresP":50,
        "earthresP":50,
        "windresP":50,
        "lightresP":50,
        "darkresP":50,
        "loveresP":100
        },
	"materials":["Pink Melon","Strawberry"]
})

registerItem({
	"name":"Turnip",
    "category":"Vegetable",
    "sell":30,
    "buy":200,
    "pricemultiplier":"E",
    "effects":{
    	"hp":30,
        "rp":5
        },
	"upgradeinfo":{
    	"rarity":1,
        "difficulty":1,
    	"str":1
        },
	"ingredienteffects":{
    	"hp":2
        }
	})

registerItem({
	"name":"Turnip Heaven",
    "cookinglevel":96,
    "category":"No Tool",
    "sell":150000,
    "buy":542000,
    "pricemultiplier":"C1",
    "effects":{
    	"hp":5000,
        "hpP":90,
        "rp":1000,
        "rpP":90,
        "str":90,
        "strP":12,
        "vit":80,
        "vitP":15,
        "int":50,
        "intp":10,
        "fireresP":20,
        "lightresP":20,
        "darkresP":20
        },
	"materials":["Turnip","Pink Turnip","Golden Turnip"]
})

registerItem({
	"name":"Blue Grass",
    "category":"Plant",
    "sell":5,
    "buy":120,
    "pricemultiplier":"E",
    "effects":{
    	"hp":30,
    	"rp":3
        },
	"upgradeinfo":{
    	"rarity":1,//unknown
        "difficulty":11
        },
	"ingredienteffects":{
    	"rp":20//unknown
		}
	})

registerItem({
	"name":"Black Grass",
    "category":"Plant",
    "sell":5,
    "buy":120,
    "pricemultiplier":"E",
    "effects":{
    	"hp":50,
    	"rp":3
        },
	"upgradeinfo":{
    	"rarity":1,//unknown
        "difficulty":23
        },
	"ingredienteffects":{
    	"rp":20//unknown
		}
	})

registerItem({
	"name":"White Grass",
    "category":"Plant",
    "sell":5,
    "buy":120,
    "pricemultiplier":"E",
    "effects":{
    	"hp":200,
    	"rp":3
        },
	"upgradeinfo":{
    	"rarity":1,//unknown
        "difficulty":65
        },
	"ingredienteffects":{
    	"rp":20//unknown
		}
	})

registerItem({
	"name":"Yellow Grass",
    "category":"Plant",
    "sell":5,
    "buy":120,
    "pricemultiplier":"E",
    "effects":{
    	"hp":100,
    	"rp":3
        },
	"upgradeinfo":{
    	"rarity":1,//unknown
        "difficulty":39
        },
	"ingredienteffects":{
    	"rp":20//unknown
		}
	})

registerItem({
	"name":"Corn on the Cob",
    "cookinglevel":52,
    "category":"Oven",
    "sell":1860,
    "buy":6200,
    "pricemultiplier":"C1",
    "effects":{
    	"hp":5000,
        "hpP":20,
        "rp":1000,
        "vit":180,
        },
	"materials":["Corn"]
	})

registerItem({
	"name":"Gold Juice",
    "cookinglevel":99,
    "category":"Mixer",
    "sell":8e5,
    "pricemultiplier":"C1",
    "effects":{
    	"hp":5000,
        "hpP":100,
        "rp":1000,
        "rpP":100,
        "int":100,
        "intP":25,
        "fireresP":10,
        "waterresP":10,
        "earthresP":10,
        "windresP":10
        },
	"materials":["Golden Pumpkin","Emery Flower","Golden Potato",
    	"Golden Turnip","Golden Cabbage"]
})

registerItem({
	"name":"Formula A",
    "chemistrylevel":29,
    "category":"Nutrient",
    "sell":30,
    "buy":1200,
    "pricemultiplier":"Ch",    
	"materials":["Withered Grass","Blue Grass","Black Grass"]
})
    
registerItem({
	"name":"Formula B",
    "chemistrylevel":41,
    "category":"Nutrient",
    "sell":240,
    "buy":3600,
    "pricemultiplier":"Ch",    
	"materials":["Yellow Grass","Pink Cat","4-Leaf Clover"]
})
    
registerItem({
	"name":"Formuade",
    "chemistrylevel":65,
    "category":"Medicine",
    "sell":2500,
    "buy":20000,
    "pricemultiplier":"Ch",
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
	"materials":["Hot-Hot Fruit"]
})
    
registerItem({
	"name":"Formula C",
    "chemistrylevel":72,
    "category":"Nutrient",
    "sell":500,
    "buy":9800,
    "pricemultiplier":"Ch",    
	"materials":["White Grass","Fireflower","Corn"]
})
    
registerItem({
	"name":"Leveliser",
    "chemistrylevel":96,
    "category":"Medicine",
    "sell":3e3,
    "buy":5e6,
    "pricemultiplier":"Ch",
    "effects":{
    	// None
        },
	"materials":["Emery Flower","4-Leaf Clover","Noel Grass",
    	"Autumn Grass","Fireflower","Hot-Hot Fruit"]
})

registerItem({
	"name":"Great 4-Leaf Clover",
    "category":"Plant",
    "sell":5000,
    "pricemultiplier":"E",
    "effects":{
    	"rp":100
        },
	"upgradeinfo":{
    	"rarity":1,//unknown
        "difficulty":52
        },
	"ingredienteffects":{
    	"rp":20//unknown
		}
	})
    
registerItem({
	"name":"Leveliser",
    "chemistrylevel":99,
    "category":"Medicine",
    "sell":3e3,
    "buy":5e6,
    "pricemultiplier":"Ch",
    "effects":{
    	// None
        },
	"materials":["Great 4-Leaf Clover","Great Emery Flower"]
})

registerItem({
	"name":"Dark Crystal",
    "category":"Crystals",
    "sell":240,
    "buy":1440,
    "pricemultiplier":"E",
	"upgradematerial":{
    	"rarity":1,//unknown
        "difficulty":25,
        "str":3,
        "vit":3
        },
	"ingredienteffects":{
    	"rp":20//unknown
		}
	})

registerItem({
	"name":"Pink Melon",
    "category":"Vegetable",
    "sell":850,
    "buy":5000,
    "pricemultiplier":"E",
    "effects":{
    	"hp":90,
        "rp":30
        },
	"upgradeinfo":{
    	"rarity":1,//unknown
        "difficulty":45,
    	"int":7
        },
	"ingredienteffects":{
    	"rp":20//unknown
		}
	})

////////////////////////////////////////////////////////////////////////////
