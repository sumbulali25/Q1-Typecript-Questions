//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

const nums:Number[]=[1,2,3,4,5,6,7,8,9];

for (let index = 0; index < nums.length; index++) {


    if (nums[index]==1) {
        console.log(nums[index]+"st")
    }

    else if (nums[index]==2) {
        console.log(nums[index]+"nd")
    }

    else if (nums[index]==3) {
        console.log(nums[index]+"rd")
    }

    else{
        console.log(nums[index]+"th");
    }


}