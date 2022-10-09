// number

// let a = 1000000000000000000000000021212121212121212n;

// console.log(typeof a);

// string

// let fullname = "loreagasdfafafasdfas{{{{{{{f2121212121werqwrwrewq4r5454545"
// console.log(typeof fullname);

// boolean

// let bool = 0;

// console.log(typeof bool);

// undefined

// let a;

// console.log(typeof a);

// null

// let n = null;

// console.log(typeof n);

// array

// let array = [1212121, {name: "fasdfasfd"}];

// console.log(array);

// object

// let obj = {
//     name: "fdsafasf",
//     fun1: function() {
//         console.log("fsdafasdf");
//     }
// }


// console.log(obj.fun1());

for (let index = 1; index <= 5; index++) {
    for (let index1 = 1; index1 <= 5; index1++) {
        if (index === 1 || index === 5) {
            document.write('*');
        } else {
            if (index1 === 1 || index1 === 5) {
                document.write('*');
            } else {
                document.write('&nbsp;&nbsp;');
            }
        }
    }

    document.write('<br/>')
}


