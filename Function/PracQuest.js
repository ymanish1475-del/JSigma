// 1

let arr=[1,2,3,4,5]
const arrayAve=(arr)=>{

    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }

    return (sum/arr.length)



    

}

// arrayAve(arr)

// 2

const isEven=(a)=>{

    if(a%2==0){
        return true;
    }else{
        return false;
    }

}