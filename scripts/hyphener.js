const hyphenate = require("hyphen/pl").hyphenate;

const  about = require("../data/about.json").about.bio;
const  offer = require("../data/text.json").offer

const fs = require('fs')
const path = require("path");

let aboutArrLen = about.length
let offerArrLen = offer.length

let resAbout =  new Array;
let resOffer =  new Array;


module.exports = function hyphener(){

if (!fs.existsSync(path.resolve(__dirname, "../public/text.json"))) {

    fs.closeSync(fs.openSync(path.resolve(__dirname, "../public/text.json"), 'w'));
} else {

    fs.unlinkSync(path.resolve(__dirname, "../public/text.json"))

}

if (!fs.existsSync(path.resolve(__dirname, "../public/about.json"))) {

  fs.closeSync(fs.openSync(path.resolve(__dirname, "../public/about.json"), 'w'));
} else {
  fs.unlinkSync(path.resolve(__dirname, "../public/about.json"))

}





for (let i = 0; i<aboutArrLen; i++){
 
hyphenate(about[i],{ debug: false, hyphenChar: "\u00AD", minWordLength: 3 }
    
).then(result => {
                     
   

    let element = result 

    resAbout.push(element)
                
  return resAbout

  }).then(res => {fs.writeFileSync(path.resolve(__dirname, "../public/about.json"), JSON.stringify({about:{ "bio": res }}))});

}


for (let i = 0; i<offerArrLen; i++){
 
  hyphenate(offer[i],{ debug: false, hyphenChar: "\u00AD", minWordLength: 3 }
      
  ).then(result => {
                       
     // console.log( typeof result)
     
  
      let element = result 
  
      resOffer.push(element)
          
    return resOffer
  
    }).then(res => {fs.writeFileSync(path.resolve(__dirname, "../public/text.json"), JSON.stringify({ "offer": res }))});
  
  }


}



