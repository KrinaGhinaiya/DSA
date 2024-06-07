// let arr = [13, 4, 8, 6, 20]

// let found=false;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i]<arr[j]){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp;
//             found=true;
//         }
//         if(!found){
//             break;
//         }
//     }
// }
// console.log(arr);   

let arr = [1, 2, 3, 4, 5, 6]
let ele = 4;

function id() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ele) {
            return "true";
        }
        else {
            console.log(arr[i]);
        }

    }

}
console.log(id());

