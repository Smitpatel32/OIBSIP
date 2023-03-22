const temp = document.getElementById('temp');
const unit = document.getElementById('unit');
const convert = document.getElementById('conv');
let result = document.getElementById('show_result')

function checkUnit(){
    if(unit.value === "F"){
        let c = ((temp.value - 32)*5/9).toFixed(2);
        let k = ((temp.value - 32)*5/9 + 273.15).toFixed(2)
        result.innerHTML = c + " &#8451;" + "<br/>" + "<br/>"  + k + " &#8490;" 
    }
    else if(unit.value === "C"){
        let f = ((temp.value * 9/5) + 32).toFixed(2);
        let k = parseInt(temp.value) + 273.15
        result.innerHTML = f + " &#8457;" + "<br/>" + "<br/>"  + k + " &#8490;";
    }
    else if(unit.value === "K"){
        let f = ((temp.value - 273.15) * 9/5 + 32).toFixed(2); 
        let c = ((temp.value - 273.15)).toFixed(2);
        result.innerHTML = f + " &#8457;" + "<br/>" + "<br/>"  + c + "  &#8451;";
    }
    return false;
}