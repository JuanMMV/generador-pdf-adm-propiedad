export const NumerosLetras = (numeroInt)=>{

    console.log(numeroInt)

    let cantidadNumeros = Math.trunc(Math.log10(numeroInt)+1)
    let numeroStr=" no hay";
    
    if(cantidadNumeros === 1){
        numeroStr = Unidades(numeroInt)
    }else if(cantidadNumeros === 2){
        numeroStr = Decenas(numeroInt)
    }else if(cantidadNumeros ===3 ){
        numeroStr = Centenas(numeroInt)
    }else if(cantidadNumeros === 4 || cantidadNumeros === 5 || cantidadNumeros === 6){
        numeroStr = Miles(numeroInt)
    }else if(cantidadNumeros === 7 ){
        numeroStr = Millones(numeroInt)
    }else {
        numeroStr="Error...numero no soportado"
    }

    //console.log(cantidadNumeros)
/*
    switch (cantidadNumeros) {
        case 1:
            console.log('tiene 1 numero')
            numeroStr = Unidades(numeroInt)
            
            break;
        case 2:
            console.log('tiene 2 numero ')
            numeroStr = Decenas(numeroInt)
        break;
        case 3:
            console.log('tiene 3 numero ')
            numeroStr = Centenas(numeroInt)
        break;
        case 4:
        case 5:
        case 6:
            console.log('tiene 4, 5 o 6 numero')
            numeroStr = Miles(numeroInt)
        break;
        case 7:
            console.log('tiene 7 numero ')
            numeroStr = Millones(numeroInt)
        break;
        default:
            console.log('tiene mas numeros')
        break;
        
    }*/
    //console.log(numeroStr)
    return numeroStr
}

function Unidades(num){

    switch(num) {
        case 1: 
            return "uno";
        break;
        case 2:
            return "dos";
        break;
        case 3: return "tres"
        case 4: return "cuatro"
        case 5: return "cinco"
        case 6: return "seis"
        case 7: return "siete"
        case 8: return "ocho"
        case 9: return "nueve"
    }

    return "";
}//Unidades()

function Decenas(num){

    let decena = Math.floor(num/10);
    let unidad = num - (decena * 10);

    switch(decena)
    {
        case 1:
            switch(unidad)
            {
                case 0: return "diez";
                case 1: return "once";
                case 2: return "doce";
                case 3: return "trece";
                case 4: return "catorce";
                case 5: return "quince";
                default: return "dieci" + Unidades(unidad);
            }
        case 2:
            switch(unidad)
            {
                case 0: return "veinte";
                default: return "veinti" + Unidades(unidad);
            }
        case 3: return DecenasY("treinta", unidad);
        case 4: return DecenasY("cuarenta", unidad);
        case 5: return DecenasY("cincuenta", unidad);
        case 6: return DecenasY("sesenta", unidad);
        case 7: return DecenasY("setenta", unidad);
        case 8: return DecenasY("ochenta", unidad);
        case 9: return DecenasY("noventa", unidad);
        case 0: return Unidades(unidad);
    }
}


    function DecenasY(strSin, numUnidades) {
        if (numUnidades > 0)
        return strSin + " y " + Unidades(numUnidades)
    
        return strSin;
    }//DecenasY()
    
    function Centenas(num) {
        let centenas = Math.floor(num / 100);
        let decenas = num - (centenas * 100);
    
        switch(centenas)
        {
            case 1:
                if (decenas > 0)
                    return "ciento " + Decenas(decenas);
                return "cien";
            case 2: return "doscientos " + Decenas(decenas);
            case 3: return "trescientos " + Decenas(decenas);
            case 4: return "cuatrocientos " + Decenas(decenas);
            case 5: return "quinientos " + Decenas(decenas);
            case 6: return "seiscientos " + Decenas(decenas);
            case 7: return "setecientos " + Decenas(decenas);
            case 8: return "ochocientos " + Decenas(decenas);
            case 9: return "novecientos " + Decenas(decenas);
        }
    
        return Decenas(decenas);
    }//Centenas()
    
    function Seccion(num, divisor, strSingular, strPlural) {
        cientos = Math.floor(num / divisor)
        resto = num - (cientos * divisor)
    
        letras = "";
    
        if (cientos > 0)
            if (cientos > 1)
                letras = Centenas(cientos) + " " + strPlural;
            else
                letras = strSingular;
    
        if (resto > 0)
            letras += "";
    
        return letras;
    }//Seccion()
    
    function Miles(num) {
        divisor = 1000;
        cientos = Math.floor(num / divisor)
        resto = num - (cientos * divisor)
    
        strMiles = Seccion(num, divisor, "un mil", "mil");
        strCentenas = Centenas(resto);
    
        if(strMiles == "")
            return strCentenas;
    
        return strMiles + " " + strCentenas;
    }//Miles()
    
    function Millones(num) {
        divisor = 1000000;
        cientos = Math.floor(num / divisor)
        resto = num - (cientos * divisor)
    
        strMillones = Seccion(num, divisor, "un millon de", "millones de");
        strMiles = Miles(resto);
    
        if(strMillones == "")
            return strMiles;
    
        return strMillones + " " + strMiles;
    }//Millones()
    

