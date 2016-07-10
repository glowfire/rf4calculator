// Complete

registerItem({
  "name":"Glue",
  "category":"Liquids",
  "sell":70,
  "buy":420,
  "flavourtext":"An adhesive made from boiled animal skin. Teacher will get mad if she catches you eating it.",
  "pricemultiplier":"E",
  "upgradematerial":{
    "rarity":9,
    "difficulty":26,
    "atk":1,
    "def":2,
    "mdef":2
  }
});

registerItem({
  "name":"Devil Blood",
  "category":"Liquids",
  "sell":116,
  "buy":920,
  "flavourtext":"Life's blood collected from demons. Valued as medicine.",
  "pricemultiplier":"E",
  "upgradematerial":{
    "rarity":9,
    "difficulty":39,
    "matk":9,
    "drainresP":15
  },
  "cookingeffects":{ // confirmed
    "rpmax":1
  }
});

registerItem({
  "name":"Paralysis Poison",
  "category":"Liquids",
  "sell":131,
  "buy":1050,
  "flavourtext":"Toxic liquid that can paralyze you or poison you, depending on your luck. Or lack of luck.",
  "pricemultiplier":"E",
  "upgradematerial":{
    "rarity":10,
    "difficulty":30,
    "psnatkP":20
  },
  "cookingeffects":{ // confirmed
    "statusailments":["PSN"]
  }
});

registerItem({
  "name":"Poison King",
  "category":"Liquids",
  "sell":308,
  "buy":2770,
  "flavourtext":"Liquid that is very toxic. Just one lick is fatal. So stop licking it!",
  "pricemultiplier":"E",
  "upgradematerial":{
    "rarity":14,
    "difficulty":86,
    "atk":5,
    "matk":88,
    "psnatkP":80
  },
  "cookingeffects":{ // confirmed
    "statusailments":["PSN","SEAL","PAR"]
  }
});
