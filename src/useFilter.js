
import useHorseView from "./useHorseView";
const records  = require("./data/f6af6cffbb8bc.json")["djbalccfed"]
const labels  = require("./data/a12cf2.json")["djbalccfed"]

const useFilterDirect = (option) => {

const headers = JSON.parse(useHorseView()(labels))
const data = JSON.parse(useHorseView()(records))["CV"]


let CV = {}

    

    if ( !data || option === (null || undefined || '')) {


        return 


    } else {

      
        // kasuje pola z kluczami zaw. "*"   
        let CV_jsonS = starsOut(data)

              
        // Utworzenie przefiltrowanego jsona "CV" z jsona z danymi CV_jsonS

        
        Object.keys(CV_jsonS).forEach((u, i) => { CV[u] = CV_jsonS[u].filter( obj => CV_jsonS[u][0].tag.find(tag => tag === option) && obj.tag.find(tag => tag === option))})


        // odcięcie pustych tablic
        Object.keys(CV).forEach((u, i) => { if (CV[u].find(obj => obj.tag.includes(option)) === undefined) delete CV[u] })


        // odcięcie tagów
        Object.keys(CV).forEach((u, i) => { CV[u].forEach(o => delete o.tag) })



        header(CV, headers)


        unwrapObjects(CV)

    }

    return CV

}


let starsOut = (json) => {

    let jsonString = JSON.stringify(json)

    // console.log("JS_string",jsonString)

    // reg bazowy 
    jsonString = jsonString.replace(/[\"\']\*+\w+[\"\']:[\"\'][\s\w\-\ \.%:/\u0104\u0106\u0118\u0141\u0143\u00D3\u015A\u0179\u017B\u0105\u0107\u0119\u0142\u0144\u00F3\u015B\u017A\u017C]+[\"\'][\,]?/g, "")

    

    // kasuje przecinki pozostałe po wymazaniu pól będących ostatnimi w obiekcie
    jsonString = jsonString.replace(/[\,]+(?=\}|\])+/g, "")



    return JSON.parse(jsonString)
}

function unwrapObjects(data) {

    //console.log("DATA: ", data)


    for (var property of Object.keys(data)) {


        data[property].forEach((r, i) => {


            Object.keys(data[property][i]).forEach((field, j) => {

                if (typeof data[property][i][field] === "object" &&
                    !Array.isArray(data[property][i][field]) &&
                    data[property][i][field] !== null) {


                    Object.keys(data[property][i][field]).forEach((unwraped, l) => {

                        // rozwinięcie obiektu trzeciego stopnia
                        if (typeof data[property][i][field][unwraped] === "object" &&
                            !Array.isArray(data[property][i][field]) &&
                            data[property][i][field] !== null) {


                            Object.keys(data[property][i][field][unwraped]).forEach((unwraped2, m) => {


                                data[property][i][unwraped2] = data[property][i][field][unwraped][unwraped2]

                            })

                        } else {

                            data[property][i][unwraped] = data[property][i][field][unwraped]
                        }

                    })

                    delete data[property][i][field]
                }
            })
        })


    }

}


function header(CV, headers) {

    
    Object.keys(CV).forEach(field => {

        if (field !== undefined) {

            CV[field][0] = Object.assign({ header: headers[field] }, CV[field][0])

        } else { return }

    })
}


export default useFilterDirect;




