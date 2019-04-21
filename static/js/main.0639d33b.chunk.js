(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(n,e,a){n.exports=a(18)},17:function(n,e,a){},18:function(n,e,a){"use strict";a.r(e);var t=a(0),o=a.n(t),r=a(9),i=a.n(r),l=a(1),s=a(2),u=a(3),c=a(5),h=a(4),g=a(6),p=(a(17),a(7),function(n){function e(){var n,a;Object(s.a)(this,e);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(n=Object(h.a)(e)).call.apply(n,[this].concat(o)))).state={},a.highlightSort=function(n){return a.props.options.sort===n?"buttonSort highlighted":"buttonSort notHighlighted"},a.highlightToggle=function(n){return n?"buttonSort highlighted":"buttonSort notHighlighted"},a}return Object(g.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this;return o.a.createElement("div",{className:"Options"},o.a.createElement("div",{className:"Box"},o.a.createElement("div",{className:"OptionsHeader"},"Sort By"),o.a.createElement("button",{className:this.highlightSort("cp20"),onClick:function(){return n.props.changeSort("cp20")}},"CP @ 20"),o.a.createElement("br",null),o.a.createElement("button",{className:this.highlightSort("cp25"),onClick:function(){return n.props.changeSort("cp25")}},"CP @ 25"),o.a.createElement("br",null),o.a.createElement("button",{className:this.highlightSort("iv"),onClick:function(){return n.props.changeSort("iv")}},"IV")),o.a.createElement("div",{className:"Box"},o.a.createElement("div",{className:"OptionsHeader"},"Toggle"),o.a.createElement("button",{className:this.highlightToggle(this.props.options.toggle.nundo),onClick:this.props.toggleNundo},"Nundo (66.7%)"),o.a.createElement("button",{className:this.highlightToggle(this.props.options.toggle.lvl15),onClick:this.props.toggleLvl15},"Level 15"),o.a.createElement("button",{className:this.highlightToggle(this.props.options.toggle.under90),onClick:this.props.toggleUnder90},"Under 90%")))}}]),e}(t.Component)),m=a(10),d=function(n){function e(){var n,a;Object(s.a)(this,e);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(n=Object(h.a)(e)).call.apply(n,[this].concat(o)))).getRowClass=function(n){var e=0;return"100.0"===n[e=a.props.options.toggle.lvl15?6:4]?"hundo":{97.8:"ninetyEight",95.6:"ninetySix",93.3:"ninetyThree",91.1:"ninetyOne",100:"hundo",66.7:"nundo"}[n[e]]},a.sortFunction=function(n,e){var t={cp20:0,cp25:2,iv:4}[a.props.options.sort];return a.props.options.toggle.lvl15&&(t+=2),parseFloat(n[t])===parseFloat(e[t])?parseFloat(n[t+4])===parseFloat(e[t+4])?0:parseFloat(n[t+4])>parseFloat(e[t+4])?-1:1:parseFloat(n[t])>parseFloat(e[t])?-1:1},a}return Object(g.a)(e,n),Object(u.a)(e,[{key:"drawTable",value:function(){var n=this,e=Object(m.a)(this.props.stats),a=[],t=[],r=["CP@15","HP@15","CP@20","HP@20","CP@25","HP@25","IV%","ATK","DEF","STA","CP@40","HP@40"];if(this.props.options.toggle.under90)a=e;else for(var i=0;i<e.length;i++)e[i][6]>90&&a.push(e[i]),i===e.length-1&&this.props.options.toggle.nundo&&a.push(e[i]);if(this.props.options.toggle.lvl15)t=a;else for(r.shift(),r.shift(),i=0;i<a.length;i++)t.push(a[i].slice(2,a[i].length));return t.sort(this.sortFunction),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,r.map(function(n){return o.a.createElement("th",{key:n},n)}))),o.a.createElement("tbody",null,t.map(function(e){return o.a.createElement("tr",{className:n.getRowClass(e)},e.map(function(n){return o.a.createElement("td",null,n)}))})))}},{key:"render",value:function(){return o.a.createElement("div",{className:"Table"},this.drawTable())}}]),e}(t.Component),S=function(n){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("input",{value:this.props.search.text,onChange:this.props.onTextChanged,type:"text"}))}}]),e}(t.Component),y="Bulbasaur\nIvysaur\nVenusaur\nCharmander\nCharmeleon\nCharizard\nSquirtle\nWartortle\nBlastoise\nCaterpie\nMetapod\nButterfree\nWeedle\nKakuna\nBeedrill\nPidgey\nPidgeotto\nPidgeot\nRattata\nRattata-A\nRaticate\nRaticate-A\nSpearow\nFearow\nEkans\nArbok\nPikachu\nRaichu\nRaichu-A\nSandshrew\nSandshrew-A\nSandslash\nSandslash-A\nNidoran\nNidorina\nNidoqueen\nNidoran\nNidorino\nNidoking\nClefairy\nClefable\nVulpix\nVulpix-A\nNinetales\nNinetales-A\nJigglypuff\nWigglytuff\nZubat\nGolbat\nOddish\nGloom\nVileplume\nParas\nParasect\nVenonat\nVenomoth\nDiglett\nDiglett-A\nDugtrio\nDugtrio-A\nMeowth\nMeowth\nPersian\nPersian\nPsyduck\nGolduck\nMankey\nPrimeape\nGrowlithe\nArcanine\nPoliwag\nPoliwhirl\nPoliwrath\nAbra\nKadabra\nAlakazam\nMachop\nMachoke\nMachamp\nBellsprout\nWeepinbell\nVictreebel\nTentacool\nTentacruel\nGeodude\nGeodude-A\nGraveler\nGraveler-A\nGolem\nGolem-A\nPonyta\nRapidash\nSlowpoke\nSlowbro\nMagnemite\nMagneton\nFarfetchd\nDoduo\nDodrio\nSeel\nDewgong\nGrimer\nGrimer\nMuk\nMuk\nShellder\nCloyster\nGastly\nHaunter\nGengar\nOnix\nDrowzee\nHypno\nKrabby\nKingler\nVoltorb\nElectrode\nExeggcute\nExeggutor\nExeggutor-A\nCubone\nMarowak\nMarowak\nHitmonlee\nHitmonchan\nLickitung\nKoffing\nWeezing\nRhyhorn\nRhydon\nChansey\nTangela\nKangaskhan\nHorsea\nSeadra\nGoldeen\nSeaking\nStaryu\nStarmie\nMr. Mime\nScyther\nJynx\nElectabuzz\nMagmar\nPinsir\nTauros\nMagikarp\nGyarados\nLapras\nDitto\nEevee\nVaporeon\nJolteon\nFlareon\nPorygon\nOmanyte\nOmastar\nKabuto\nKabutops\nAerodactyl\nSnorlax\nArticuno\nZapdos\nMoltres\nDratini\nDragonair\nDragonite\nMewtwo\nMew\nChikorita\nBayleef\nMeganium\nCyndaquil\nQuilava\nTyphlosion\nTotodile\nCroconaw\nFeraligatr\nSentret\nFurret\nHoothoot\nNoctowl\nLedyba\nLedian\nSpinarak\nAriados\nCrobat\nChinchou\nLanturn\nPichu\nCleffa\nIgglybuff\nTogepi\nTogetic\nNatu\nXatu\nMareep\nFlaaffy\nAmpharos\nBellossom\nMarill\nAzumarill\nSudowoodo\nPolitoed\nHoppip\nSkiploom\nJumpluff\nAipom\nSunkern\nSunflora\nYanma\nWooper\nQuagsire\nEspeon\nUmbreon\nMurkrow\nSlowking\nMisdreavus\nUnown\nWobbuffet\nGirafarig\nPineco\nForretress\nDunsparce\nGligar\nSteelix\nSnubbull\nGranbull\nQwilfish\nScizor\nShuckle\nHeracross\nSneasel\nTeddiursa\nUrsaring\nSlugma\nMagcargo\nSwinub\nPiloswine\nCorsola\nRemoraid\nOctillery\nDelibird\nMantine\nSkarmory\nHoundour\nHoundoom\nKingdra\nPhanpy\nDonphan\nPorygon2\nStantler\nSmeargle\nTyrogue\nHitmontop\nSmoochum\nElekid\nMagby\nMiltank\nBlissey\nRaikou\nEntei\nSuicune\nLarvitar\nPupitar\nTyranitar\nLugia\nHo-Oh\nCelebi\nTreecko\nGrovyle\nSceptile\nTorchic\nCombusken\nBlaziken\nMudkip\nMarshtomp\nSwampert\nPoochyena\nMightyena\nZigzagoon\nLinoone\nWurmple\nSilcoon\nBeautifly\nCascoon\nDustox\nLotad\nLombre\nLudicolo\nSeedot\nNuzleaf\nShiftry\nTaillow\nSwellow\nWingull\nPelipper\nRalts\nKirlia\nGardevoir\nSurskit\nMasquerain\nShroomish\nBreloom\nSlakoth\nVigoroth\nSlaking\nNincada\nNinjask\nShedinja\nWhismur\nLoudred\nExploud\nMakuhita\nHariyama\nAzurill\nNosepass\nSkitty\nDelcatty\nSableye\nMawile\nAron\nLairon\nAggron\nMeditite\nMedicham\nElectrike\nManectric\nPlusle\nMinun\nVolbeat\nIllumise\nRoselia\nGulpin\nSwalot\nCarvanha\nSharpedo\nWailmer\nWailord\nNumel\nCamerupt\nTorkoal\nSpoink\nGrumpig\nSpinda\nTrapinch\nVibrava\nFlygon\nCacnea\nCacturne\nSwablu\nAltaria\nZangoose\nSeviper\nLunatone\nSolrock\nBarboach\nWhiscash\nCorphish\nCrawdaunt\nBaltoy\nClaydol\nLileep\nCradily\nAnorith\nArmaldo\nFeebas\nMilotic\nCastform\nCastform\nCastform\nCastform\nKecleon\nShuppet\nBanette\nDuskull\nDusclops\nTropius\nChimecho\nAbsol\nWynaut\nSnorunt\nGlalie\nSpheal\nSealeo\nWalrein\nClamperl\nHuntail\nGorebyss\nRelicanth\nLuvdisc\nBagon\nShelgon\nSalamence\nBeldum\nMetang\nMetagross\nRegirock\nRegice\nRegisteel\nLatias\nLatios\nKyogre\nGroudon\nRayquaza\nJirachi\nDeoxys\nDeoxys-Attack\nDeoxys-Defense\nDeoxys-Speed\nTurtwig\nGrotle\nTorterra\nChimchar\nMonferno\nInfernape\nPiplup\nPrinplup\nEmpoleon\nStarly\nStaravia\nStaraptor\nBidoof\nBibarel\nKricketot\nKricketune\nShinx\nLuxio\nLuxray\nBudew\nRoserade\nCranidos\nRampardos\nShieldon\nBastiodon\nBurmy\nBurmy\nBurmy\nWormadam\nWormadam\nWormadam\nMothim\nCombee\nVespiquen\nPachirisu\nBuizel\nFloatzel\nCherubi\nCherrim\nCherrim\nShellos\nShellos\nGastrodon\nGastrodon\nAmbipom\nDrifloon\nDrifblim\nBuneary\nLopunny\nMismagius\nHonchkrow\nGlameow\nPurugly\nChingling\nStunky\nSkuntank\nBronzor\nBronzong\nBonsly\nMime Jr.\nHappiny\nChatot\nSpiritomb\nGible\nGabite\nGarchomp\nMunchlax\nRiolu\nLucario\nHippopotas\nHippowdon\nSkorupi\nDrapion\nCroagunk\nToxicroak\nCarnivine\nFinneon\nLumineon\nMantyke\nSnover\nAbomasnow\nWeavile\nMagnezone\nLickilicky\nRhyperior\nTangrowth\nElectivire\nMagmortar\nTogekiss\nYanmega\nLeafeon\nGlaceon\nGliscor\nMamoswine\nPorygon-Z\nGallade\nProbopass\nDusknoir\nFroslass\nRotom\nRotom\nRotom\nRotom\nRotom\nRotom\nUxie\nMesprit\nAzelf\nDialga\nPalkia\nHeatran\nRegigigas\nGiratina-Altered\nGiratina-Origin\nCresselia\nPhione\nManaphy\nDarkrai\nShaymin\nShaymin\nArceus\nMeltan\nMelmetal".split("\n"),b="Bulbasaur,118,111,128\nIvysaur,151,143,155\nVenusaur,198,189,190\nCharmander,116,93,118\nCharmeleon,158,126,151\nCharizard,223,173,186\nSquirtle,94,121,127\nWartortle,126,155,153\nBlastoise,171,207,188\nCaterpie,55,55,128\nMetapod,45,80,137\nButterfree,167,137,155\nWeedle,63,50,120\nKakuna,46,75,128\nBeedrill,169,130,163\nPidgey,85,73,120\nPidgeotto,117,105,160\nPidgeot,166,154,195\nRattata,103,70,102\nRattata-A,103,70,102\nRaticate,161,139,146\nRaticate-A,135,154,181\nSpearow,112,60,120\nFearow,182,133,163\nEkans,110,97,111\nArbok,167,153,155\nPikachu,112,96,111\nRaichu,193,151,155\nRaichu-A,201,154,155\nSandshrew,126,120,137\nSandshrew-A,125,129,137\nSandslash,182,175,181\nSandslash-A,177,195,181\nNidoran,86,89,146\nNidorina,117,120,172\nNidoqueen,180,173,207\nNidoran,105,76,130\nNidorino,137,111,156\nNidoking,204,156,191\nClefairy,107,108,172\nClefable,178,162,216\nVulpix,96,109,116\nVulpix-A,96,109,116\nNinetales,169,190,177\nNinetales-A,170,193,177\nJigglypuff,80,41,251\nWigglytuff,156,90,295\nZubat,83,73,120\nGolbat,161,150,181\nOddish,131,112,128\nGloom,153,136,155\nVileplume,202,167,181\nParas,121,99,111\nParasect,165,146,155\nVenonat,100,100,155\nVenomoth,179,143,172\nDiglett,109,78,67\nDiglett-A,108,81,67\nDugtrio,167,134,111\nDugtrio-A,201,142,111\nMeowth,92,78,120\nMeowth,99,78,120\nPersian,150,136,163\nPersian,158,136,163\nPsyduck,122,95,137\nGolduck,191,162,190\nMankey,148,82,120\nPrimeape,207,138,163\nGrowlithe,136,93,146\nArcanine,227,166,207\nPoliwag,101,82,120\nPoliwhirl,130,123,163\nPoliwrath,182,184,207\nAbra,195,82,93\nKadabra,232,117,120\nAlakazam,271,167,146\nMachop,137,82,172\nMachoke,177,125,190\nMachamp,234,159,207\nBellsprout,139,61,137\nWeepinbell,172,92,163\nVictreebel,207,135,190\nTentacool,97,149,120\nTentacruel,166,209,190\nGeodude,132,132,120\nGeodude-A,132,132,120\nGraveler,164,164,146\nGraveler-A,164,164,146\nGolem,211,198,190\nGolem-A,211,198,190\nPonyta,170,127,137\nRapidash,207,162,163\nSlowpoke,109,98,207\nSlowbro,177,180,216\nMagnemite,165,121,93\nMagneton,223,169,137\nFarfetchd,124,115,141\nDoduo,158,83,111\nDodrio,218,140,155\nSeel,85,121,163\nDewgong,139,177,207\nGrimer,135,90,190\nGrimer,135,90,190\nMuk,190,172,233\nMuk,190,172,233\nShellder,116,134,102\nCloyster,186,256,137\nGastly,186,67,102\nHaunter,223,107,128\nGengar,261,149,155\nOnix,85,232,111\nDrowzee,89,136,155\nHypno,144,193,198\nKrabby,181,124,102\nKingler,240,181,146\nVoltorb,109,111,120\nElectrode,173,173,155\nExeggcute,107,125,155\nExeggutor,233,149,216\nExeggutor-A,230,153,216\nCubone,90,144,137\nMarowak,144,186,155\nMarowak,144,186,155\nHitmonlee,224,181,137\nHitmonchan,193,197,137\nLickitung,108,137,207\nKoffing,119,141,120\nWeezing,174,197,163\nRhyhorn,140,127,190\nRhydon,222,171,233\nChansey,60,128,487\nTangela,183,169,163\nKangaskhan,181,165,233\nHorsea,129,103,102\nSeadra,187,156,146\nGoldeen,123,110,128\nSeaking,175,147,190\nStaryu,137,112,102\nStarmie,210,184,155\nMr. Mime,192,205,120\nScyther,218,170,172\nJynx,223,151,163\nElectabuzz,198,158,163\nMagmar,206,154,163\nPinsir,238,182,163\nTauros,198,183,181\nMagikarp,29,85,85\nGyarados,237,186,216\nLapras,165,174,277\nDitto,91,91,134\nEevee,104,114,146\nVaporeon,205,161,277\nJolteon,232,182,163\nFlareon,246,179,163\nPorygon,153,136,163\nOmanyte,155,153,111\nOmastar,207,201,172\nKabuto,148,140,102\nKabutops,220,186,155\nAerodactyl,221,159,190\nSnorlax,190,169,330\nArticuno,192,236,207\nZapdos,253,185,207\nMoltres,251,181,207\nDratini,119,91,121\nDragonair,163,135,156\nDragonite,263,198,209\nMewtwo,300,182,214\nMew,210,210,225\nChikorita,92,122,128\nBayleef,122,155,155\nMeganium,168,202,190\nCyndaquil,116,93,118\nQuilava,158,126,151\nTyphlosion,223,173,186\nTotodile,117,109,137\nCroconaw,150,142,163\nFeraligatr,205,188,198\nSentret,79,73,111\nFurret,148,125,198\nHoothoot,67,88,155\nNoctowl,145,156,225\nLedyba,72,118,120\nLedian,107,179,146\nSpinarak,105,73,120\nAriados,161,124,172\nCrobat,194,178,198\nChinchou,106,97,181\nLanturn,146,137,268\nPichu,77,53,85\nCleffa,75,79,137\nIgglybuff,69,32,207\nTogepi,67,116,111\nTogetic,139,181,146\nNatu,134,89,120\nXatu,192,146,163\nMareep,114,79,146\nFlaaffy,145,109,172\nAmpharos,211,169,207\nBellossom,169,186,181\nMarill,37,93,172\nAzumarill,112,152,225\nSudowoodo,167,176,172\nPolitoed,174,179,207\nHoppip,67,94,111\nSkiploom,91,120,146\nJumpluff,118,183,181\nAipom,136,112,146\nSunkern,55,55,102\nSunflora,185,135,181\nYanma,154,94,163\nWooper,75,66,146\nQuagsire,152,143,216\nEspeon,261,175,163\nUmbreon,126,240,216\nMurkrow,175,87,155\nSlowking,177,180,216\nMisdreavus,167,154,155\nUnown,136,91,134\nWobbuffet,60,106,382\nGirafarig,182,133,172\nPineco,108,122,137\nForretress,161,205,181\nDunsparce,131,128,225\nGligar,143,184,163\nSteelix,148,272,181\nSnubbull,137,85,155\nGranbull,212,131,207\nQwilfish,184,138,163\nScizor,236,181,172\nShuckle,17,396,85\nHeracross,234,179,190\nSneasel,189,146,146\nTeddiursa,142,93,155\nUrsaring,236,144,207\nSlugma,118,71,120\nMagcargo,139,191,137\nSwinub,90,69,137\nPiloswine,181,138,225\nCorsola,118,156,146\nRemoraid,127,69,111\nOctillery,197,141,181\nDelibird,128,90,128\nMantine,148,226,163\nSkarmory,148,226,163\nHoundour,152,83,128\nHoundoom,224,144,181\nKingdra,194,194,181\nPhanpy,107,98,207\nDonphan,214,185,207\nPorygon2,198,180,198\nStantler,192,131,177\nSmeargle,40,83,146\nTyrogue,64,64,111\nHitmontop,173,207,137\nSmoochum,153,91,128\nElekid,135,101,128\nMagby,151,99,128\nMiltank,157,193,216\nBlissey,129,169,496\nRaikou,241,195,207\nEntei,235,171,251\nSuicune,180,235,225\nLarvitar,115,93,137\nPupitar,155,133,172\nTyranitar,251,207,225\nLugia,193,310,235\nHo-Oh,239,244,214\nCelebi,210,210,225\nTreecko,124,94,120\nGrovyle,172,120,137\nSceptile,223,169,172\nTorchic,130,87,128\nCombusken,163,115,155\nBlaziken,240,141,190\nMudkip,126,93,137\nMarshtomp,156,133,172\nSwampert,208,175,225\nPoochyena,96,61,111\nMightyena,171,132,172\nZigzagoon,58,80,116\nLinoone,142,128,186\nWurmple,75,59,128\nSilcoon,60,77,137\nBeautifly,189,98,155\nCascoon,60,77,137\nDustox,98,162,155\nLotad,71,77,120\nLombre,112,119,155\nLudicolo,173,176,190\nSeedot,71,77,120\nNuzleaf,134,78,172\nShiftry,200,121,207\nTaillow,106,61,120\nSwellow,185,124,155\nWingull,106,61,120\nPelipper,175,174,155\nRalts,79,59,99\nKirlia,117,90,116\nGardevoir,237,195,169\nSurskit,93,87,120\nMasquerain,192,150,172\nShroomish,74,110,155\nBreloom,241,144,155\nSlakoth,104,92,155\nVigoroth,159,145,190\nSlaking,290,166,284\nNincada,80,126,104\nNinjask,199,112,156\nShedinja,153,73,1\nWhismur,92,42,162\nLoudred,134,81,197\nExploud,179,137,232\nMakuhita,99,54,176\nHariyama,209,114,302\nAzurill,36,71,137\nNosepass,82,215,102\nSkitty,84,79,137\nDelcatty,132,127,172\nSableye,141,136,137\nMawile,155,141,137\nAron,121,141,137\nLairon,158,198,155\nAggron,198,257,172\nMeditite,78,107,102\nMedicham,121,152,155\nElectrike,123,78,120\nManectric,215,127,172\nPlusle,167,129,155\nMinun,147,150,155\nVolbeat,143,166,163\nIllumise,143,166,163\nRoselia,186,131,137\nGulpin,80,99,172\nSwalot,140,159,225\nCarvanha,171,39,128\nSharpedo,243,83,172\nWailmer,136,68,277\nWailord,175,87,347\nNumel,119,79,155\nCamerupt,194,136,172\nTorkoal,151,203,172\nSpoink,125,122,155\nGrumpig,171,188,190\nSpinda,116,116,155\nTrapinch,162,78,128\nVibrava,134,99,137\nFlygon,205,168,190\nCacnea,156,74,137\nCacturne,221,115,172\nSwablu,76,132,128\nAltaria,141,201,181\nZangoose,222,124,177\nSeviper,196,118,177\nLunatone,178,153,207\nSolrock,178,153,207\nBarboach,93,82,137\nWhiscash,151,141,242\nCorphish,141,99,125\nCrawdaunt,224,142,160\nBaltoy,77,124,120\nClaydol,140,229,155\nLileep,105,150,165\nCradily,152,194,200\nAnorith,176,100,128\nArmaldo,222,174,181\nFeebas,29,85,85\nMilotic,192,219,216\nCastform,139,139,172\nCastform,139,139,172\nCastform,139,139,172\nCastform,139,139,172\nKecleon,161,189,155\nShuppet,138,65,127\nBanette,218,126,162\nDuskull,70,162,85\nDusclops,124,234,120\nTropius,136,163,223\nChimecho,175,170,181\nAbsol,246,120,163\nWynaut,41,86,216\nSnorunt,95,95,137\nGlalie,162,162,190\nSpheal,95,90,172\nSealeo,137,132,207\nWalrein,182,176,242\nClamperl,133,135,111\nHuntail,197,179,146\nGorebyss,211,179,146\nRelicanth,162,203,225\nLuvdisc,81,128,125\nBagon,134,93,128\nShelgon,172,155,163\nSalamence,277,168,216\nBeldum,96,132,120\nMetang,138,176,155\nMetagross,257,228,190\nRegirock,179,309,190\nRegice,179,309,190\nRegisteel,143,285,190\nLatias,228,246,190\nLatios,268,212,190\nKyogre,270,228,205\nGroudon,270,228,205\nRayquaza,284,170,213\nJirachi,210,210,225\nDeoxys,345,115,137\nDeoxys-Attack,414,46,137\nDeoxys-Defense,144,330,137\nDeoxys-Speed,230,218,137\nTurtwig,119,110,146\nGrotle,157,143,181\nTorterra,202,188,216\nChimchar,113,86,127\nMonferno,158,105,162\nInfernape,222,151,183\nPiplup,112,102,142\nPrinplup,150,139,162\nEmpoleon,210,186,197\nStarly,101,58,120\nStaravia,142,94,146\nStaraptor,234,140,198\nBidoof,80,73,153\nBibarel,162,119,188\nKricketot,45,74,114\nKricketune,160,100,184\nShinx,117,64,128\nLuxio,159,95,155\nLuxray,232,156,190\nBudew,91,109,120\nRoserade,243,185,155\nCranidos,218,71,167\nRampardos,295,109,219\nShieldon,76,195,102\nBastiodon,94,286,155\nBurmy,53,83,120\nBurmy,53,83,120\nBurmy,53,83,120\nWormadam,141,180,155\nWormadam,141,180,155\nWormadam,127,175,155\nMothim,185,98,172\nCombee,59,83,102\nVespiquen,149,190,172\nPachirisu,94,172,155\nBuizel,132,67,146\nFloatzel,221,114,198\nCherubi,108,92,128\nCherrim,170,153,172\nCherrim,170,153,172\nShellos,103,105,183\nShellos,103,105,183\nGastrodon,169,143,244\nGastrodon,169,143,244\nAmbipom,205,143,181\nDrifloon,117,80,207\nDrifblim,180,102,312\nBuneary,130,105,146\nLopunny,156,194,163\nMismagius,211,187,155\nHonchkrow,243,103,225\nGlameow,109,82,135\nPurugly,172,133,174\nChingling,114,94,128\nStunky,121,90,160\nSkuntank,184,132,230\nBronzor,43,154,149\nBronzong,161,213,167\nBonsly,124,133,137\nMime Jr.,125,142,85\nHappiny,25,77,225\nChatot,183,91,183\nSpiritomb,169,199,137\nGible,124,84,151\nGabite,172,125,169\nGarchomp,261,193,239\nMunchlax,137,117,286\nRiolu,127,78,120\nLucario,236,144,172\nHippopotas,124,118,169\nHippowdon,201,191,239\nSkorupi,93,151,120\nDrapion,180,202,172\nCroagunk,116,76,134\nToxicroak,211,133,195\nCarnivine,187,136,179\nFinneon,96,116,135\nLumineon,142,170,170\nMantyke,105,179,128\nSnover,115,105,155\nAbomasnow,178,158,207\nWeavile,243,171,172\nMagnezone,238,205,172\nLickilicky,161,181,242\nRhyperior,241,190,251\nTangrowth,207,184,225\nElectivire,249,163,181\nMagmortar,247,172,181\nTogekiss,225,217,198\nYanmega,231,156,200\nLeafeon,216,219,163\nGlaceon,238,205,163\nGliscor,185,222,181\nMamoswine,247,146,242\nPorygon-Z,264,150,198\nGallade,237,195,169\nProbopass,135,275,155\nDusknoir,180,254,128\nFroslass,171,150,172\nRotom,185,159,137\nRotom,204,219,137\nRotom,204,219,137\nRotom,204,219,137\nRotom,204,219,137\nRotom,204,219,137\nUxie,156,270,181\nMesprit,212,212,190\nAzelf,270,151,181\nDialga,275,211,205\nPalkia,280,215,189\nHeatran,251,213,209\nRegigigas,287,210,221\nGiratina-Altered,187,225,284\nGiratina-Origin,225,187,284\nCresselia,152,258,260\nPhione,162,162,190\nManaphy,210,210,225\nDarkrai,285,198,172\nShaymin,210,210,225\nShaymin,261,166,225\nArceus,238,238,237\nMeltan,118,99,130\nMelmetal,226,190,264".split("\n"),f=function(n){function e(){var n,a;Object(s.a)(this,e);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(n=Object(h.a)(e)).call.apply(n,[this].concat(r)))).state={data:[{id:"names",filename:"names.txt",value:y},{id:"cpm",filename:"cpmultipliers.txt",value:[]},{id:"stats",filename:"basestats.txt",value:b}],search:{selected:"",suggestions:[],text:"",selectedStats:[],statsArray:[]},options:{id:"options",sort:"cp20",toggle:{nundo:!1,lvl15:!1,under90:!1}}},a.onTextChanged=function(n){var e=n.target.value,t=[];if(e.length>0){var o=new RegExp("^".concat(e),"i");t=a.state.data[0].value.sort().filter(function(n){return o.test(n)})}var r=Object(l.a)({},a.state);r.search.text=e,r.search.suggestions=t,a.setState(function(){return{state:r}})},a.suggestionSelected=function(n){var e=Object(l.a)({},a.state);e.search.text=n,e.search.suggestions=[],e.search.selected=n;for(var t=a.state.data[2].value,o=0;o<t.length;o++){var r=t[o].split(","),i=String(e.search.selected);r[0]===i&&(e.search.selectedStats=r)}a.setState(function(){return{state:e}}),a.generateStatsArray()},a.renderSuggestions=function(){var n=Object(l.a)({},a.state);return 0===n.search.suggestions.length?null:(n.search.suggestions.length>5&&(n.search.suggestions=n.search.suggestions.slice(0,5)),o.a.createElement("ul",null,n.search.suggestions.map(function(n){return o.a.createElement("li",{onClick:function(){return a.suggestionSelected(n)},key:n},n)})))},a.changeSort=function(n){var e=Object(l.a)({},a.state);e.options.sort=n,a.setState(function(){return{state:e}})},a.toggleNundo=function(){var n=Object(l.a)({},a.state);n.options.toggle.nundo=!n.options.toggle.nundo,a.setState(function(){return{state:n}})},a.toggleLvl15=function(){var n=Object(l.a)({},a.state);n.options.toggle.lvl15=!n.options.toggle.lvl15,a.setState(function(){return{state:n}})},a.toggleUnder90=function(){var n=Object(l.a)({},a.state);n.options.toggle.under90=!n.options.toggle.under90,a.setState(function(){return{state:n}})},a.generateStatsArray=function(){for(var n=parseInt(a.state.search.selectedStats[1]),e=parseInt(a.state.search.selectedStats[2]),t=parseInt(a.state.search.selectedStats[3]),o=[],r=15;r>9;r--)for(var i=15;i>9;i--)for(var s=15;s>9;s--){var u=(r+i+s)/45*100,c=Math.floor((n+r)*Math.sqrt(e+i)*Math.sqrt(t+s)*Math.pow(.51739395,2)/10),h=Math.floor((n+r)*Math.sqrt(e+i)*Math.sqrt(t+s)*Math.pow(.59740001,2)/10),g=Math.floor((n+r)*Math.sqrt(e+i)*Math.sqrt(t+s)*Math.pow(.667934,2)/10),p=Math.floor((n+r)*Math.sqrt(e+i)*Math.sqrt(t+s)*Math.pow(.79030001,2)/10),m=Math.floor(.51739395*(t+s)),d=Math.floor(.59740001*(t+s)),S=Math.floor(.667934*(t+s)),y=Math.floor(.79030001*(t+s)),b=[c,m,h,d,g,S,u.toFixed(1),r,i,s,p,y];o.push(b)}var f=Object(l.a)({},a.state);f.search.statsArray=o,a.setState(function(){return{state:f}})},a}return Object(g.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Test"),o.a.createElement("p",null,"Select A Pok\xe9mon"),o.a.createElement("div",{className:"AutoCompleteSearch"},o.a.createElement(S,{items:this.state.data[0],search:this.state.search,onTextChanged:this.onTextChanged,renderSuggestions:this.renderSuggestions}),this.renderSuggestions()),o.a.createElement("br",null),o.a.createElement(p,{options:this.state.options,changeSort:function(e){return n.changeSort(e)},toggleNundo:this.toggleNundo,toggleLvl15:this.toggleLvl15,toggleUnder90:this.toggleUnder90}),o.a.createElement("br",null),o.a.createElement("hr",null),o.a.createElement("h1",null,this.state.search.selected),o.a.createElement(d,{options:this.state.options,stats:this.state.search.statsArray}))}}]),e}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},7:function(n,e,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.0639d33b.chunk.js.map