// function findMatching(drivers){
//     const correctDrivers = drivers.filter((drivers) => drivers === ['Bobby'])
    
//     return correctDrivers
// }
function findMatching(earth, fire) {
    return earth.filter((water) => water.toLowerCase().includes(fire.toLowerCase()))
}

function fuzzyMatch(earth, fire) {
    return earth.filter((water) => water.toLowerCase().includes(fire.toLowerCase()))
}

function matchName(earth, fire){
    return earth.filter((water) => water.toLowerCase().includes(fire.toLowerCase()))
}