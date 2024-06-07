//add new element
let arr = [1, 2, 3, 4, 8, 9]

let position = 4;
let add = 20;

for (let i = arr.length-1 ;i >=position;  i--) {
    arr[i+1] =arr[i]
    if (i==position) {
        arr[position]=add
    }
}
console.log(arr);


//remove element

// let arr = [1, 2, 3, 4, 5]

// let pos = 2;

// for (let i = 0;i<arr.length-1;i++) {
//     if (arr[i] == arr[pos]) {
//         arr[i] = arr[i+1];
//     }
//     console.log(arr[i]);
// }



//update array element


// let arr = [1, 2, 3, 4, 5, 6]

// let newelement = 20;
// position = 5;

// for (let i = 0; i < arr.length; i++) {
//         if (i == position - 1) {
//                 arr[i] = newelement;
//         }
// }
// console.log(arr);

