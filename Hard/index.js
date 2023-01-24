// a module created here, a module is a file containing related code (a function or group of functions)

let pii = (function () {
    let name = 'Ruth'
    let _ssn = '000-000-0000';
    getssn = function () {
        return ssn;
    }
    getname = function () {
        return name;
    }
    return {
        getname: name
    }

    return {
        getssn: ssn
        //   returning the object literal here
    }
}());


console.log(pii.getname);
console.log(pii.ssn);

//Another way thats working a bit better collaberated with joseph and ching for this part
function pii(n, num) {
    var name = n; //names won't work
    var ssn = num;


    return {
        _names: name, // changed the first name to names and it shows up as "John"
        // adding _ makes it undefined, not #... If you use #, you must create a class
        _ssn: num,
        getName() {
            return "John"
        },
        getSSN() {
            return "123-45-6789"
        }
    }


};

// Attempts that didnt work

// function piiInfo() {
//     let pII = {
//         "nombre.init": "Ruth",
//         "ssn": "8888888888",
//         getNames():function x(){
//             return "Shrimp"
//             }
//             x();
//         }
//     };



// console.log(piiInfo(pII.getNames()))
// class pII {
//     piiInfo(nombre, ssn) {
//         this.nombre = nombre;
//         this.#ssn = ssn;
//     }

// }
// console.log(piiInfo.get('nombre'));


// class pII{
//     pii(nombre){
//         this.nombre = nombre;  
//     }
//     piiSsn(ssn){
//         this.#ssn = ssn;     
//     }

// }
// console.log(pii.get('nombre'));


// class piiName {
//     pii(nombre) {
//         this.nombre = nombre;
//     }
// }
// class piiSsn {
//     privateField;
//     piiSsn(ssn) {
//         this.#ssn = ssn;
//     }
//     get area() {
//         return ssn
//     }

// }
// console.log(pii.get('nombre'));

// function piiInfo(nombre, ssn) {
// let pII = {
// class piiName {
//     piiName(nombre) {
//         this.nombre = Ruth;
//     }
// }

// console.log(piiName.getName);


//     class pii{
//         // piiName(nombre) {
//     nombre = 'Ruth';
//         #privateField;
//         // piiSsn(ssn) {
//     #privateFieldssn = ssn;
//         }

//     set #
// //     }
// // }

// console.log(pii.get('nombre'));
// }

// function pii(nombre, ssn) {
//     let nombre = 'Ruth';
//     let ssn = '123-233-3453';

//     function puBlic(nombre) {
//         console.log(nombre);
//     }
//     function priVate(ssn) {
//         console.log(Restricted);
//     }

// }

// let nombre ='Ruth';
// let ssn ='123-233-3453';

// function pii(nombre,ssn) {

//     function puBlic() {
//         console.log(nombre);
//     }
//     function priVate() {
//         console.log('Restricted');
//     }
// }


// function piiInfo(piiName, piiSsn) {
//     let piiName = Ruth;
//     let _piiSsn = 12345;

//     return {
//         getpiiName() {
//             return piiName;
//         },
//         getpiiSsn() {
//             return _piiSsn;
//         },

//         setpiiName(newName) {
//             piiName = newName;
//         },
//         setpiiSsn(newNum) {
//             _piiSsn = newNum;
//         }
//     };

// }

// const pii = infoNeeded('Ruth', '8888888')

// console.log(pii.getpiiName);

