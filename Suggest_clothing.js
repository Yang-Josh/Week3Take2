//Determine clothing

function Suggest_clothing(temperature, humidity){
    if (temperature >= 20){
        let Clothing = "tshirt, shorts";
    }
    else if (temperature <=0){   
        let Clothing = "coat, scarf";
    }
}

export {Suggest_clothing};