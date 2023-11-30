const fs = require('fs')
const path = require("path");
const util = require('util')
const Cryptr = require('cryptr');






const configure = () => {

    if (process.env.NODE_ENV === "development") {

        return { path: '.env.development' }
    }

    else if (process.env.NODE_ENV === "production") {

        return { path: '.env.production' }
    }

    else return { path: '.env.development' }

}


require('dotenv').config(configure())



const cryptr = new Cryptr(process.env.HORSEVIEW, { pbkdf2Iterations: parseFloat(process.env.ITR), saltLength: parseFloat(process.env.SALT) });



module.exports = function cryptUpYourData(){

    /// utwórz pliki /////////////////



    if (!fs.existsSync(path.resolve(__dirname, "../d_tag_Log/tag.json"))) {

        fs.closeSync(fs.openSync(path.resolve(__dirname, "../d_tag_Log/tag.json"), 'w'));
    } else {

        fs.unlinkSync(path.resolve(__dirname, "../d_tag_Log/tag.json"))

    }


    if (!fs.existsSync(path.resolve(__dirname, "../src/data/f6af6cffbb8bc.json"))) {

        fs.closeSync(fs.openSync(path.resolve(__dirname, "../src/data/f6af6cffbb8bc.json"), 'w'));
    } else {

        fs.unlinkSync(path.resolve(__dirname, "../src/data/f6af6cffbb8bc.json"))


    }

    if (!fs.existsSync(path.resolve(__dirname, "../src/data/d3a12cf28b54.json"))) {

        fs.closeSync(fs.openSync(path.resolve(__dirname, "../src/data/d3a12cf28b54.json"), 'w'));
    } else {

        fs.unlinkSync(path.resolve(__dirname, "../src/data/d3a12cf28b54.json"))

    }


    if (CV.length != 0) {


        fs.writeFileSync(path.resolve(__dirname, "../src/data/f6af6cffbb8bc.json"), JSON.stringify({ "djbalccfed": cryptr.encrypt(CV.toString()) }))

        const CV_encrypted = require("../src/data/f6af6cffbb8bc.json")["djbalccfed"]
        //  console.log("cv-encrypt-decrypted: ",util.inspect(JSON.parse(cryptr.decrypt(CV_encrypted)), {showHidden: false, depth: null, colors: true}))
        cryptr.decrypt(CV_encrypted)
    } else {

        /// ? true ok!  :    co tam kurwa jest? ////

        // console.log(util.inspect(JSON.parse(cryptr.decrypt(CV)), {showHidden: false, depth: null, colors: true}))

        //// todo  throw  error
    }



    if (projects.length != 0) {


        fs.writeFileSync(path.resolve(__dirname, "../src/data/d3a12cf28b54.json"), JSON.stringify({ "djbalccfed": cryptr.encrypt(projects.toString()) }))

        const projects_encrypted = require("../src/data/d3a12cf28b54.json")["djbalccfed"]
        //  console.log("projects-encrypt-decrypted: ",util.inspect(JSON.parse(cryptr.decrypt(projects_encrypted)), {showHidden: false, depth: null, colors: true}))
        cryptr.decrypt(projects_encrypted)



    }


    else {

        /// ? true ok!  :    co tam kurwa jest? ////

        // console.log(util.inspect(JSON.parse(cryptr.decrypt(projects)), {showHidden: false, depth: null, colors: true}))

        //// todo  throw  error

    }



    if (headers.length != 0) {



        fs.writeFileSync(path.resolve(__dirname, "../src/data/a12cf2.json"), JSON.stringify({ "djbalccfed": cryptr.encrypt(headers.toString()) }))

        const headers_encrypted = require("../src/data/a12cf2.json")["djbalccfed"]
        //   console.log("headers-encrypt-decrypted: ",util.inspect(JSON.parse(cryptr.decrypt(headers_encrypted)), {showHidden: false, depth: null, colors: true}))
        cryptr.decrypt(headers_encrypted)
    }

    else {

        /// ? true ok!  :    co tam kurwa jest? ////

        // console.log(util.inspect(JSON.parse(cryptr.decrypt(projects)), {showHidden: false, depth: null, colors: true}))

        //// todo  throw  error

    }

}


const CV = fs.readFileSync(path.resolve(__dirname, "../data/CV_pl.json"))

const projects = fs.readFileSync(path.resolve(__dirname, "../data/pros.json"))


const headers = fs.readFileSync(path.resolve(__dirname, "../data/headers.json"))





