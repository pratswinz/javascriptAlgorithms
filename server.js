const lineReader = require('line-reader');
const fs = require('fs');
let arrMap = {};
let foundArr = {};

lineReader.eachLine('list_of_words.txt', function(line, last) {
  arrMap[line] = "";
	if (last) {
		for (const [item, value] of Object.entries(arrMap)) {
			
			for(let i = 1;i<item.length;i++){				
				if(arrMap.hasOwnProperty(item.substring(0,item.length-i)) && arrMap.hasOwnProperty(item.substring(item.length-i,item.length))){
					foundArr[item] = [item.substring(0,item.length-i),item.substring(item.length-i,item.length)];
				}
			}
		}  
		fs.appendFile('message.txt',JSON.stringify(foundArr), function (err) {
		  if (err) throw err;
			console.log(`Saved!`);
		});
		return false; // stop reading
    }
});