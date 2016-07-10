registerItem({
  "name":"Monarch Mushroom",
  "category":"Mushroom",
  "sell":1e4,
  "pricemultiplier":"E", // tentative
  "flavourtext":"The king of mushrooms. Has such a profound flavor that even royalty must bow down.",
  "effects":{ // unconfirmed
    "hpP":100,
    "rpP":100,
    "heal":["PSN","SEAL","PAR","FTG","SICK"]
  },
  "upgradeinfo":{ // unconfirmed
		"rarity":0, // unknown
		"difficulty":1, //unknown
		"str":5, // according to http://gwiki.jp/rf4/?%BA%EE%CA%AA
		"vit":5, // according to http://gwiki.jp/rf4/?%BA%EE%CA%AA
		"int":5 // according to http://gwiki.jp/rf4/?%BA%EE%CA%AA
	},
	"cookingeffects":{ // unknown
    "hp":3000,
    "rp":500,
    "heal":["PSN","SEAL","PAR","FTG","SICK"]
  }
})

registerItem({
  "name":"Mushroom",
  "category":"Mushroom",
  "sell":10,
  "buy":2000,
  "pricemultiplier":"E",
  "flavourtext":"Wild mushroom. You would have to test and see if it's safe to eat. Go on. I dare you.",
  "effects":{ // confirmed
    "hp":100,
    "rp":50,
    "heal":["PSN","SEAL","PAR"]
  },
  "cookingeffects":{ // confirmed
    "hp":100,
    "rp":50,
    "heal":["PSN","SEAL","PAR"]
  }
})

registerItem({
  "name":"Mushroom",
  "category":"Mushroom",
  "sell":10,
  "buy":2000,
  "pricemultiplier":"E",
  "flavourtext":"Wild mushroom. You would have to test and see if it's safe to eat. Go on. I dare you.",
  "effects":{ // tentative
    "hpP":50, // unknown
    "rpP":14.5, // unknown
    "heal":["FTG","SICK"] // confirmed
  },
  "cookingeffects":{ // confirmed
    "hp":500,
    "rp":100,
    "heal":["FTG","SICK"]
  }
})
