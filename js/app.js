// Ejercicio 1 - AGENDA

// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
var myTeam = [
    {
    name: "María",
    availability: new Array(8).fill(true)
    },
    {
    name: "Pedro",
    availability: new Array(8).fill(true)
    },
    {
    name: "Esther",
    availability: new Array(8).fill(true)
    },
    {
    name: "Marcos",
    availability: new Array(8).fill(true)
    },
];

// 1. Generación aleatoria de la disponibilidad

var checkTimetable = () =>{
    for (members of myTeam) {
        console.log ("Disponibilidad de " + members.name);
            for (hours in WORK_HOURS) {
                console.log("   " + WORK_HOURS[hours] + " > " + (members.availability[hours]=== true? "Sí" : "No"));
            };
        console.log("- - - - - - - - - - - - -")
    };
};

var getRandomAvailability = () => {
    for (i = 0; i < WORK_HOURS.length; i++){
        newStatus = Math.round(Math.random()) > 0 ? true : false;
    };
    return newStatus;
};

var changeAvailability = () => {
    for (members of myTeam) {
        for (j = 0; j < members.availability.length; j++) {
            members.availability[j] = getRandomAvailability();
        }
    }
    checkTimetable();
}

changeAvailability();


// 2. Buscar hueco libre

var checkTeamAvailability = () => {

    for (hours in WORK_HOURS){
        groupAvailability = 0;

        for (k = 0; k < myTeam.length; k++){
            if (myTeam[k].availability[hours] === true) groupAvailability++;
        }
        if (groupAvailability === myTeam.length) {
            return console.log("Hueco encontrado en el horario " + WORK_HOURS[hours])
        }
    }
    return console.log ("Lo siento. No hay hueco disponible en el equipo.")
};

checkTeamAvailability();


// Ejercicio 2 - CALCULADORA DE CAMBIO

// NOTA : He comenzado el challenge, pero creo que estoy invirtiendo demasiado tiempo
// en querer sacarlo y me gustaría seguir avanzando con el contenido del curso, por lo
// que lo dejaré a medias.
// He dejado bien configurados los addEventListeners que leen cada casilla y la función
// que sobreescribe la cantidad disponible de cada billete.
// La función que lee si hay una caja disponible o no está a medias, me habría gustado
// configurarla para que primero confirmara que la caja es suficiente para dar el cambio
// y si no, que nos avisara. Y que terminase dando el cambio teniendo en cuenta la
// cantidad de cada item.


const round = [
    {id : "bill-200" ,
    name : "billete de 200€",
    import : 200,
    quantity: undefined,
    },
    {id : "bill-100" ,
    name : "billete de 100€",
    import : 100,
    quantity: undefined,
    },
    {id : "bill-50" ,
    name : "billete de 50€",
    import : 50,
    quantity: undefined,
    },
    {id : "bill-20" ,
    name : "billete de 20€",
    import : 20,
    quantity: undefined,
    },
    {id : "bill-10" ,
    name : "billete de 10€",
    import : 10,
    quantity: undefined,
    },
    {id : "bill-5" ,
    name : "billete de 5€",
    import : 5,
    quantity: undefined,
    },
    {id : "coin-2" ,
    name :  "moneda de 2€",
    import : 2,
    quantity: undefined,
    },
    {id : "coin-1" ,
    name : "moneda de 1€",
    import : 1,
    quantity: undefined,
    }
]

const decimals = [
    {id : "coin-050" ,
    name : "moneda de 0.50€",
    import : 50,
    quantity: undefined,
    },
    {id : "coin-020" ,
    name : "moneda de 0.20€",
    import : 20,
    quantity: undefined,
    },
    {id : "coin-010" ,
    name : "moneda de 0.10€",
    import : 10,
    quantity: undefined,
    },
    {id : "coin-005" ,
    name : "moneda de 0.05€",
    import : 5,
    quantity: undefined,
    },
    {id : "coin-002" ,
    name : "moneda de 0.02€",
    import : 2,
    quantity: undefined,
    },
    {id : "coin-001" ,
    name : "moneda de 0.01€",
    import : 1,
    quantity: undefined,
    },
];

const money = [round, decimals]

var giveMeValues = (id) => Number(document.getElementById(id).value);

var simplify = (resultToSimplify) =>{
    finalResult = [];

    for (j = 0; j < money.length; j++) {
        list = money[j];
        for (items of list) {
            countElements = 0;
            for (moneyToCount of resultToSimplify){
                if (items.name === moneyToCount){
                    countElements ++;
                }
            }
            if (countElements !== 0) finalResult.push(" " + countElements + " " + items.name);
        }
    }
    return giveMeResult(finalResult);
};

var divideNumber = (numb) =>{
    numb = numb.toString();
    result = numb.split(".");
    return result;
};

var resultCashRegisterAvailable = true;

var cashRegisterAvailable = () =>{
    for (l = 0; l < money.length; l++) {
        list = money[l];
        var allUndefined = true;
        for (items of list) {
            var undefinedItem = (items.quantity === undefined || items.quantity === 0)? true : false;
            allUndefined = allUndefined && undefinedItem;
            }
        resultCashRegisterAvailable = resultCashRegisterAvailable && allUndefined;
        }
        return resultCashRegisterAvailable = !resultCashRegisterAvailable;
};

var searchMoney = (numb, index) =>{
    list = money[index];

    if (resultCashRegisterAvailable === true) {
        for (items of list) {
            if ((items.quantity !== undefined || items.quantity > 0) && numb % items.import === 0){
                totalMoneyBack.push(items.name);
                tempRest -= items.import;
                return tempRest;
            }
        }
    } else {
        for (items of list) {
            if (numb % items.import === 0){
                totalMoneyBack.push(items.name);
                tempRest -= items.import;
                return tempRest;
            };
        }
    }
    return totalMoneyBack;
};

var changeMoney = (x) =>{
    parts = divideNumber(x);
    totalMoneyBack = [];

    for (i = 0; i < money.length; i++) {
        if (parts[i] > 0){
        tempRest = parts[i];
            do {
                searchMoney(tempRest, i);
            } while (tempRest > 0);
        }
    }
    return totalMoneyBack;
};

var openCashRegister = () =>{
    document.getElementById("hidden-cashregister").className = ("money_container");
    document.getElementById("button-cashregister").className = ("hidden_content");
}

var changeQuantity = () => {
    for (k = 0; k < money.length; k++) {
        list = money[k];
        for (items of list) {
            items.quantity = giveMeValues(items.id);
        }
    }
};

var giveMeResult = (text) => {
    document.getElementById("give-to-client").innerHTML = text;
    document.getElementById("result-container").className = ("text_container");
}

var calculateMoneyBack = () => {
    a = giveMeValues("input-total");
    b = giveMeValues("input-received");

    if (b < a) {
        result = a - b;
        result = result.toFixed(2);
        return giveMeResult("Faltan " + result + "€ para poder realizar la compra");
    } else {
        moneyBack = b - a;
        moneyBack = moneyBack.toFixed(2);
        
        if (moneyBack === 0) {
            return giveMeResult("No hay vuelto, el dinero está justo");
        } else {
            cashRegisterAvailable();
            changeMoney(moneyBack);
            return simplify(totalMoneyBack);
            }
        };
};


// Eventos
document.getElementById("button-cashregister").addEventListener("click", openCashRegister);

document.getElementById("button-calculate").addEventListener("click", calculateMoneyBack);

document.getElementById("bill-200").addEventListener("change", changeQuantity);
document.getElementById("bill-100").addEventListener("change", changeQuantity);
document.getElementById("bill-50").addEventListener("change", changeQuantity);
document.getElementById("bill-20").addEventListener("change", changeQuantity);
document.getElementById("bill-10").addEventListener("change", changeQuantity);
document.getElementById("bill-5").addEventListener("change", changeQuantity);
document.getElementById("coin-2").addEventListener("change", changeQuantity);
document.getElementById("coin-2").addEventListener("change", changeQuantity);
document.getElementById("coin-050").addEventListener("change", changeQuantity);
document.getElementById("coin-020").addEventListener("change", changeQuantity);
document.getElementById("coin-010").addEventListener("change", changeQuantity);
document.getElementById("coin-005").addEventListener("change", changeQuantity);
document.getElementById("coin-002").addEventListener("change", changeQuantity);
document.getElementById("coin-001").addEventListener("change", changeQuantity);
