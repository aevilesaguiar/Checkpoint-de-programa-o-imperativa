let pipoca =10;
let macarrao = 8;
let carne= 15;
let feijao=12;
let brigadeiro = 8;

function menu(tempo, comida){

    let  info_menu = " ";

    if(tempo<comida){

        info_menu ="**** :O Tempo Insuficiente :o ****";

    }else if((tempo>=comida) && (tempo < comida*2)){

        info_menu="****** ♥ Prato Perfeito ♥ *****";

    }else if ((tempo>= (comida*2)) && (tempo<(comida*3))){

        info_menu="***** :( Comida Queimou  :( ****" ;

    }else{
        info_menu="*******XX Kabuumm =( **********";
    }
    return info_menu;
}

console.log("********MENU MICROONDAS**********")
console.log("****Escolha uma das opções*******")
console.log("1 - Pipoca – 10 segundos (padrão)\n2 - Macarrão – 8 segundos (padrão)\n3 - Carne – 15 segundos (padrão)\n4 - Feijão – 12 segundos (padrão)\n5 - Brigadeiro – 8 segundos (padrão)")
let food=2;

switch (food) {
    case 1:
        console.log("Você escolheu Pipoca")
        console.log(menu(pipoca,15));
        console.log("Prato pronto, bom apetite!!!")
        break;

    case 2:
        console.log("Você escolheu Macarrão")
        console.log(menu(macarrao,8));
        console.log("Prato pronto, bom apetite!!!")
    break;
    case 3:
        console.log("Você escolheu Carne")
        console.log(menu(carne, 15));
        console.log("Prato pronto, bom apetite!!!")
    break;

    case 4:
        console.log("Você escolheu Feijão")
        console.log(menu(feijao,12));
        console.log("Prato pronto, bom apetite!!!")
    break;

    case 5:
        console.log("Você escolheu Brigadeiro")
        console.log(menu(brigadeiro,8));
        console.log("Prato pronto, bom apetite!!!")
        break;

    default:
            console.log("Prato Inexistente");

        break;
}
