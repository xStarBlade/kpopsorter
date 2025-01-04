dataSetVersion = "2024-11-15"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Select groups to sort through the idols in them",
    key: "group",
    tooltip: "Check this to restrict to certain groups.",
    checked: false,
    sub: [
      {name: "Soloists", key: "soloist"},
      {name: "2NE1", key: "2NE1"},
      {name: "4Minute", key: "4Minute"},
      {name: "9Muses", key: "9Muses"},
      {name: "ablume", key: "ablume"},
      {name: "ADYA", key: "ADYA"},
      {name: "Aespa", key: "Aespa"},
      {name: "After School", key: "After School"},
      {name: "Alice", key: "Alice"},
      {name: "AOA", key: "AOA"},
      {name: "Apink", key: "Apink"},
      {name: "April", key: "April"},
      {name: "ARTMS", key: "ARTMS"},
      {name: "As One", key: "As One"},
      {name: "BabyMonster", key: "BabyMonster"},
      {name: "BADVILLAIN", key: "BADVILLAIN"},
      {name: "BESTie", key: "BESTie"},
      {name: "Billlie", key: "Billlie"},
      {name: "Blackpink", key: "Blackpink"},
      {name: "Brave Girls", key: "Brave Girls"},
      {name: "Brown Eyed Girls", key: "Brown Eyed Girls"},
      {name: "bugAboo", key: "bugAboo"},
      {name: "Busters β", key: "Busters β"},
      {name: "Busters", key: "Busters"},
      {name: "Candy Shop", key: "Candy Shop"},
      {name: "Cherry Bullet", key: "Cherry Bullet"},
      {name: "Cignature", key: "Cignature"},
      {name: "CLASS:y", key: "CLASS:y"},
      {name: "CLC", key: "CLC"},
      {name: "Crayon Pop", key: "Crayon Pop"},
      {name: "Craxy", key: "Craxy"},
      {name: "CSR", key: "CSR"},
      {name: "Dal★Shabet", key: "Dal★Shabet"},
      {name: "Davichi", key: "Davichi"},
      {name: "Dia", key: "Dia"},
      {name: "Dreamcatcher", key: "Dreamcatcher"},
      {name: "DreamNote", key: "DreamNote"},
      {name: "Everglow", key: "Everglow"},
      {name: "EXID", key: "EXID"},
      {name: "f(x)", key: "f(x)"},
      {name: "Fiestar", key: "Fiestar"},
      {name: "FIFTY FIFTY", key: "FIFTY FIFTY"},
      {name: "Fromis 9", key: "Fromis 9"},
      {name: "(G)I-dle", key: "(G)I-dle"},
      {name: "Geenius", key: "Geenius"},
      {name: "GFriend", key: "GFriend"},
      {name: "Girl's Day", key: "Girl's Day"},
      {name: "Girls' Generation", key: "Girls' Generation"},
      {name: "Gugudan", key: "Gugudan"},
      {name: "GWSN", key: "GWSN"},
      {name: "H1-KEY", key: "H1-KEY"},
      {name: "Hellovenus", key: "Hellovenus"},
      {name: "I.O.I", key: "I.O.I"},
      {name: "ICHILLIN", key: "ICHILLIN"},
      {name: "ILLIT", key: "ILLIT"},
      {name: "ILY:1", key: "ILY:1"},
      {name: "ITZY", key: "ITZY"},
      {name: "IVE", key: "IVE"},
      {name: "IZ*ONE", key: "IZ*ONE"},
      {name: "izna", key: "izna"},
      {name: "Kara", key: "Kara"},
      {name: "Kep1er", key: "Kep1er"},
      {name: "KISS OF LIFE", key: "KISS OF LIFE"},
      {name: "Laboum", key: "Laboum"},
      {name: "Ladies' code", key: "Ladies' code"},
      {name: "LAPILLUS", key: "LAPILLUS"},
      {name: "Laysha", key: "Laysha"},
      {name: "LE SSERAFIM", key: "LE SSERAFIM"},
      {name: "Lightsum", key: "Lightsum"},
      {name: "Loossemble", key: "Loossemble"},
      {name: "Lovelyz", key: "Lovelyz"},
      {name: "Madein", key: "Madein"},
      {name: "Majors", key: "Majors"},
      {name: "Mamamoo", key: "Mamamoo"},
      {name: "Meovv", key: "Meovv"},
      {name: "mimiirose", key: "mimiirose"},
      {name: "Miss A", key: "Miss A"},
      {name: "Momoland", key: "Momoland"},
      {name: "Nature", key: "Nature"},
      {name: "NewJeans", key: "NewJeans"},
      {name: "NeonPunch", key: "NeonPunch"},
      {name: "Nmixx", key: "Nmixx"},
      {name: "Oh My Girl", key: "Oh My Girl"},
      {name: "ODD YOUTH", key: "ODD YOUTH"},
      {name: "PAPAYA", key: "PAPAYA"},
      {name: "Pixy", key: "Pixy"},
      {name: "PRIMROSE", key: "PRIMROSE"},
      {name: "Pristin", key: "Pristin"},
      {name: "Purple Kiss", key: "Purple Kiss"},
      {name: "QWER", key: "QWER"},
      {name: "Rainbow", key: "Rainbow"},
      {name: "Red Velvet", key: "Red Velvet"},
      {name: "ReScene", key: "ReScene"},
      {name: "Rocket Punch", key: "Rocket Punch"},
      {name: "S.E.S.", key: "S.E.S."},
      {name: "Say My Name", key: "Say My Name"},
      {name: "Secret", key: "Secret"},
      {name: "Secret Number", key: "Secret Number"},
      {name: "SeeYa", key: "SeeYa"},
      {name: "Sistar", key: "Sistar"},
      {name: "Sonamoo", key: "Sonamoo"},
      {name: "SPICA", key: "SPICA"},
      {name: "StayC", key: "StayC"},
      {name: "Stellar", key: "Stellar"},
      {name: "Sunny Hill", key: "Sunny Hill"},
      {name: "T-ara", key: "T-ara"},
      {name: "Tri.be", key: "Tri.be"},
      {name: "tripleS", key: "tripleS"},
      {name: "Twice", key: "Twice"},
      {name: "UNI.T", key: "UNI.T"},
      {name: "UNIS", key: "UNIS"},
      {name: "VIV", key: "VIV"},
      {name: "Viviz", key: "Viviz"},
      {name: "VVUP", key: "VVUP"},
      {name: "Weeekly", key: "Weeekly"},
      {name: "Weki Meki", key: "Weki Meki"},
      {name: "WJSN", key: "WJSN"},
      {name: "Wonder Girls", key: "Wonder Girls"},
      {name: "woo!ah!", key: "woo!ah!"},
      {name: "X:IN", key: "X:IN"},
      {name: "Young Posse", key: "Young Posse"},
    ]
  },
  {
    name: "Filter by K-pop generation",
    key: "gen",
    tooltip: "Check this to restrict groups by generation.",
    checked: false,
    sub: [ { name: "Gen 1", key: "gen1" }, { name: "Gen 2", key: "gen2" }, { name: "Gen 3", key: "gen3" }, { name: "Gen 4", key: "gen4" }, { name: "Gen 5", key: "gen5" }
    ]
  },
  {
    name: "GROUP SORTER",
    key: "group_label",
    tooltip: "Check this to choose which groups you want to sort.",
    checked: false,
    sub: [ 
      {name: "Soloists", key: "soloist"},
      {name: "2NE1", key: "2NE1"},
      {name: "4Minute", key: "4Minute"},
      {name: "9Muses", key: "9Muses"},
      {name: "ablume", key: "ablume"},
      {name: "ADYA", key: "ADYA"},
      {name: "Aespa", key: "Aespa"},
      {name: "After School", key: "After School"},
      {name: "Alice", key: "Alice"},
      {name: "AOA", key: "AOA"},
      {name: "Apink", key: "Apink"},
      {name: "April", key: "April"},
      {name: "ARTMS", key: "ARTMS"},
      {name: "As One", key: "As One"},
      {name: "BabyMonster", key: "BabyMonster"},
      {name: "BADVILLAIN", key: "BADVILLAIN"},
      {name: "BESTie", key: "BESTie"},
      {name: "Billlie", key: "Billlie"},
      {name: "Blackpink", key: "Blackpink"},
      {name: "Brave Girls", key: "Brave Girls"},
      {name: "Brown Eyed Girls", key: "Brown Eyed Girls"},
      {name: "bugAboo", key: "bugAboo"},
      {name: "Busters β", key: "Busters β"},
      {name: "Busters", key: "Busters"},
      {name: "Candy Shop", key: "Candy Shop"},
      {name: "Cherry Bullet", key: "Cherry Bullet"},
      {name: "Cignature", key: "Cignature"},
      {name: "CLASS:y", key: "CLASS:y"},
      {name: "CLC", key: "CLC"},
      {name: "Crayon Pop", key: "Crayon Pop"},
      {name: "Craxy", key: "Craxy"},
      {name: "CSR", key: "CSR"},
      {name: "Dal★Shabet", key: "Dal★Shabet"},
      {name: "Davichi", key: "Davichi"},
      {name: "Dia", key: "Dia"},
      {name: "Dreamcatcher", key: "Dreamcatcher"},
      {name: "DreamNote", key: "DreamNote"},
      {name: "Everglow", key: "Everglow"},
      {name: "EXID", key: "EXID"},
      {name: "f(x)", key: "f(x)"},
      {name: "Fiestar", key: "Fiestar"},
      {name: "FIFTY FIFTY", key: "FIFTY FIFTY"},
      {name: "Fromis 9", key: "Fromis 9"},
      {name: "(G)I-dle", key: "(G)I-dle"},
      {name: "Geenius", key: "Geenius"},
      {name: "GFriend", key: "GFriend"},
      {name: "Girl's Day", key: "Girl's Day"},
      {name: "Girls' Generation", key: "Girls' Generation"},
      {name: "Gugudan", key: "Gugudan"},
      {name: "GWSN", key: "GWSN"},
      {name: "H1-KEY", key: "H1-KEY"},
      {name: "Hellovenus", key: "Hellovenus"},
      {name: "I.O.I", key: "I.O.I"},
      {name: "ICHILLIN", key: "ICHILLIN"},
      {name: "ILLIT", key: "ILLIT"},
      {name: "ILY:1", key: "ILY:1"},
      {name: "ITZY", key: "ITZY"},
      {name: "IVE", key: "IVE"},
      {name: "IZ*ONE", key: "IZ*ONE"},
      {name: "izna", key: "izna"},
      {name: "Kara", key: "Kara"},
      {name: "Kep1er", key: "Kep1er"},
      {name: "KISS OF LIFE", key: "KISS OF LIFE"},
      {name: "Laboum", key: "Laboum"},
      {name: "Ladies' code", key: "Ladies' code"},
      {name: "LAPILLUS", key: "LAPILLUS"},
      {name: "Laysha", key: "Laysha"},
      {name: "LE SSERAFIM", key: "LE SSERAFIM"},
      {name: "Lightsum", key: "Lightsum"},
      {name: "Loossemble", key: "Loossemble"},
      {name: "Lovelyz", key: "Lovelyz"},
      {name: "Madein", key: "Madein"},
      {name: "Majors", key: "Majors"},
      {name: "Mamamoo", key: "Mamamoo"},
      {name: "Meovv", key: "Meovv"},
      {name: "mimiirose", key: "mimiirose"},
      {name: "Miss A", key: "Miss A"},
      {name: "Momoland", key: "Momoland"},
      {name: "Nature", key: "Nature"},
      {name: "NewJeans", key: "NewJeans"},
      {name: "NeonPunch", key: "NeonPunch"},
      {name: "Nmixx", key: "Nmixx"},
      {name: "Oh My Girl", key: "Oh My Girl"},
      {name: "ODD YOUTH", key: "ODD YOUTH"},
      {name: "PAPAYA", key: "PAPAYA"},
      {name: "Pixy", key: "Pixy"},
      {name: "PRIMROSE", key: "PRIMROSE"},
      {name: "Pristin", key: "Pristin"},
      {name: "Purple Kiss", key: "Purple Kiss"},
      {name: "QWER", key: "QWER"},
      {name: "Rainbow", key: "Rainbow"},
      {name: "Red Velvet", key: "Red Velvet"},
      {name: "ReScene", key: "ReScene"},
      {name: "Rocket Punch", key: "Rocket Punch"},
      {name: "S.E.S.", key: "S.E.S."},
      {name: "Say My Name", key: "Say My Name"},
      {name: "Secret", key: "Secret"},
      {name: "Secret Number", key: "Secret Number"},
      {name: "SeeYa", key: "SeeYa"},
      {name: "Sistar", key: "Sistar"},
      {name: "Sonamoo", key: "Sonamoo"},
      {name: "SPICA", key: "SPICA"},
      {name: "StayC", key: "StayC"},
      {name: "Stellar", key: "Stellar"},
      {name: "Sunny Hill", key: "Sunny Hill"},
      {name: "T-ara", key: "T-ara"},
      {name: "Tri.be", key: "Tri.be"},
      {name: "tripleS", key: "tripleS"},
      {name: "Twice", key: "Twice"},
      {name: "UNI.T", key: "UNI.T"},
      {name: "UNIS", key: "UNIS"},
      {name: "VIV", key: "VIV"},
      {name: "Viviz", key: "Viviz"},
      {name: "VVUP", key: "VVUP"},
      {name: "Weeekly", key: "Weeekly"},
      {name: "Weki Meki", key: "Weki Meki"},
      {name: "WJSN", key: "WJSN"},
      {name: "Wonder Girls", key: "Wonder Girls"},
      {name: "woo!ah!", key: "woo!ah!"},
      {name: "X:IN", key: "X:IN"},
      {name: "Young Posse", key: "Young Posse"},
    ]
  },
];

dataSet[dataSetVersion].characterData = [
    {
        name: "As One Crystal",
        img: "EGYUvjY.jpeg",
        opts: {
            group: ["As One"],
            gen: ["gen1"]
        }
    },
    {
        name: "As One Min",
        img: "hoFNepH.jpeg",
        opts: {
            group: ["As One"],
            gen: ["gen1"]
        }
    },
    {
        name: "PAPAYA Go Naeun",
        img: "69gH9za.jpeg",
        opts: {
            group: ["PAPAYA"],
            gen: ["gen1"]
        }
    },
    {
        name: "S.E.S. Bada",
        img: "EJAI9ha.jpeg",
        opts: {
            group: ["S.E.S."],
            gen: ["gen1"]
        }
    },
    {
        name: "S.E.S. Eugene",
        img: "qFgTDvT.jpeg",
        opts: {
            group: ["S.E.S."],
            gen: ["gen1"]
        }
    },
    {
        name: "S.E.S. Shoo",
        img: "gf48iHk.png",
        opts: {
            group: ["S.E.S."],
            gen: ["gen1"]
        }
    },
    {
        name: "Baek Jiyoung",
        img: "CO3WqVj.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "BoA",
        img: "xesVuX8.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "Gummy",
        img: "hk45cAu.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "Jessi",
        img: "rK1S2bh.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "Lee Hyori",
        img: "agNlY1T.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "Lee SooYoung",
        img: "emHLjnC.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "Lee Sora",
        img: "4KwoL9Z.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "Lee Sun Hee",
        img: "0KsQZYo.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "Lena Park",
        img: "Vsau6I0.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "Lyn",
        img: "CG9dMHG.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "Park Jiyoon",
        img: "MZGbDVJ.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "Yangpa",
        img: "ZeDQN0P.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "Wonder Girls Ahn Sohee",
        img: "qMPi1sx.jpeg",
        opts: {
            group: ["Wonder Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal★Shabet Ahyoung",
        img: "u05uzw4.jpeg",
        opts: {
            group: ["Dal★Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Ailee",
        img: "q0TWy1J.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Alice",
        img: "L80EqJw.jpeg",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "f(x) Amber",
        img: "6B5Oi7W.jpeg",
        opts: {
            group: ["f(x)"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Areum",
        img: "ykZoQ4f.png",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Bekah",
        img: "7lgqVeu.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Bini",
        img: "K970Pu4.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sunny Hill Bitna",
        img: "LPLDlv6.png",
        opts: {
            group: ["Sunny Hill"],
            gen: ["gen2"]
        }
    },
    {
        name: "SPICA BoA",
        img: "wcFNldT.jpeg",
        opts: {
            group: ["SPICA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Bomi",
        img: "hDNaiGP.jpeg",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sistar Bora",
        img: "XFSnOXe.png",
        opts: {
            group: ["Sistar"],
            gen: ["gen2"]
        }
    },
    {
        name: "SeeYa Boram",
        img: "UG2vBKK.jpeg",
        opts: {
            group: ["SeeYa"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Boram",
        img: "IGHUvD6.jpeg",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "CL",
        img: "6Qzsiwy.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen2"]
        }
    },
    {
        name: "Fiestar Cao Lu",
        img: "CPb4yFd.png",
        opts: {
            group: ["Fiestar"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Chanmi",
        img: "QZ1eJwc.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Choa",
        img: "YrjSiU3.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Crayon Pop Choa",
        img: "pL4n6X9.png",
        opts: {
            group: ["Crayon Pop"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Chorong",
        img: "Nj8CLUy.jpeg",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Dalsooobin",
        img: "6piZqXS.jpeg",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sistar Dasom",
        img: "MWpFZoW.png",
        opts: {
            group: ["Sistar"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School E-Young",
        img: "csrUlVG.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "Crayon Pop Ellin",
        img: "wmHfcsR.png",
        opts: {
            group: ["Crayon Pop"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Euaerin",
        img: "Dc3VJAA.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Eunji",
        img: "IPadsTs.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Eunji",
        img: "lB3n0ZP.jpeg",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sunny Hill Eunju",
        img: "cgnfhWT.png",
        opts: {
            group: ["Sunny Hill"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Eunjung",
        img: "26nxfOZ.png",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Eunyoung",
        img: "rNZ7IZz.png",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Miss A Fei",
        img: "lP6qqL5.jpeg",
        opts: {
            group: ["Miss A"],
            gen: ["gen2"]
        }
    },
    {
        name: "G.na",
        img: "IPsErbu.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brown Eyed Girls Gain",
        img: "rWdWerY.png",
        opts: {
            group: ["Brown Eyed Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "4Minute Gayoon",
        img: "kd2BuSf.png",
        opts: {
            group: ["4Minute"],
            gen: ["gen2"]
        }
    },
    {
        name: "Stellar Gayoung",
        img: "dbKKYym.png",
        opts: {
            group: ["Stellar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Goo Hara",
        img: "grCkR4r.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Crayon Pop Gummi",
        img: "un1AjHv.png",
        opts: {
            group: ["Crayon Pop"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Gyeongree",
        img: "qMouRtF.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "SeeYa Gyuri",
        img: "GopQZk1.jpeg",
        opts: {
            group: ["SeeYa"],
            gen: ["gen2"]
        }
    },
    {
        name: "Wonder Girls HA:TFELT",
        img: "iEJtb8V.jpeg",
        opts: {
            group: ["Wonder Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Haeryung",
        img: "SHXJ1rh.png",
        opts: {
            group: ["EXID"],
            gen: ["gen2"]
        }
    },
    {
        name: "Secret Hana",
        img: "t5SBTjU.png",
        opts: {
            group: ["Secret"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Hani",
        img: "1tqFknq.jpeg",
        opts: {
            group: ["EXID"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Hayoung",
        img: "qRFys3W.jpeg",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Hayun",
        img: "dDBDWKs.png",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Hwayoung",
        img: "X1EYi5P.jpg",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Hyejeong",
        img: "okjVFkD.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Hyemi",
        img: "JSDwiDr.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Stellar Hyeoeun",
        img: "aDKZiIc.jpeg",
        opts: {
            group: ["Stellar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Hyeran",
        img: "DSIOLO0.jpeg",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Hyeri",
        img: "gzAFqGO.jpeg",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "Wonder Girls Hyerim",
        img: "9r2baV5.png",
        opts: {
            group: ["Wonder Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Hyerin",
        img: "C7spu99.jpeg",
        opts: {
            group: ["EXID"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Hyoyeon",
        img: "dS8UPyw.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sistar Hyolyn",
        img: "NwwNnAe.jpeg",
        opts: {
            group: ["Sistar"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Hyomin",
        img: "kGwMkpR.jpeg",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Hyunyoung",
        img: "vAmAcai.png",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "IU",
        img: "ha00nMK.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Jaekyung",
        img: "SPUJZAO.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Jaekyung",
        img: "bSpTc6d.jpeg",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brown Eyed Girls JeA",
        img: "6Ap3i2Q.jpeg",
        opts: {
            group: ["Brown Eyed Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Fiestar Jei",
        img: "RKNbiuS.png",
        opts: {
            group: ["Fiestar"],
            gen: ["gen2"]
        }
    },
    {
        name: "4Minute Jenyer",
        img: "e0RvTm0.jpeg",
        opts: {
            group: ["4Minute"],
            gen: ["gen2"]
        }
    },
    {
        name: "Stellar Jeon Youl",
        img: "zldrNFu.png",
        opts: {
            group: ["Stellar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Jeong Eunji",
        img: "CY4G9Ea.jpeg",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Jessica",
        img: "3yBxR2a.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Miss A Jia",
        img: "KhxYm7P.jpeg",
        opts: {
            group: ["Miss A"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Jihae",
        img: "FRAV4bp.png",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Jiin",
        img: "gJVat1j.jpeg",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Jimin",
        img: "4uDETkl.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Jisook",
        img: "FK6sA4j.jpeg",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Jisun",
        img: "VwhJdKB.jpeg",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "SPICA Jiwon",
        img: "XakKbI2.jpeg",
        opts: {
            group: ["SPICA"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Jiyeon",
        img: "Okxset2.jpeg",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Jiyoung Kang",
        img: "T4A7iLl.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Jiyul",
        img: "nY8gfw0.png",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Urban Zakapa Jo Hyunah",
        img: "xeXrRTc.jpeg",
        opts: {
            group: ["Urban Zakapa"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Jooyeon",
        img: "A5bIC9w.jpeg",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sunny Hill Jubi",
        img: "dhNquru.jpeg",
        opts: {
            group: ["Sunny Hill"],
            gen: ["gen2"]
        }
    },
    {
        name: "Secret Jun Hyo Seong",
        img: "W2uBc0u.jpeg",
        opts: {
            group: ["Secret"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Jungah",
        img: "opFUnvb.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Junghwa",
        img: "PSWBIiK.jpeg",
        opts: {
            group: ["EXID"],
            gen: ["gen2"]
        }
    },
    {
        name: "Juniel",
        img: "feVufX2.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Kaeun",
        img: "HxUv65q.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Kaeun",
        img: "GFb96Kp.jpeg",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Kahi",
        img: "SmrYhQp.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Kang Hye Yeon",
        img: "cRnrT3V.jpeg",
        opts: {
            group: ["EXID"],
            gen: ["gen2"]
        }
    },
    {
        name: "Davichi Kang Min Kyung",
        img: "3Luzslf.jpeg",
        opts: {
            group: ["Davichi"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Keumjo",
        img: "OAclbVO.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "SPICA Kim Bo Hyung",
        img: "C2EYCVQ.jpeg",
        opts: {
            group: ["SPICA"],
            gen: ["gen2"]
        }
    },
    {
        name: "SeeYa Kim Yeonji",
        img: "n3v1Ce6.jpeg",
        opts: {
            group: ["SeeYa"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sunny Hill Kota",
        img: "0ZhMFJR.jpeg",
        opts: {
            group: ["Sunny Hill"],
            gen: ["gen2"]
        }
    },
    {
        name: "f(x) Krystal",
        img: "TWqxrSX.jpeg",
        opts: {
            group: ["f(x)"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID LE",
        img: "c6UN0Ym.jpeg",
        opts: {
            group: ["EXID"],
            gen: ["gen2"]
        }
    },
    {
        name: "Davichi Lee Haeri",
        img: "ijdX6ql.jpeg",
        opts: {
            group: ["Davichi"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses LeeSem",
        img: "lR10SEn.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Lim Jeonghee",
        img: "OAauOYi.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Lime",
        img: "nWSoes9.png",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "Fiestar Linzy",
        img: "IpTqES7.png",
        opts: {
            group: ["Fiestar"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Lizzy",
        img: "DZutdTF.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "f(x) Luna",
        img: "F6PnQYs.jpeg",
        opts: {
            group: ["f(x)"],
            gen: ["gen2"]
        }
    },
    {
        name: "Miss A Min",
        img: "0KDJOOy.jpeg",
        opts: {
            group: ["Miss A"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Mina",
        img: "D3RhzOZ.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Minah",
        img: "Y5Gym6b.jpeg",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "Stellar Minhee",
        img: "G8KNsPe.jpeg",
        opts: {
            group: ["Stellar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Minyoung",
        img: "8PI1iUL.jpeg",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "2NE1 Minzy",
        img: "QV2m2YD.png",
        opts: {
            group: ["2NE1"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brown Eyed Girls Miryo",
        img: "BhJL72x.png",
        opts: {
            group: ["Brown Eyed Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sunny Hill Misung",
        img: "dRZShyr.jpeg",
        opts: {
            group: ["Sunny Hill"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Moon Hyuna",
        img: "4wjrf1x.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "NS Yoon-G",
        img: "GacNRgx.png",
        opts: {
            group: ["soloist"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Naeun",
        img: "jtKQ0Y1.png",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Namjoo",
        img: "4cQYpZG.jpeg",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Nana",
        img: "aEPXgvI.jpeg",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Nara",
        img: "VAkpDrm.png",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "SPICA Narae",
        img: "8vzrTBv.jpeg",
        opts: {
            group: ["SPICA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brown Eyed Girls Narsha",
        img: "qm3vDGi.png",
        opts: {
            group: ["Brown Eyed Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Nicole Jung",
        img: "6NVZxwf.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Noeul",
        img: "yYq9pvJ.jpeg",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "2NE1 Park Bom",
        img: "Wvw6Bix.jpeg",
        opts: {
            group: ["2NE1"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Park Gyuri",
        img: "6WKYTcA.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Qri",
        img: "rpAmbgO.jpeg",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Raina",
        img: "s096Kif.jpeg",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Rana",
        img: "E2fcm6C.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Ryu Sera",
        img: "5YhVzpg.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "2NE1 Sandara Park",
        img: "3vmY6iW.png",
        opts: {
            group: ["2NE1"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Seoah",
        img: "su2U2BK.jpeg",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Seohyun",
        img: "NhJDxQE.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Seolhyun",
        img: "S7ZvDk6.png",
        opts: {
            group: ["AOA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Seoyoung",
        img: "4rugp2j.png",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Serri",
        img: "mygXwW4.jpeg",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Seungah",
        img: "S6s54kt.png",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Seungyeon",
        img: "5RugHBn.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "4Minute Sohyun",
        img: "my8vZo3.png",
        opts: {
            group: ["4Minute"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Sojin",
        img: "6Kyua2G.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Sojin",
        img: "VkVdhVb.png",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Solji",
        img: "CcQuKCx.jpeg",
        opts: {
            group: ["EXID"],
            gen: ["gen2"]
        }
    },
    {
        name: "Secret Song Jieun",
        img: "lRuvgj4.jpeg",
        opts: {
            group: ["Secret"],
            gen: ["gen2"]
        }
    },
    {
        name: "SeeYa Soomi",
        img: "YkPhJ32.jpeg",
        opts: {
            group: ["SeeYa"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Sooyoung",
        img: "fEuwz0V.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Soyeon",
        img: "wrjNMVE.jpeg",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sistar Soyou",
        img: "kYWWowy.jpeg",
        opts: {
            group: ["Sistar"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Soyoung",
        img: "8PlRaaj.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "Stellar Soyoung",
        img: "HP78cfK.jpeg",
        opts: {
            group: ["Stellar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Crayon Pop Soyul",
        img: "Rc8DEkn.png",
        opts: {
            group: ["Crayon Pop"],
            gen: ["gen2"]
        }
    },
    {
        name: "f(x) Sulli",
        img: "aB8qobB.png",
        opts: {
            group: ["f(x)"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Sungah",
        img: "WbwRjF5.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Secret Sunhwa",
        img: "DOJIoMW.jpeg",
        opts: {
            group: ["Secret"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Sunny",
        img: "wBYhaRw.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Wonder Girls Sunye",
        img: "6S6l2ak.png",
        opts: {
            group: ["Wonder Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Miss A Suzy",
        img: "my0Ea9g.jpeg",
        opts: {
            group: ["Miss A"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Taeyeon",
        img: "hNM4nC9.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Tiffany",
        img: "leSjkjs.png",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School UEE",
        img: "kko3ZUs.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Uji",
        img: "nLIt2bQ.png",
        opts: {
            group: ["EXID"],
            gen: ["gen2"]
        }
    },
    {
        name: "f(x) Victoria",
        img: "rCAsPIZ.png",
        opts: {
            group: ["f(x)"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Viki",
        img: "6qcfmOJ.jpeg",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Crayon Pop Way",
        img: "gIls0qZ.png",
        opts: {
            group: ["Crayon Pop"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Woohee",
        img: "lLTP6r9.jpeg",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Woori",
        img: "WTUuW4w.png",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Yejin",
        img: "wyg2jYi.png",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Fiestar Yel",
        img: "1VZcfM9.jpeg",
        opts: {
            group: ["Fiestar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Yeoreum",
        img: "sg7G4IP.jpeg",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "Fiestar Yezi",
        img: "7CKCWi4.jpeg",
        opts: {
            group: ["Fiestar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Yoo Ara",
        img: "WCtTjHt.png",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Yoojin",
        img: "xJKHQAo.png",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Yookyung",
        img: "z33MiBf.png",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Yoona",
        img: "uw1gNJ9.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Yoonhye",
        img: "BIl6OGo.jpeg",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Yooyoung",
        img: "MNyU2bO.jpeg",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Youkyung",
        img: "FE2p4AT.png",
        opts: {
            group: ["AOA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Youngji",
        img: "gqoUs82.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Younha",
        img: "O8u1fun.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen2"]
        }
    },
    {
        name: "Wonder Girls Yubin",
        img: "0ZXbmdS.jpeg",
        opts: {
            group: ["Wonder Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Yuna",
        img: "SwByUez.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Yuna",
        img: "iFIDW5T.jpeg",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Yura",
        img: "1BRmv8s.jpeg",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Yuri",
        img: "MHU8ojX.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Momoland Ahin",
        img: "2oi2skK.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Arin",
        img: "llxjzqr.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Ladies' code Ashley",
        img: "aYxcakV.jpeg",
        opts: {
            group: ["Ladies' code"],
            gen: ["gen3"]
        }
    },
    {
        name: "Bol4",
        img: "ydDLtTc.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laysha Bitna",
        img: "JdzKhix.jpg",
        opts: {
            group: ["Laysha"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Bona",
        img: "tKXYTSD.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Chaejeong",
        img: "J7WKqXB.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laysha Chaejin",
        img: "5SZ8fgC.jpeg",
        opts: {
            group: ["Laysha"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Chaewon",
        img: "lGTX0QM.jpeg",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Chaeyeon",
        img: "ZgJblRe.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Chaeyoung",
        img: "iJPTcmB.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Cheng Xiao",
        img: "yOL4OOz.png",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo D.ana",
        img: "7pmUTmb.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "BESTie Dahye",
        img: "nCRU50l.png",
        opts: {
            group: ["BESTie"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Dahyun",
        img: "r9zytsE.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Daisy",
        img: "crgJd3M.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher Dami",
        img: "LXPKoCn.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Dawon",
        img: "BgOyRyT.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Dayoung",
        img: "9BSdPVs.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Do-A",
        img: "zVRRLbI.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Doyeon",
        img: "oLgfQuh.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Ej",
        img: "a24mRTW.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "CLC Elkie",
        img: "XKko8Gz.jpeg",
        opts: {
            group: ["CLC"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Elly",
        img: "0RZY088.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "Ladies' code EunB",
        img: "LCw9ump.jpeg",
        opts: {
            group: ["Ladies' code"],
            gen: ["gen3"]
        }
    },
    {
        name: "CLC Eunbin",
        img: "XzJfj8d.jpeg",
        opts: {
            group: ["CLC"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Eunchae",
        img: "1KOuyih.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Eunice",
        img: "4C3jEjt.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Eunjin",
        img: "L1N6Ddx.png",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Eunseo",
        img: "tOUutRB.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Eunwoo",
        img: "bqdFPUB.png",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Exy",
        img: "yyvmSX3.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher Gahyeon",
        img: "0Ozkm0F.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laysha Goeun",
        img: "Tr1jVqE.jpeg",
        opts: {
            group: ["Laysha"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Gyeongwon",
        img: "nXrXa18.png",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Haebin",
        img: "AWJi6yX.png",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Haein",
        img: "WsWVkNQ.png",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Hana",
        img: "vWD6w0L.png",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher Handong",
        img: "VahvT6i.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "Heize",
        img: "Prw6zC8.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo Hezz",
        img: "UkRdSmt.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Huihyeon",
        img: "MBXvrak.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Mamamoo Hwasa",
        img: "ygsowHa.jpeg",
        opts: {
            group: ["Mamamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Hyebin",
        img: "s6Rkpo2.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Hyeyeon",
        img: "vmszKBK.png",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Hyojung",
        img: "bLDLeLv.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Hyuna",
        img: "IQwVrnE.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen3"]
        }
    },
    {
        name: "Busters β Hyungseo",
        img: "76eOWOk.png",
        opts: {
            group: ["Busters β"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Hyunjoo",
        img: "CLyOCbx.png",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Red Velvet Irene",
        img: "M4PFiW8.jpeg",
        opts: {
            group: ["Red Velvet"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Jane",
        img: "VAwnWUh.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Blackpink Jennie",
        img: "oRi9ZfP.jpeg",
        opts: {
            group: ["Blackpink"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Jenny",
        img: "6uCDTP1.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Jeongyeon",
        img: "jZOnKRS.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laysha Jian",
        img: "F847uwF.jpeg",
        opts: {
            group: ["Laysha"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher JiU",
        img: "wuf8iAj.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Jiho",
        img: "0vVJewB.png",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Jihyo",
        img: "8wlCpOw.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Jin",
        img: "MjnB8Ot.jpeg",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl JinE",
        img: "TSdPLQU.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Jinsol",
        img: "rGtmHUL.jpeg",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Jinye",
        img: "Oxl5XAy.jpeg",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "Blackpink Jisoo",
        img: "eVViRoz.jpeg",
        opts: {
            group: ["Blackpink"],
            gen: ["gen3"]
        }
    },
    {
        name: "Busters β Jisoo",
        img: "feiCXXG.png",
        opts: {
            group: ["Busters β"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Jisoo",
        img: "TaZnCBd.png",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "KARD Jiwoo",
        img: "5tG01k3.jpeg",
        opts: {
            group: ["KARD"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland JooE",
        img: "AbDus0H.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Red Velvet Joy",
        img: "Cnht1zT.jpeg",
        opts: {
            group: ["Red Velvet"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Jueun",
        img: "ncYfGGU.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Karin",
        img: "6wA6ahq.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Kei",
        img: "0dpd0Sc.png",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo Kim Dohee",
        img: "8BxW2I1.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Kyla",
        img: "A00uB8p.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Kyulkyung",
        img: "H4Hz5VK.png",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lee Hi",
        img: "266wUfR.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen3"]
        }
    },
    {
        name: "Akmu Lee Suhyun",
        img: "YRy5K03.jpeg",
        opts: {
            group: ["Akmu"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Lee Sujeong",
        img: "Euc9c5T.jpeg",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Blackpink Lisa",
        img: "gTMe2BZ.jpeg",
        opts: {
            group: ["Blackpink"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Lua",
        img: "AAIefLr.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Lucy",
        img: "qVBzkZB.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Luda",
        img: "sNHeJoK.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Meiqi",
        img: "r8lUd4l.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Mijoo",
        img: "GO76GvH.jpeg",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Mimi",
        img: "n4nSp5k.png",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Mimi",
        img: "GNk3VxJ.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Mina",
        img: "7o0H9Nr.jpeg",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Mina",
        img: "0dMaUgi.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo Minjae",
        img: "gfHBHrx.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Busters β Minjung",
        img: "qA8QcCK.png",
        opts: {
            group: ["Busters β"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Minkyeung",
        img: "y3wT8vP.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Momo",
        img: "mOtUd1y.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Mamamoo Moonbyul",
        img: "fUTjQlS.jpeg",
        opts: {
            group: ["Mamamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Naeun",
        img: "Jix84A3.png",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo Nahyun",
        img: "b9hrARV.png",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Nancy",
        img: "6eqHbUo.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Nayeon",
        img: "9UkPffk.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Nayoung",
        img: "VfTZREV.png",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Nayoung",
        img: "Z1yUB5o.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Nayun",
        img: "pMatxza.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo New Sun",
        img: "QbSOXTl.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "CLC Oh Seunghee",
        img: "LdXtr1P.jpeg",
        opts: {
            group: ["CLC"],
            gen: ["gen3"]
        }
    },
    {
        name: "Punch",
        img: "UPzn0lC.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Rachel",
        img: "xhHVsT7.jpeg",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Ladies' code RiSe",
        img: "hskde0N.jpeg",
        opts: {
            group: ["Ladies' code"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Rina",
        img: "KfrW86f.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "Blackpink Rose",
        img: "P0NEqEM.jpeg",
        opts: {
            group: ["Blackpink"],
            gen: ["gen3"]
        }
    },
    {
        name: "Rothy",
        img: "UqQv6yn.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Ryu Sujeong",
        img: "Ivby2Av.png",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Sally",
        img: "RN7np0k.jpeg",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Sana",
        img: "q9KXu3Q.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Sei",
        img: "jSqz3aa.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Seola",
        img: "orAL7JJ.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Red Velvet Seulgi",
        img: "W06kTIF.jpeg",
        opts: {
            group: ["Red Velvet"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Seunghee",
        img: "Q50ROdm.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "CLC Seungyeon",
        img: "O4eanJC.jpeg",
        opts: {
            group: ["CLC"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher Siyeon",
        img: "TBBq4WL.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Sohee",
        img: "dneO14e.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "I.O.I Sohye",
        img: "231Gyzs.png",
        opts: {
            group: ["I.O.I"],
            gen: ["gen3"]
        }
    },
    {
        name: "Ladies' code Sojung",
        img: "q38dheA.jpeg",
        opts: {
            group: ["Ladies' code"],
            gen: ["gen3"]
        }
    },
    {
        name: "Mamamoo Solar",
        img: "U8TvcPF.jpeg",
        opts: {
            group: ["Mamamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Solbin",
        img: "qwnO8JO.jpeg",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "KARD Somin",
        img: "D4NphCi.jpeg",
        opts: {
            group: ["KARD"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Somyi",
        img: "JuL4LPs.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Soobin",
        img: "BQwv9Tz.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "CLC Sorn",
        img: "eSEm3uN.jpeg",
        opts: {
            group: ["CLC"],
            gen: ["gen3"]
        }
    },
    {
        name: "GFriend Sowon",
        img: "oDV5H6X.jpeg",
        opts: {
            group: ["GFriend"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Soyee",
        img: "DGoidGt.jpeg",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Soyeon",
        img: "Om7AJq7.jpeg",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher SuA",
        img: "ST8JIWU.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo Sumin",
        img: "a74zhuJ.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Sungyeon",
        img: "E46v8Xi.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sunmi",
        img: "0HA5ZPr.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Suyeon",
        img: "ADBEexx.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Taeha",
        img: "Wte9KmK.png",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Tzuyu",
        img: "6LkJlbB.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Red Velvet Wendy",
        img: "yOJJBHh.jpeg",
        opts: {
            group: ["Red Velvet"],
            gen: ["gen3"]
        }
    },
    {
        name: "Mamamoo WheeIn",
        img: "c3mIzuY.jpeg",
        opts: {
            group: ["Mamamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Xiyeon",
        img: "PXSay1q.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Xuanyi",
        img: "mBe70T7.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Yaebin",
        img: "SILiqqU.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Yebin",
        img: "TSGPRTC.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Yeeun",
        img: "kBX7O6p.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Yehana",
        img: "BNW3taY.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Yein",
        img: "0eNJcPU.jpeg",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Yena",
        img: "m5fVbg3.png",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Yeonjae",
        img: "10ZPchD.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Yeonjung",
        img: "ignvRnZ.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Yeonwoo",
        img: "VPmJbS2.jpg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Yeoreum",
        img: "Jl9w5bL.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Red Velvet Yeri",
        img: "l1yefUF.jpeg",
        opts: {
            group: ["Red Velvet"],
            gen: ["gen3"]
        }
    },
    {
        name: "GFriend Yerin",
        img: "s9eLWMA.jpeg",
        opts: {
            group: ["GFriend"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Yoo Jiae",
        img: "xQrdeua.jpeg",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Yooa",
        img: "1o1qhJJ.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher Yoohyeon",
        img: "9xEwr19.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "I.O.I Yoojung",
        img: "hijXCo5.jpeg",
        opts: {
            group: ["I.O.I"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Yubin",
        img: "CEsnUUc.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Yujeong",
        img: "1iaSdoc.jpeg",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "GFriend Yuju",
        img: "FPWfUtk.jpeg",
        opts: {
            group: ["GFriend"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Yukyung",
        img: "iVNPZCO.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Yulhee",
        img: "inQag92.jpeg",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "Ladies' code Zuny",
        img: "PpoMDel.png",
        opts: {
            group: ["Ladies' code"],
            gen: ["gen3"]
        }
    },
    {
        name: "MAJORS Aki",
        img: "yXMw1k9.jpeg",
        opts: {
            group: ["MAJORS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Alexa",
        img: "cku4QoL.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "Everglow Aisha",
        img: "HP35cqr.jpeg",
        opts: {
            group: ["Everglow"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Anne",
        img: "qqoSuW0.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Ara",
        img: "wdFISWA.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "X:IN Aria",
        img: "a0FxGPM.jpeg",
        opts: {
            group: ["X:IN"],
            gen: ["gen4"]
        }
    },
    {
        name: "FIFTY FIFTY Athena",
        img: "LRKcPMp.jpg",
        opts: {
            group: ["FIFTY FIFTY"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Aurora",
        img: "yDQiKNB.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nmixx Bae",
        img: "jSLu0sW.jpeg",
        opts: {
            group: ["Nmixx"],
            gen: ["gen4"]
        }
    },
    {
        name: "NeonPunch Baekah",
        img: "jb766sk.jpg",
        opts: {
            group: ["NeonPunch"],
            gen: ["gen4"]
        }
    },
    {
        name: "KISS OF LIFE Belle",
        img: "Jguc3nV.jpeg",
        opts: {
            group: ["KISS OF LIFE"],
            gen: ["gen4"]
        }
    },
    {
        name: "LAPILLUS Bessie",
        img: "tDWgdO3.jpeg",
        opts: {
            group: ["LAPILLUS"],
            gen: ["gen4"]
        }
    },
    {
        name: "MAJORS Bian",
        img: "kaAUj6E.jpeg",
        opts: {
            group: ["MAJORS"],
            gen: ["gen4"]
        }
    },
    {
        name: "BIBI",
        img: "MZYVjcB.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "CLASS:y Boeun",
        img: "XmMBzs6.jpeg",
        opts: {
            group: ["CLASS:y"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Boni",
        img: "8JLrlbY.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Bora",
        img: "7daGrAp.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Chaebin",
        img: "sSUNygK.png",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "ADYA Chaeeun",
        img: "wOKid0w.jpeg",
        opts: {
            group: ["ADYA"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Chaehyun",
        img: "AY9upq3.jpeg",
        opts: {
            group: ["Kep1er"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Chaerin",
        img: "x4kf1Ze.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "ICHILLIN Chaerin",
        img: "PmTAwAQ.jpeg",
        opts: {
            group: ["ICHILLIN"],
            gen: ["gen4"]
        }
    },
    {
        name: "ITZY Chaeryeong",
        img: "ktFMVRd.jpeg",
        opts: {
            group: ["ITZY"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cignature Chaesol",
        img: "yslGnxy.jpeg",
        opts: {
            group: ["Cignature"],
            gen: ["gen4"]
        }
    },
    {
        name: "CLASS:y Chaewon",
        img: "bBK9diE.png",
        opts: {
            group: ["CLASS:y"],
            gen: ["gen4"]
        }
    },
    {
        name: "LE SSERAFIM Chaewon",
        img: "mkJfJiC.jpeg",
        opts: {
            group: ["LE SSERAFIM"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Chaewon",
        img: "2EJlDhH.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Chaeyoung",
        img: "fRgO8rH.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "FIFTY FIFTY Chanelle",
        img: "V5ic7Wp.jpg",
        opts: {
            group: ["FIFTY FIFTY"],
            gen: ["gen4"]
        }
    },
    {
        name: "LAPILLUS Chanty",
        img: "9LWNiul.jpeg",
        opts: {
            group: ["LAPILLUS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cignature Chloe",
        img: "FUvn8H4.jpeg",
        opts: {
            group: ["Cignature"],
            gen: ["gen4"]
        }
    },
    {
        name: "ARTMS Choerry",
        img: "ZOyrBvb.jpeg",
        opts: {
            group: ["ARTMS"],
            gen: ["gen4"]
        }
    },
    {
        name: "mimiirose Choi Yeonjae",
        img: "6VjYFLa.jpeg",
        opts: {
            group: ["mimiirose"],
            gen: ["gen4"]
        }
    },
    {
        name: "ICHILLIN Chowon",
        img: "VWoYc1q.jpeg",
        opts: {
            group: ["ICHILLIN"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lightsum Chowon",
        img: "ueJWuPx.jpeg",
        opts: {
            group: ["Lightsum"],
            gen: ["gen4"]
        }
    },
    {
        name: "bugAboo Choyeon",
        img: "OFDqTuX.jpeg",
        opts: {
            group: ["bugAboo"],
            gen: ["gen4"]
        }
    },
    {
        name: "Chungha",
        img: "pqf6EXc.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "Chuu",
        img: "t8Jbyq1.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cocona",
        img: "6xcvecN.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "bugAboo Cyan",
        img: "6XoXRLX.jpeg",
        opts: {
            group: ["bugAboo"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Dahyun",
        img: "cOUHetB.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Pixy Dajeong",
        img: "KaxognB.png",
        opts: {
            group: ["Pixy"],
            gen: ["gen4"]
        }
    },
    {
        name: "NewJeans Danielle",
        img: "UxUWGfn.jpg",
        opts: {
            group: ["NewJeans"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Dayeon",
        img: "hyxt9ub.jpeg",
        opts: {
            group: ["Kep1er"],
            gen: ["gen4"]
        }
    },
    {
        name: "NeonPunch Dayeon",
        img: "1ZOScXz.jpg",
        opts: {
            group: ["NeonPunch"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Denise",
        img: "KfSxnem.jpeg",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "Pixy Dia",
        img: "tKtpUVO.jpeg",
        opts: {
            group: ["Pixy"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Dita",
        img: "qGjdpqr.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cignature Dohee",
        img: "wSQvUzn.jpeg",
        opts: {
            group: ["Cignature"],
            gen: ["gen4"]
        }
    },
    {
        name: "NeonPunch Dohee",
        img: "CCxRN9i.jpg",
        opts: {
            group: ["NeonPunch"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Dosie",
        img: "v1Rk5HP.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "CSR Duna",
        img: "pjkmOB0.jpeg",
        opts: {
            group: ["CSR"],
            gen: ["gen4"]
        }
    },
    {
        name: "ICHILLIN E.ji",
        img: "wbyQiSl.jpeg",
        opts: {
            group: ["ICHILLIN"],
            gen: ["gen4"]
        }
    },
    {
        name: "X:IN E.Sha",
        img: "L2tI5EI.jpeg",
        opts: {
            group: ["X:IN"],
            gen: ["gen4"]
        }
    },
    {
        name: "Everglow E:U",
        img: "KuyJvLy.jpeg",
        opts: {
            group: ["Everglow"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Ella",
        img: "8DcEdmC.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Elva",
        img: "yKnI76g.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "bugAboo Eunchae",
        img: "tdR8pe2.jpeg",
        opts: {
            group: ["bugAboo"],
            gen: ["gen4"]
        }
    },
    {
        name: "LE SSERAFIM Eunchae",
        img: "T1jRggd.jpeg",
        opts: {
            group: ["LE SSERAFIM"],
            gen: ["gen4"]
        }
    },
    {
        name: "Viviz Eunha",
        img: "yU7yh7S.jpeg",
        opts: {
            group: ["Viviz"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Eunjo",
        img: "Q3ED4Vh.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "IVE Gaeul",
        img: "7IyXWMO.jpeg",
        opts: {
            group: ["IVE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Gaga",
        img: "pO2yzmX.png",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "CSR Geumhee",
        img: "JuMzXKt.jpeg",
        opts: {
            group: ["CSR"],
            gen: ["gen4"]
        }
    },
    {
        name: "Aespa Giselle",
        img: "JzbFLM7.jpeg",
        opts: {
            group: ["Aespa"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Goeun",
        img: "1sKutUg.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "Loossemble Gowon",
        img: "2yWdo3m.jpeg",
        opts: {
            group: ["Loossemble"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Gyuri",
        img: "CmU2rZ4.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Habin",
        img: "pGo5cIi.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "NewJeans Haerin",
        img: "rGNRYcQ.jpeg",
        opts: {
            group: ["NewJeans"],
            gen: ["gen4"]
        }
    },
    {
        name: "LAPILLUS Haeun",
        img: "iYWMj24.jpeg",
        opts: {
            group: ["LAPILLUS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nmixx Haewon",
        img: "fj73fZF.jpeg",
        opts: {
            group: ["Nmixx"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Haeyoon",
        img: "rfaEF7x.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "mimiirose Han Yewon",
        img: "utoAJKi.jpeg",
        opts: {
            group: ["mimiirose"],
            gen: ["gen4"]
        }
    },
    {
        name: "FIFTY FIFTY Hana",
        img: "3HvagaZ.jpg",
        opts: {
            group: ["FIFTY FIFTY"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Hana",
        img: "nBShYK6.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Hanbyeol",
        img: "eVUb6VA.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "KISS OF LIFE Haneul",
        img: "w2UTkqT.jpeg",
        opts: {
            group: ["KISS OF LIFE"],
            gen: ["gen4"]
        }
    },
    {
        name: "X:IN Hannah",
        img: "Ns9NjuE.jpeg",
        opts: {
            group: ["X:IN"],
            gen: ["gen4"]
        }
    },
    {
        name: "NewJeans Hanni",
        img: "edQPBic.jpeg",
        opts: {
            group: ["NewJeans"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Haram",
        img: "ApG76mN.jpeg",
        opts: {
            group: ["Billlie"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Haru",
        img: "S4zYLD6.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Haruna",
        img: "gJKVCfq.jpeg",
        opts: {
            group: ["Billlie"],
            gen: ["gen4"]
        }
    },
    {
        name: "ARTMS Haseul",
        img: "v3vEOnu.jpeg",
        opts: {
            group: ["ARTMS"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Hayeon",
        img: "GOQLJSu.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Hayoung",
        img: "j7D1QPu.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "PRIMROSE Hayun",
        img: "pDhVPxV.jpeg",
        opts: {
            group: ["PRIMROSE"],
            gen: ["gen4"]
        }
    },
    {
        name: "ARTMS Heejin",
        img: "wAuyotu.jpeg",
        opts: {
            group: ["ARTMS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Hikaru",
        img: "UIdT1MF.jpeg",
        opts: {
            group: ["Kep1er"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lightsum Hina",
        img: "VrA22AT.jpeg",
        opts: {
            group: ["Lightsum"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Huening Bahiyyih",
        img: "gPlGxxL.jpeg",
        opts: {
            group: ["Kep1er"],
            gen: ["gen4"]
        }
    },
    {
        name: "H1-KEY Hwiseo",
        img: "iEvd4KG.jpeg",
        opts: {
            group: ["H1-KEY"],
            gen: ["gen4"]
        }
    },
    {
        name: "NewJeans Hyein",
        img: "Z86ZSMK.jpeg",
        opts: {
            group: ["NewJeans"],
            gen: ["gen4"]
        }
    },
    {
        name: "Craxy Hyejin",
        img: "0LwnBfv.jpeg",
        opts: {
            group: ["Craxy"],
            gen: ["gen4"]
        }
    },
    {
        name: "CLASS:y Hyeju",
        img: "ncU6XAU.jpeg",
        opts: {
            group: ["CLASS:y"],
            gen: ["gen4"]
        }
    },
    {
        name: "Loossemble Hyeju",
        img: "xK2dn8s.jpeg",
        opts: {
            group: ["Loossemble"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Hyerin",
        img: "yHL1Er6.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Hyewon",
        img: "DN8c4L9.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "Tri.be Hyunbin",
        img: "2mK5yFQ.png",
        opts: {
            group: ["Tri.be"],
            gen: ["gen4"]
        }
    },
    {
        name: "CLASS:y Hyungseo",
        img: "1wQ1yi9.jpeg",
        opts: {
            group: ["CLASS:y"],
            gen: ["gen4"]
        }
    },
    {
        name: "Loossemble Hyunjin",
        img: "SoY7pdM.jpeg",
        opts: {
            group: ["Loossemble"],
            gen: ["gen4"]
        }
    },
    {
        name: "NeonPunch Iaan",
        img: "yqaQQC8.jpg",
        opts: {
            group: ["NeonPunch"],
            gen: ["gen4"]
        }
    },
    {
        name: "MAJORS Ida",
        img: "rCsE314.jpeg",
        opts: {
            group: ["MAJORS"],
            gen: ["gen4"]
        }
    },
    {
        name: "mimiirose Inn Hyori",
        img: "Uds2YBK.jpeg",
        opts: {
            group: ["mimiirose"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Ireh",
        img: "AyJEkUZ.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "StayC Isa",
        img: "ubzfrdi.jpeg",
        opts: {
            group: ["StayC"],
            gen: ["gen4"]
        }
    },
    {
        name: "StayC J",
        img: "hpUlxlY.jpeg",
        opts: {
            group: ["StayC"],
            gen: ["gen4"]
        }
    },
    {
        name: "ICHILLIN Jackie",
        img: "K8GiCvn.jpeg",
        opts: {
            group: ["ICHILLIN"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Jaehee",
        img: "tJVv6oT.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cignature Jeewon",
        img: "T7Vi5qG.jpeg",
        opts: {
            group: ["Cignature"],
            gen: ["gen4"]
        }
    },
    {
        name: "(G)I-dle Jeon Soyeon",
        img: "y5TmZTG.jpeg",
        opts: {
            group: ["(G)I-dle"],
            gen: ["gen4"]
        }
    },
    {
        name: "Busters Jieun",
        img: "zxEWZnZ.jpeg",
        opts: {
            group: ["Busters"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Jieun",
        img: "Ns3zyui.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Jihan",
        img: "OMrNZSw.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Jiheon",
        img: "M8fWt8Q.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "CLASS:y Jimin",
        img: "DtghmKC.jpeg",
        opts: {
            group: ["CLASS:y"],
            gen: ["gen4"]
        }
    },
    {
        name: "Tri.be Jinha",
        img: "EvecQmc.jpeg",
        opts: {
            group: ["Tri.be"],
            gen: ["gen4"]
        }
    },
    {
        name: "Jinni",
        img: "uFwhX3r.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Jinny",
        img: "wl3BDmb.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "ARTMS Jinsoul",
        img: "tB56Rxv.jpeg",
        opts: {
            group: ["ARTMS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Jiselle",
        img: "mWydawb.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Jisun",
        img: "kNOLlTe.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Jiwon",
        img: "qQFXszP.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Jiwon",
        img: "cBlQ9zV.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nmixx Jiwoo",
        img: "tA0EJaq.jpeg",
        opts: {
            group: ["Nmixx"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Jiwoo",
        img: "K3zlpot.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Jiyeon",
        img: "banw20c.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "ICHILLIN Jiyoon",
        img: "PqUOILT.jpeg",
        opts: {
            group: ["ICHILLIN"],
            gen: ["gen4"]
        }
    },
    {
        name: "Jo Yuri",
        img: "yuA83rb.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Joobin",
        img: "bD0Qokr.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "ICHILLIN Joonie",
        img: "QggztWK.jpeg",
        opts: {
            group: ["ICHILLIN"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lightsum Juhyeon",
        img: "5Q1UzB9.jpeg",
        opts: {
            group: ["Lightsum"],
            gen: ["gen4"]
        }
    },
    {
        name: "KISS OF LIFE Julie",
        img: "IMMl5qA.jpeg",
        opts: {
            group: ["KISS OF LIFE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Rocket Punch Juri",
        img: "0UCxUoQ.jpeg",
        opts: {
            group: ["Rocket Punch"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Kaede",
        img: "5meSlya.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Craxy Karin",
        img: "mde1uJx.jpeg",
        opts: {
            group: ["Craxy"],
            gen: ["gen4"]
        }
    },
    {
        name: "Aespa Karina",
        img: "ARy4dtI.jpeg",
        opts: {
            group: ["Aespa"],
            gen: ["gen4"]
        }
    },
    {
        name: "LE SSERAFIM Kazuha",
        img: "a9qd93W.jpeg",
        opts: {
            group: ["LE SSERAFIM"],
            gen: ["gen4"]
        }
    },
    {
        name: "FIFTY FIFTY Keena",
        img: "yg2QdF3.jpg",
        opts: {
            group: ["FIFTY FIFTY"],
            gen: ["gen4"]
        }
    },
    {
        name: "Tri.be Kelly",
        img: "1tQY5TV.png",
        opts: {
            group: ["Tri.be"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Kim Chaeyeon",
        img: "2TIwTLM.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "ARTMS Kim Lip",
        img: "Olc9o1z.jpeg",
        opts: {
            group: ["ARTMS"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Kim Nakyoung",
        img: "SQe9B3t.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kim Yeji",
        img: "GPQOilU.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Kim Yooyeon",
        img: "M4exApR.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Kokoro",
        img: "eQnJJ2x.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Kotone",
        img: "B2o95eZ.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kwon Eunbi",
        img: "PTIHNWz.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nmixx Kyujin",
        img: "WknnkIy.jpeg",
        opts: {
            group: ["Nmixx"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Lara",
        img: "vDtITvk.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lee Chaeyeon",
        img: "yj8ONrF.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "IVE Leeseo",
        img: "QcPmAJS.jpeg",
        opts: {
            group: ["IVE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Lee Soojin",
        img: "BmxYS16.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lee Youngji",
        img: "emkBoTh.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Lena",
        img: "9wnEfOL.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "ITZY Lia",
        img: "zZvLYqT.jpeg",
        opts: {
            group: ["ITZY"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nmixx Lily",
        img: "aRfKGyc.jpeg",
        opts: {
            group: ["Nmixx"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Lin Lin",
        img: "MIFoTYn.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "IVE Liz",
        img: "lQGwpeE.jpeg",
        opts: {
            group: ["IVE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Loha",
        img: "0bysoNG.png",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Pixy Lola",
        img: "KGgriYW.png",
        opts: {
            group: ["Pixy"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Lu",
        img: "oRUu9Sd.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "woo!ah! Lucy",
        img: "zv454tT.jpeg",
        opts: {
            group: ["woo!ah!"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number L\u00e9a",
        img: "Rn9L1Ds.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Lynn",
        img: "XRck39x.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet May",
        img: "ghR9CsQ.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "NeonPunch May",
        img: "9JZTOoZ.jpg",
        opts: {
            group: ["NeonPunch"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Mayu",
        img: "xZ8GY2R.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Everglow Mia",
        img: "q1RJuKZ.jpeg",
        opts: {
            group: ["Everglow"],
            gen: ["gen4"]
        }
    },
    {
        name: "Busters Minji",
        img: "lbUw19z.jpeg",
        opts: {
            group: ["Busters"],
            gen: ["gen4"]
        }
    },
    {
        name: "NewJeans Minji",
        img: "nKWRKR1.jpeg",
        opts: {
            group: ["NewJeans"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Minji",
        img: "xLx3UZd.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Minju",
        img: "Gh3eLd1.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "IZ*ONE Minju",
        img: "P34Syds.png",
        opts: {
            group: ["IZ*ONE"],
            gen: ["gen4"]
        }
    },
    {
        name: "(G)I-dle Minnie",
        img: "uqvtN7Y.jpeg",
        opts: {
            group: ["(G)I-dle"],
            gen: ["gen4"]
        }
    },
    {
        name: "woo!ah! Minseo",
        img: "P0ggpca.jpeg",
        opts: {
            group: ["woo!ah!"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Miso",
        img: "nluCDti.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Miya",
        img: "MDcY9lW.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "(G)I-dle Miyeon",
        img: "XMybvbH.jpeg",
        opts: {
            group: ["(G)I-dle"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Monday",
        img: "74DClxa.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Moon Sua",
        img: "o6DbBam.jpeg",
        opts: {
            group: ["Billlie"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Nagyung",
        img: "pcJXBJb.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "PRIMROSE Nahyun",
        img: "SfQeLB4.jpeg",
        opts: {
            group: ["PRIMROSE"],
            gen: ["gen4"]
        }
    },
    {
        name: "IZ*ONE Nako",
        img: "3Ql89jt.png",
        opts: {
            group: ["IZ*ONE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Busters Nami",
        img: "ElTppB3.jpeg",
        opts: {
            group: ["Busters"],
            gen: ["gen4"]
        }
    },
    {
        name: "woo!ah! Nana",
        img: "NOxaG0l.jpeg",
        opts: {
            group: ["woo!ah!"],
            gen: ["gen4"]
        }
    },
    {
        name: "KISS OF LIFE Natty",
        img: "50ZgPlg.jpeg",
        opts: {
            group: ["KISS OF LIFE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lightsum Nayoung",
        img: "Bp1U0sy.jpeg",
        opts: {
            group: ["Lightsum"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Nayu",
        img: "TBVsFmi.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Nien",
        img: "COSUu0q.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Aespa Ningning",
        img: "zvTRLPD.jpeg",
        opts: {
            group: ["Aespa"],
            gen: ["gen4"]
        }
    },
    {
        name: "X:IN Nizz",
        img: "1yr4Sq7.jpeg",
        opts: {
            group: ["X:IN"],
            gen: ["gen4"]
        }
    },
    {
        name: "X:IN Nova",
        img: "RQEdUqg.jpeg",
        opts: {
            group: ["X:IN"],
            gen: ["gen4"]
        }
    },
    {
        name: "Everglow Onda",
        img: "YLvFG0C.jpeg",
        opts: {
            group: ["Everglow"],
            gen: ["gen4"]
        }
    },
    {
        name: "PRIMROSE Rainie",
        img: "jgSbQGb.jpeg",
        opts: {
            group: ["PRIMROSE"],
            gen: ["gen4"]
        }
    },
    {
        name: "IVE Rei",
        img: "LeIV9kg.jpeg",
        opts: {
            group: ["IVE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Remi",
        img: "ntAGRNP.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "H1-KEY Riina",
        img: "oo8HjWu.jpeg",
        opts: {
            group: ["H1-KEY"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Ririka",
        img: "xaiQNp1.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "CLASS:y Riwon",
        img: "hAbnQAg.jpeg",
        opts: {
            group: ["CLASS:y"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Rona",
        img: "nhfmbG5.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "PRIMROSE Ruby",
        img: "525Veg2.jpeg",
        opts: {
            group: ["PRIMROSE"],
            gen: ["gen4"]
        }
    },
    {
        name: "ITZY Ryujin",
        img: "cowp7cK.jpeg",
        opts: {
            group: ["ITZY"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Saebom",
        img: "Q2vhdMI.png",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Saerom",
        img: "QBUCKpy.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "LE SSERAFIM Sakura",
        img: "eaZ3LVk.jpeg",
        opts: {
            group: ["LE SSERAFIM"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lightsum Sangah",
        img: "lm6Z64C.jpeg",
        opts: {
            group: ["Lightsum"],
            gen: ["gen4"]
        }
    },
    {
        name: "Pixy Satbyeol",
        img: "FM29cSI.jpeg",
        opts: {
            group: ["Pixy"],
            gen: ["gen4"]
        }
    },
    {
        name: "StayC Seeun",
        img: "hjY02PV.jpeg",
        opts: {
            group: ["StayC"],
            gen: ["gen4"]
        }
    },
    {
        name: "Busters Seira",
        img: "U6HwnSs.jpeg",
        opts: {
            group: ["Busters"],
            gen: ["gen4"]
        }
    },
    {
        name: "Sejeong",
        img: "gGQ3xkP.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cignature Seline",
        img: "4sVbU3e.jpeg",
        opts: {
            group: ["Cignature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cignature Semi",
        img: "bVA8iUN.jpeg",
        opts: {
            group: ["Cignature"],
            gen: ["gen4"]
        }
    },
    {
        name: "ADYA Sena",
        img: "O5zdPQi.jpeg",
        opts: {
            group: ["ADYA"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Seoah",
        img: "4OFuCk6.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "H1-KEY Seoi",
        img: "BBgAg9i.jpeg",
        opts: {
            group: ["H1-KEY"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Seokyoung",
        img: "zzBu01U.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "CLASS:y Seonyou",
        img: "X1eCUDn.jpeg",
        opts: {
            group: ["CLASS:y"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Seoryoung",
        img: "BarWRMK.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "ADYA Seowon",
        img: "hiwLteZ.jpeg",
        opts: {
            group: ["ADYA"],
            gen: ["gen4"]
        }
    },
    {
        name: "LAPILLUS Seowon",
        img: "5aqQ0ip.jpeg",
        opts: {
            group: ["LAPILLUS"],
            gen: ["gen4"]
        }
    },
    {
        name: "CSR Seoyeon",
        img: "BH4k8DQ.jpeg",
        opts: {
            group: ["CSR"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Seoyeon",
        img: "Xrfy3lS.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "ADYA Seungchae",
        img: "xOfMwLo.jpeg",
        opts: {
            group: ["ADYA"],
            gen: ["gen4"]
        }
    },
    {
        name: "LAPILLUS Shana",
        img: "r5rXSN7.jpeg",
        opts: {
            group: ["LAPILLUS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Sheon",
        img: "efzCjwA.jpeg",
        opts: {
            group: ["Billlie"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Shin Jiyoon",
        img: "ysrCJoA.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "MAJORS Shinye",
        img: "PT2brQ7.jpeg",
        opts: {
            group: ["MAJORS"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Shion",
        img: "W2fURjd.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "(G)I-dle Shuhua",
        img: "Qdr4R8k.jpeg",
        opts: {
            group: ["(G)I-dle"],
            gen: ["gen4"]
        }
    },
    {
        name: "StayC Sieun",
        img: "h4xvCWjh.jpeg",
        opts: {
            group: ["StayC"],
            gen: ["gen4"]
        }
    },
    {
        name: "CSR Sihyeon",
        img: "ZvnggdK.jpeg",
        opts: {
            group: ["CSR"],
            gen: ["gen4"]
        }
    },
    {
        name: "Everglow Sihyeon",
        img: "zOD1m5o.jpeg",
        opts: {
            group: ["Everglow"],
            gen: ["gen4"]
        }
    },
    {
        name: "Viviz SinB",
        img: "kifYGgw.jpeg",
        opts: {
            group: ["Viviz"],
            gen: ["gen4"]
        }
    },
    {
        name: "H1-KEY Sitala",
        img: "9j3p0sQ.jpeg",
        opts: {
            group: ["H1-KEY"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Siyoon",
        img: "l7LXWvm.jpeg",
        opts: {
            group: ["Billlie"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN SoSo",
        img: "MCxJuQI.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Soeun",
        img: "5VHXXX9.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Sohee",
        img: "S8kogXh.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Rocket Punch Sohee",
        img: "ZLWJdWL.jpeg",
        opts: {
            group: ["Rocket Punch"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Sohyun",
        img: "4lQXPvM.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Somi",
        img: "V7dcQ5T.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "Tri.be SongSun",
        img: "gPXlpkp.png",
        opts: {
            group: ["Tri.be"],
            gen: ["gen4"]
        }
    },
    {
        name: "woo!ah! Songyee",
        img: "jbpJSjX.png",
        opts: {
            group: ["woo!ah!"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Soodam",
        img: "R9IEFX8.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "Soojin",
        img: "OwYItiW.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Soomin",
        img: "w4KaW4K.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "woo!ah! Sora",
        img: "ygA85u6.jpeg",
        opts: {
            group: ["woo!ah!"],
            gen: ["gen4"]
        }
    },
    {
        name: "CSR Sua",
        img: "TW1CvLo.jpeg",
        opts: {
            group: ["CSR"],
            gen: ["gen4"]
        }
    },
    {
        name: "Pixy Sua",
        img: "YaCIUiX.png",
        opts: {
            group: ["Pixy"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Suhyeon",
        img: "N1IvVmO.jpeg",
        opts: {
            group: ["Billlie"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Sullin",
        img: "KfNHX6k.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nmixx Sullyoon",
        img: "ATUN9vV.jpeg",
        opts: {
            group: ["Nmixx"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Sumin",
        img: "43evPlY.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "StayC Sumin",
        img: "sjUiwyZ.jpeg",
        opts: {
            group: ["StayC"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Sunshine",
        img: "AVR69wD.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Rocket Punch Suyun",
        img: "zjSoRLp.jpeg",
        opts: {
            group: ["Rocket Punch"],
            gen: ["gen4"]
        }
    },
    {
        name: "MAJORS Suzy",
        img: "9cpIBr0.jpeg",
        opts: {
            group: ["MAJORS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Craxy Swan",
        img: "GFOiNN4.jpeg",
        opts: {
            group: ["Craxy"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Swan",
        img: "nu2C9mE.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "Suzanne",
        img: "hLLTFI6.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "Busters Takara",
        img: "YI4GXf5.jpeg",
        opts: {
            group: ["Busters"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Tsuki",
        img: "V1YHQTe.jpeg",
        opts: {
            group: ["Billlie"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Uchae",
        img: "uZywcNI.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Viviz Umji",
        img: "wrPp8Cy.jpeg",
        opts: {
            group: ["Viviz"],
            gen: ["gen4"]
        }
    },
    {
        name: "Majors Vita",
        img: "hbKgRJ3.jpeg",
        opts: {
            group: ["Majors"],
            gen: ["gen4"]
        }
    },
    {
        name: "Loossemble Vivi",
        img: "JRJ1z7J.jpeg",
        opts: {
            group: ["Loossemble"],
            gen: ["gen4"]
        }
    },
    {
        name: "Aespa Winter",
        img: "bro8M4B.jpeg",
        opts: {
            group: ["Aespa"],
            gen: ["gen4"]
        }
    },
    {
        name: "IVE Wonyoung",
        img: "JSxUPrt.jpeg",
        opts: {
            group: ["IVE"],
            gen: ["gen4"]
        }
    },
    {
        name: "woo!ah! Wooyeon",
        img: "FDz26jz.jpeg",
        opts: {
            group: ["woo!ah!"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er XiaoTing",
        img: "8rjaFsO.jpeg",
        opts: {
            group: ["Kep1er"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Xinyu",
        img: "JLAVcVe.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "CSR Yeham",
        img: "u4MFGQh.jpeg",
        opts: {
            group: ["CSR"],
            gen: ["gen4"]
        }
    },
    {
        name: "Yena",
        img: "Iu3kw6J.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "ITZY Yeji",
        img: "ibzReCC.jpeg",
        opts: {
            group: ["ITZY"],
            gen: ["gen4"]
        }
    },
    {
        name: "ICHILLIN Yeju",
        img: "A67a31Q.jpeg",
        opts: {
            group: ["ICHILLIN"],
            gen: ["gen4"]
        }
    },
    {
        name: "H1-KEY Yel",
        img: "i5hCOlG.jpeg",
        opts: {
            group: ["H1-KEY"],
            gen: ["gen4"]
        }
    },
    {
        name: "Loossemble Yeojin",
        img: "PxM3e82.jpeg",
        opts: {
            group: ["Loossemble"],
            gen: ["gen4"]
        }
    },
    {
        name: "Rocket Punch Yeonhee",
        img: "pvfUDf0.jpeg",
        opts: {
            group: ["Rocket Punch"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Yeonji",
        img: "NFaoOjS.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "ADYA Yeonsu",
        img: "EFnds4k.jpeg",
        opts: {
            group: ["ADYA"],
            gen: ["gen4"]
        }
    },
    {
        name: "FIFTY FIFTY Yewon",
        img: "59UVp9T.jpg",
        opts: {
            group: ["FIFTY FIFTY"],
            gen: ["gen4"]
        }
    },
    {
        name: "Everglow Yiren",
        img: "p6O67eB.jpeg",
        opts: {
            group: ["Everglow"],
            gen: ["gen4"]
        }
    },
    {
        name: "StayC Yoon",
        img: "nS6rqmb.jpeg",
        opts: {
            group: ["StayC"],
            gen: ["gen4"]
        }
    },
    {
        name: "mimiirose Yoon Jia",
        img: "deltl13.jpeg",
        opts: {
            group: ["mimiirose"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Yoon Seoyeon",
        img: "J1eGsww.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "bugAboo Yoona",
        img: "SxPWVXv.jpeg",
        opts: {
            group: ["bugAboo"],
            gen: ["gen4"]
        }
    },
    {
        name: "UNI.T Yoonjo",
        img: "OdCgmz0.jpeg",
        opts: {
            group: ["UNI.T"],
            gen: ["gen4"]
        }
    },
    {
        name: "Youha",
        img: "NUG0C12.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Youi",
        img: "htfKw3r.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Youngeun",
        img: "vtb2vcE.jpeg",
        opts: {
            group: ["Kep1er"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Yubin",
        img: "acoRcB2.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "LAPILLUS Yue",
        img: "iTtusFS.jpeg",
        opts: {
            group: ["LAPILLUS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lightsum Yujeong",
        img: "2tFf9ls.jpeg",
        opts: {
            group: ["Lightsum"],
            gen: ["gen4"]
        }
    },
    {
        name: "IVE Yujin",
        img: "ZfN6oAF.jpeg",
        opts: {
            group: ["IVE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Yujin",
        img: "dbjKjf0.jpeg",
        opts: {
            group: ["Kep1er"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Yuju",
        img: "7nuHrwk.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Yuki",
        img: "TQUCZcw.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "Yukika",
        img: "b6X2j4j.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "CSR Yuna",
        img: "vTsZn3z.jpeg",
        opts: {
            group: ["CSR"],
            gen: ["gen4"]
        }
    },
    {
        name: "ITZY Yuna",
        img: "Ci4oipF.jpeg",
        opts: {
            group: ["ITZY"],
            gen: ["gen4"]
        }
    },
    {
        name: "LE SSERAFIM Yunjin",
        img: "HWB9vGc.jpeg",
        opts: {
            group: ["LE SSERAFIM"],
            gen: ["gen4"]
        }
    },
    {
        name: "Rocket Punch Yunkyoung",
        img: "PwcvE8N.jpeg",
        opts: {
            group: ["Rocket Punch"],
            gen: ["gen4"]
        }
    },
    {
        name: "(G)I-dle Yuqi",
        img: "0Sv9uJB.jpeg",
        opts: {
            group: ["(G)I-dle"],
            gen: ["gen4"]
        }
    },
    {
        name: "Yves",
        img: "UsZ7cPu.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "bugAboo Zin",
        img: "RDa2WZg.jpeg",
        opts: {
            group: ["bugAboo"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Zoa",
        img: "w5HoXnx.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Zuu",
        img: "9a0eCn2.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "BabyMonster Ahyeon",
        img: "XKlHiO3.jpeg",
        opts: {
            group: ["BabyMonster"],
            gen: ["gen5"]
        }
    },
    {
        name: "Geenius Andamiro",
        img: "TVsNNXN.jpeg",
        opts: {
            group: ["Geenius"],
            gen: ["gen5"]
        }
    },
    {
        name: "Meovv Anna",
        img: "gy90X1U.jpeg",
        opts: {
            group: ["Meovv"],
            gen: ["gen5"]
        }
    },
    {
        name: "ablume Aran",
        img: "6ZZwaiC.jpeg",
        opts: {
            group: ["ablume"],
            gen: ["gen5"]
        }
    },
    {
        name: "BabyMonster Asa",
        img: "Aqoad9q.jpeg",
        opts: {
            group: ["BabyMonster"],
            gen: ["gen5"]
        }
    },
    {
        name: "izna Bang Jeemin",
        img: "lrXlqeL.jpeg",
        opts: {
            group: ["izna"],
            gen: ["gen5"]
        }
    },
    {
        name: "BabyMonster Chiquita",
        img: "9Wka60O.jpeg",
        opts: {
            group: ["BabyMonster"],
            gen: ["gen5"]
        }
    },
    {
        name: "BADVILLAIN Chloe Young",
        img: "YktwAYZ.jpeg",
        opts: {
            group: ["BADVILLAIN"],
            gen: ["gen5"]
        }
    },
    {
        name: "izna Choi Jungeun",
        img: "eCc4XCR.jpeg",
        opts: {
            group: ["izna"],
            gen: ["gen5"]
        }
    },
    {
        name: "QWER Chodan",
        img: "byzu5K7.jpeg",
        opts: {
            group: ["QWER"],
            gen: ["gen5"]
        }
    },
    {
        name: "VIV Dana",
        img: "x3JZ1d7.jpeg",
        opts: {
            group: ["VIV"],
            gen: ["gen5"]
        }
    },
    {
        name: "Young Posse Doeun",
        img: "sjhtlW8.jpeg",
        opts: {
            group: ["Young Posse"],
            gen: ["gen5"]
        }
    },
    {
        name: "Say My Name Dohee",
        img: "xQYEcq8.jpeg",
        opts: {
            group: ["Say My Name"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNIS Elisia",
        img: "n74uqxX.jpeg",
        opts: {
            group: ["UNIS"],
            gen: ["gen5"]
        }
    },
    {
        name: "Meovv Ella",
        img: "xTZ9K3H.jpeg",
        opts: {
            group: ["Meovv"],
            gen: ["gen5"]
        }
    },
    {
        name: "BADVILLAIN Emma",
        img: "5fXc7ST.jpeg",
        opts: {
            group: ["BADVILLAIN"],
            gen: ["gen5"]
        }
    },
    {
        name: "Madein Gaeun",
        img: "xBmyy63.jpeg",
        opts: {
            group: ["Madein"],
            gen: ["gen5"]
        }
    },
    {
        name: "Meovv Gawon",
        img: "1yb5eq4.jpeg",
        opts: {
            group: ["Meovv"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNIS Gehlee",
        img: "qzabbpU.jpeg",
        opts: {
            group: ["UNIS"],
            gen: ["gen5"]
        }
    },
    {
        name: "QWER Hina",
        img: "64zDgy6.jpeg",
        opts: {
            group: ["QWER"],
            gen: ["gen5"]
        }
    },
    {
        name: "Say My Name Hitomi",
        img: "eJ0QzrR.jpg",
        opts: {
            group: ["Say My Name"],
            gen: ["gen5"]
        }
    },
    {
        name: "BADVILLAIN HU'E",
        img: "4UxjVze.jpeg",
        opts: {
            group: ["BADVILLAIN"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNIS Hyeonju",
        img: "kNK5W5m.jpeg",
        opts: {
            group: ["UNIS"],
            gen: ["gen5"]
        }
    },
    {
        name: "VVUP Hyunny",
        img: "F81taPZ.jpeg",
        opts: {
            group: ["VVUP"],
            gen: ["gen5"]
        }
    },
    {
        name: "BADVILLAIN INA",
        img: "kPttwnY.jpeg",
        opts: {
            group: ["BADVILLAIN"],
            gen: ["gen5"]
        }
    },
    {
        name: "ILLIT Iroha",
        img: "O2iiodU.jpeg",
        opts: {
            group: ["ILLIT"],
            gen: ["gen5"]
        }
    },
    {
        name: "izna Jeong Saebi",
        img: "kR87C0a.jpeg",
        opts: {
            group: ["izna"],
            gen: ["gen5"]
        }
    },
    {
        name: "Young Posse Jiana",
        img: "vu2uwu2.jpeg",
        opts: {
            group: ["Young Posse"],
            gen: ["gen5"]
        }
    },
    {
        name: "Young Posse Jieun",
        img: "2vfF0uR.jpeg",
        opts: {
            group: ["Young Posse"],
            gen: ["gen5"]
        }
    },
    {
        name: "Candy Shop Julia",
        img: "5bzRzG7.jpeg",
        opts: {
            group: ["Candy Shop"],
            gen: ["gen5"]
        }
    },
    {
        name: "Say My Name Junhwi",
        img: "7f2bbnA.jpeg",
        opts: {
            group: ["Say My Name"],
            gen: ["gen5"]
        }
    },
    {
        name: "ODD YOUTH Kanie",
        img: "QLlrlYy.jpeg",
        opts: {
            group: ["ODD YOUTH"],
            gen: ["gen5"]
        }
    },
    {
        name: "Say My Name Kanny",
        img: "HXvm8I9.jpeg",
        opts: {
            group: ["Say My Name"],
            gen: ["gen5"]
        }
    },
    {
        name: "BADVILLAIN Kelly",
        img: "1XzISBL.jpeg",
        opts: {
            group: ["BADVILLAIN"],
            gen: ["gen5"]
        }
    },
    {
        name: "VVUP Kim",
        img: "Ef9A4WL.jpeg",
        opts: {
            group: ["VVUP"],
            gen: ["gen5"]
        }
    },
    {
        name: "izna Koko",
        img: "qCkU4bv.jpeg",
        opts: {
            group: ["izna"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNIS Kotoko",
        img: "ySG7Isw.jpeg",
        opts: {
            group: ["UNIS"],
            gen: ["gen5"]
        }
    },
    {
        name: "ReScene Liv",
        img: "ctueVH1.jpeg",
        opts: {
            group: ["ReScene"],
            gen: ["gen5"]
        }
    },
    {
        name: "QWER Magenta",
        img: "RF7hqUU.jpeg",
        opts: {
            group: ["QWER"],
            gen: ["gen5"]
        }
    },
    {
        name: "izna Mai",
        img: "iMvu9cX.jpeg",
        opts: {
            group: ["izna"],
            gen: ["gen5"]
        }
    },
    {
        name: "ODD YOUTH Maika",
        img: "h7ICQMg.jpeg",
        opts: {
            group: ["ODD YOUTH"],
            gen: ["gen5"]
        }
    },
    {
        name: "Madein Mashiro",
        img: "papk1Se.jpeg",
        opts: {
            group: ["Madein"],
            gen: ["gen5"]
        }
    },
    {
        name: "ReScene May",
        img: "nprutA2.jpeg",
        opts: {
            group: ["ReScene"],
            gen: ["gen5"]
        }
    },
    {
        name: "Say My Name Mei",
        img: "TAUkvON.jpeg",
        opts: {
            group: ["Say My Name"],
            gen: ["gen5"]
        }
    },
    {
        name: "Geenius Mika",
        img: "NLrJoKT.jpeg",
        opts: {
            group: ["Geenius"],
            gen: ["gen5"]
        }
    },
    {
        name: "ReScene Minami",
        img: "ilkAKg6.jpeg",
        opts: {
            group: ["ReScene"],
            gen: ["gen5"]
        }
    },
    {
        name: "ILLIT Minju",
        img: "jV8JFNv.jpeg",
        opts: {
            group: ["ILLIT"],
            gen: ["gen5"]
        }
    },
    {
        name: "Madein MiU",
        img: "tfZlT0T.jpeg",
        opts: {
            group: ["Madein"],
            gen: ["gen5"]
        }
    },
    {
        name: "ILLIT Moka",
        img: "fSnBkaO.jpeg",
        opts: {
            group: ["ILLIT"],
            gen: ["gen5"]
        }
    },
    {
        name: "ODD YOUTH Myah",
        img: "4YWsbZi.jpeg",
        opts: {
            group: ["ODD YOUTH"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNIS Nana",
        img: "jW0jc85.jpeg",
        opts: {
            group: ["UNIS"],
            gen: ["gen5"]
        }
    },
    {
        name: "VIV Nagomi",
        img: "ELMicZy.jpeg",
        opts: {
            group: ["VIV"],
            gen: ["gen5"]
        }
    },
    {
        name: "Madein Nagomi",
        img: "fdYG3Nu.jpeg",
        opts: {
            group: ["Madein"],
            gen: ["gen5"]
        }
    },
    {
        name: "Meovv Narin",
        img: "Brh7LMr.jpeg",
        opts: {
            group: ["Meovv"],
            gen: ["gen5"]
        }
    },
    {
        name: "VVUP Paan",
        img: "5UUaTGO.jpeg",
        opts: {
            group: ["VVUP"],
            gen: ["gen5"]
        }
    },
    {
        name: "BabyMonster Pharita",
        img: "xi9WVab.jpeg",
        opts: {
            group: ["BabyMonster"],
            gen: ["gen5"]
        }
    },
    {
        name: "BabyMonster Rami",
        img: "ZoOKOUr.jpeg",
        opts: {
            group: ["BabyMonster"],
            gen: ["gen5"]
        }
    },
    {
        name: "BabyMonster Rora",
        img: "zzlraGp.jpeg",
        opts: {
            group: ["BabyMonster"],
            gen: ["gen5"]
        }
    },
    {
        name: "BabyMonster Ruka",
        img: "vNFlCod.jpeg",
        opts: {
            group: ["BabyMonster"],
            gen: ["gen5"]
        }
    },
    {
        name: "ablume Saena",
        img: "F9NXkOX.jpeg",
        opts: {
            group: ["ablume"],
            gen: ["gen5"]
        }
    },
    {
        name: "izna Ryu Sarang",
        img: "L2cPQZG.jpeg",
        opts: {
            group: ["izna"],
            gen: ["gen5"]
        }
    },
    {
        name: "Candy Shop Sarang",
        img: "zihaQCh.jpeg",
        opts: {
            group: ["Candy Shop"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNIS Seowon",
        img: "2dRek4o.jpeg",
        opts: {
            group: ["UNIS"],
            gen: ["gen5"]
        }
    },
    {
        name: "Madein Serina",
        img: "b4N08bQ.jpeg",
        opts: {
            group: ["Madein"],
            gen: ["gen5"]
        }
    },
    {
        name: "Say My Name Seungjoo",
        img: "wBBrfj7.jpeg",
        opts: {
            group: ["Say My Name"],
            gen: ["gen5"]
        }
    },
    {
        name: "ablume Sio",
        img: "ZkLE6CS.jpeg",
        opts: {
            group: ["ablume"],
            gen: ["gen5"]
        }
    },
    {
        name: "Geenius Sion",
        img: "izovpNH.jpeg",
        opts: {
            group: ["Geenius"],
            gen: ["gen5"]
        }
    },
    {
        name: "QWER Siyeon",
        img: "5Y8ilTb.jpeg",
        opts: {
            group: ["QWER"],
            gen: ["gen5"]
        }
    },
    {
        name: "Say My Name Soha",
        img: "XZHupO8.jpeg",
        opts: {
            group: ["Say My Name"],
            gen: ["gen5"]
        }
    },
    {
        name: "Meovv Sooin",
        img: "JKqDT8n.jpeg",
        opts: {
            group: ["Meovv"],
            gen: ["gen5"]
        }
    },
    {
        name: "Candy Shop Soram",
        img: "qVWIHTZ.jpeg",
        opts: {
            group: ["Candy Shop"],
            gen: ["gen5"]
        }
    },
    {
        name: "Madein Suhye",
        img: "dWG9fhr.jpeg",
        opts: {
            group: ["Madein"],
            gen: ["gen5"]
        }
    },
    {
        name: "Candy Shop Sui",
        img: "E5IWdrm.jpeg",
        opts: {
            group: ["Candy Shop"],
            gen: ["gen5"]
        }
    },
    {
        name: "ODD YOUTH Summer",
        img: "E1QMhky.jpeg",
        opts: {
            group: ["ODD YOUTH"],
            gen: ["gen5"]
        }
    },
    {
        name: "Young Posse Sunhye",
        img: "ivHMDzu.jpeg",
        opts: {
            group: ["Young Posse"],
            gen: ["gen5"]
        }
    },
    {
        name: "VVUP Suyeon",
        img: "NP9C2oA.jpeg",
        opts: {
            group: ["VVUP"],
            gen: ["gen5"]
        }
    },
    {
        name: "VIV Tzuling",
        img: "30HE2FP.jpeg",
        opts: {
            group: ["VIV"],
            gen: ["gen5"]
        }
    },
    {
        name: "VIV Vella",
        img: "VR7pFZ5.jpeg",
        opts: {
            group: ["VIV"],
            gen: ["gen5"]
        }
    },
    {
        name: "BADVILLAIN Vin",
        img: "4Lk2HsR.jpeg",
        opts: {
            group: ["BADVILLAIN"],
            gen: ["gen5"]
        }
    },
    {
        name: "ILLIT Wonhee",
        img: "jN3lEmf.jpeg",
        opts: {
            group: ["ILLIT"],
            gen: ["gen5"]
        }
    },
    {
        name: "ReScene Woni",
        img: "TWsIto8.jpeg",
        opts: {
            group: ["ReScene"],
            gen: ["gen5"]
        }
    },
    {
        name: "Craxy Wooah",
        img: "RCo9ann.jpeg",
        opts: {
            group: ["Craxy"],
            gen: ["gen4"]
        }
    },
    {
        name: "ODD YOUTH Yeeum",
        img: "ywJYemq.jpeg",
        opts: {
            group: ["ODD YOUTH"],
            gen: ["gen5"]
        }
    },
    {
        name: "Young Posse Yeonjung",
        img: "MPX7ABN.jpeg",
        opts: {
            group: ["Young Posse"],
            gen: ["gen5"]
        }
    },
    {
        name: "Madein Yeseo",
        img: "kTKOSIk.jpeg",
        opts: {
            group: ["Madein"],
            gen: ["gen5"]
        }
    },
    {
        name: "Geenius Yeyoung",
        img: "1aDkGZf.jpeg",
        opts: {
            group: ["Geenius"],
            gen: ["gen5"]
        }
    },
    {
        name: "izna Yoon Jiyoon",
        img: "6Nf7aXZ.jpeg",
        opts: {
            group: ["izna"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNIS Yoona",
        img: "PE45OpG.jpeg",
        opts: {
            group: ["UNIS"],
            gen: ["gen5"]
        }
    },
    {
        name: "Candy Shop Yuina",
        img: "4dpADmt.jpeg",
        opts: {
            group: ["Candy Shop"],
            gen: ["gen5"]
        }
    },
    {
        name: "ILLIT Yunah",
        img: "YHzVLzj.jpeg",
        opts: {
            group: ["ILLIT"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNIS Yunha",
        img: "h3vMhjE.jpeg",
        opts: {
            group: ["UNIS"],
            gen: ["gen5"]
        }
    },
    {
        name: "BADVILLAIN YunSeo",
        img: "7nZqfso.jpeg",
        opts: {
            group: ["BADVILLAIN"],
            gen: ["gen5"]
        }
    },
    {
        name: "VIV Yume",
        img: "8Atm03E.jpeg",
        opts: {
            group: ["VIV"],
            gen: ["gen5"]
        }
    },
    {
        name: "ReScene Zena",
        img: "2WmOniX.jpeg",
        opts: {
            group: ["ReScene"],
            gen: ["gen5"]
        }
    },
    {
        name: "Geenius Zoe",
        img: "gzdWQ6d.jpeg",
        opts: {
            group: ["Geenius"],
            gen: ["gen5"]
        }
    },
    {
        name: "Aespa",
        img: "yz79upl.jpeg",
        opts: {
            group_label: ["ablume"],
        }
    },
    {
        name: "ARTMS",
        img: "ZvON3g2.png",
        opts: {
            group_label: ["BabyMonster"],
        }
    },
    {
        name: "ablume",
        img: "4smyYVB.jpeg",
        opts: {
            group_label: ["ablume"],
        }
    },
    {
        name: "BabyMonster",
        img: "XrrDeMH.png",
        opts: {
            group_label: ["BabyMonster"],
        }
    },
    {
        name: "BADVILLAIN",
        img: "6PSxBIv.jpeg",
        opts: {
            group_label: ["BADVILLAIN"],
        }
    },
    {
        name: "Candy Shop",
        img: "ulBD9ON.jpeg",
        opts: {
            group_label: ["Candy Shop"],
        }
    },
    {
        name: "Geenius",
        img: "NmKeGL9.jpeg",
        opts: {
            group_label: ["Geenius"],
        }
    },
    {
        name: "ILLIT",
        img: "jNg3i4u.jpeg",
        opts: {
            group_label: ["ILLIT"],
        }
    },
    {
        name: "izna",
        img: "gieU0Qx.jpeg",
        opts: {
            group_label: ["izna"],
        }
    },
    {
        name: "Madein",
        img: "DU92z7x.jpeg",
        opts: {
            group_label: ["Madein"],
        }
    },
    {
        name: "Meovv",
        img: "utHdd5X.jpeg",
        opts: {
            group_label: ["Meovv"],
        }
    },
    {
        name: "ODD YOUTH",
        img: "7kQ74Ax.jpeg",
        opts: {
            group_label: ["ODD YOUTH"],
        }
    },
    {
        name: "ReScene",
        img: "GTMSQdL.jpeg",
        opts: {
            group_label: ["ReScene"],
        }
    },
    {
        name: "QWER",
        img: "XfPJ2nC.jpeg",
        opts: {
            group_label: ["QWER"],
        }
    },
    {
        name: "Say My Name",
        img: "0Hto3j4.jpeg",
        opts: {
            group_label: ["Say My Name"],
        }
    },
    {
        name: "StayC",
        img: "j5X81dY.jpeg",
        opts: {
            group_label: ["StayC"],
        }
    },
    {
        name: "tripleS",
        img: "mhqRJna.jpeg",
        opts: {
            group_label: ["tripleS"],
        }
    },
    {
        name: "UNIS",
        img: "hUKLrpM.jpeg",
        opts: {
            group_label: ["UNIS"],
        }
    },
    {
        name: "VIV",
        img: "kDCwXcw.jpeg",
        opts: {
            group_label: ["VIV"],
        }
    },
    {
        name: "Viviz",
        img: "CAbbKya.jpeg",
        opts: {
            group_label: ["Viviz"],
        }
    },
    {
        name: "VVUP",
        img: "6gpbpRL.jpeg",
        opts: {
            group_label: ["VVUP"],
        }
    },
    {
        name: "woo!ah!",
        img: "TlzFJLq.jpeg",
        opts: {
            group_label: ["woo!ah!"],
        }
    },
    {
        name: "X:IN",
        img: "5YZj7BY.jpeg",
        opts: {
            group_label: ["X:IN"],
        }
    },
    {
        name: "Young Posse",
        img: "UlWnr34.jpeg",
        opts: {
            group_label: ["Young Posse"],
        }
    },
];
