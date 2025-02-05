//Determine clothing

function Suggest_clothing(temperature, humidity){
    if (temperature >=20){
        Suggest_clothing = "t-shirt, shorts";
    }
    else if (temperature <0){   
        Suggest_clothing = "coat, scarf";
    }

    else{
        Suggest_clothing = "coat, scarf";
    }
    return Suggest_clothing;
}

export {Suggest_clothing};