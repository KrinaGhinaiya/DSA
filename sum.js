let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let sum=23;

for(let i=0; i<arr.length;i++){
    if(arr[i]+arr[i+1]==sum){
        console.log(`${arr[i]}+${arr[i+1]}=${sum}`);
    }
}