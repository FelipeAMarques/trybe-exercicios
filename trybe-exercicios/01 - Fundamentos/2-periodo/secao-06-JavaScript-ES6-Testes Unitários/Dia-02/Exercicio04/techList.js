
const techList = (arrayTech, name) => {
    let arrayObj = []
    const arrayDeTec = arrayTech.sort();
    if(arrayDeTec.length === 0){return 'Vazio!'}
    for(let index = 0; index < arrayDeTec.length; index += 1){
         arrayObj.push({
           tech: arrayDeTec[index],
           name,
        })
        
    }return arrayObj
}


module.exports = techList;