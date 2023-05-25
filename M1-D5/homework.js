// 1-savol
const area = function (l1, l2) {
  return l1 * l2;
};
const areaResult = area(3, 4);
console.log(areaResult);

//2-savol
const crazySum = function (num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
};
console.log(crazySum(0, 3));

//3-savol
const crazyDiff = function (num) {
  if (num > 19) {
    return (num + 19) * 2;
  } else {
    return (num + 19) * 3;
  }
};
console.log(crazyDiff(21));

//4-savol
const boundary = function (n) {
  if (n > 20 && n <= 100) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(10));


//5-savol
const strivify = function(str) {
    if (str.startsWith("strive")){
        return str;
    } else {
        return "Strive"+ str ;
    }
    }; console.log(strivify("hello Usmonxoja"))

    //6-savol
   function check3and7 (n) {
    if (n % 3 === 0 || n % 7 === 0) {
        return "n is multiple of 3 or 7"
    } else {
        return "n is neither multiple of 3 or 7";
    }
   }; console.log (check3and7 (9))

   // 7-savol 
   const reverseString =  function (str) {

    return str.split("").reverse().join("");
   }
   
   console.log (reverseString("Strive"))

   //8-savol
   /* const upperFirst = function (str) {
    return str.charAt(0).toUppercase() + str.slice(1);
   };
   console.log(upperFirst("usmonxoja"))*/ 

   //9-savol
const cutString = function(str) {
    return str.slice(1,-1);
}
console.log(cutString("usmonxoja"))