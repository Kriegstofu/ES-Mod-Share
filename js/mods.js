function createMod(title, author, description, image, download, infoLink, tags) {
	var mod = {
		title: title,
		author:author,
		description:description,
		image:image,
		download:download,
		infoLink:infoLink,
		tags:tags
	};
	return mod;
}

// GUIDELINES
// Add mods to this list
// Type createMod(),
// Then between the parenthesis in quotes type your mod in this order: title, author, description, image, download, infoLink, tags
// Download, and image should be a link
// Put new mods at the bottom.
// USE HTTPS for external links or add your image to the img folder and link to that.
// Don't copy steam preview image urls upload to imgur or to the repo
// Use unique names
// Use small images less than 1mb in size

// F.A.Q
// No info link? Just put a #
// Quotes inside a description?
// If you use double quotes "" inside of your description or anywhere then surround your code with single quotes instead ''
// Do I seperate with comas? - Yes, but do not put a coma after the last value which is tags.
// And include a coma after the last parenthesis like this createMod(),

var modList = [

// Example mod
createMod(
	"Mod Example Title",
	"Example Author",
	// Use single quotes if you have double quotes inside your text like this
	'This is just an "example" inside the mods file so people can see how to add their own mod',
	"img/mods/example.png",
	"https://www.youtube.com/watch?v=32UGD0fV45g",
	"https://www.google.com/",
	"example"
	),

createMod(
	"Businessman",
	"Legolas",
	"Become a ruler of the galaxy through money. Buy trade routes, stocks, set up shops and entertainment centers, buy planets, hire a mercenary army, hunt down people who didn't pay back their loans....and more..Also includes an optional alternate pirate start, and additons to make piracy much more viable and fun.",
	"img/mods/businessman.png",
	"https://drive.google.com/open?id=0B9ljHWQDV1lIa3h0NFAyV3B3M2M",
	"https://steamcommunity.com/sharedfiles/filedetails/?id=690480787",
	"business, economy, strategy, merchant"
	),

createMod(
	"Enigma Corp",
	"Derpy Horse",
	"Enigma Corp is an ever expanding mod that takes you through the adventures of the Enigma Corporation, a strange and greedy corporation that has only just recently surfaced onto the open market and is already doing big things. Both an outfit development and ship creation company, the Corporation has taken the market by storm, introducing new and exciting things to the general public that have never been seen before.",
	"https://avatars0.githubusercontent.com/u/11450262?v=3&s=400",
	"https://github.com/Amazinite/Enigma-Corp/releases",
	"https://steamcommunity.com/app/404410/tradingforum/365172547939442297/",
	"story, aliens, systems, ships, outfits, wip"
	),

createMod(
	"Ship Generator",
	"Legolas",
	"Ever wanted to easily create ships? (as if it's not already easy) Well, now you can! I created a simple tool that will generate the code for a ship.",
	"img/mods/shipgen82116.JPG",
	"https://evan153.github.io/Endless-Sky-Ship-Generator/",
	"https://steamcommunity.com/sharedfiles/filedetails/?id=718279752",
	"tool, ship, code, modding"
	),

createMod(
	"S-Kestrel Super",
	"mdsmestad",
	"The S-Kestrel Super is a cheaty ship, and more of a work of art and testing tool than a ship that's actually meant for the game. I use it in mod for testing mostly, sometimes I Just look at it for a while and admire it. Please enjoy hours of make little pirates go BOOM! ",
	"https://i.imgur.com/VglrdGr.jpg",
	"https://drive.google.com/open?id=0BwfUPLPyuB65U1poRW5RcGgySVU",
	"#",
	"cheat, ship, testing, art"
	),

createMod(
	"Ship Builder",
	"Endless Sky",
	"Get position coordinates for your ships.",
	"https://i.imgur.com/rHP0mXz.jpg",
	"https://endless-sky.github.io/ship_builder.html",
	"https://github.com/endless-sky/endless-sky/wiki/CreatingShips",
	"ship, modding, tool"
	),

createMod(
	"The Enclave",
	"Storm Crow",
	"[v0.0.8] A new galaxy, way unbalanced outfits, and a rubbish story. Fun times.",
	"http://i.imgur.com/OzMCNtm.png",
	"https://drive.google.com/file/d/0B-tyb7FBVShNeHhxcnk5akVOWU0/view?usp=sharing",
	"http://steamcommunity.com/app/404410/tradingforum/365172408529296671/",
	"story, rel, wip"
	),

createMod(
	"Ursa Polaris",
	"Local God",
	"Spend (hundreds of) millions of credits building and stocking a Universal Outfitter Space Station after you complete the main storyline!",
	"img/mods/UrsaPolaris.png",
	"https://github.com/LocalGod79/UrsaPolaris/archive/master.zip",
	"#",
	"story, outfitter, outfits, developed"
	),

createMod(
	"Le Troll",
	"Storm Crow (Inspired by Derpy Horse)",
	'A Star Barge called "Le Troll" that nukes you on sight no matter what is going on. In the middle of the campaign? Nuked. Just got your first Kor ship? Nuked. Kappa.',
	"https://raw.githubusercontent.com/endless-sky/endless-sky-high-dpi/master/images/ship/star%20barge%402x.png",
	"https://drive.google.com/file/d/0B-tyb7FBVShNV3hPQ042R3hsNXc/view?usp=sharing",
	"http://steamcommunity.com/app/404410/discussions/0/357287935542774456/#c357287935542779066",
	"mini, troll, nukes, person, derpy, horse"
	),
	
createMod(
	"The Final Countdown",
	'Storm Crow (With contributions from whatever band wrote "The Final Countdown)"',
	'Endless Sky except whenever a ship dies it plays a snippet of "The Final Countdown".',
	"https://rutgershonorsblog.files.wordpress.com/2015/11/final-countdown.jpg",
	"https://drive.google.com/file/d/0B-tyb7FBVShNLXhRbmY5ZVlhcG8/view?usp=sharing",
	"http://steamcommunity.com/app/404410/tradingforum/359547436761985762/",
	"mini, the final countdown, lol, death, explosions, depression"
	),

];
