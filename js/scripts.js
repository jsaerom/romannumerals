// Backend
var outputArray = [];

function convert(num){

  if (num > 3999){
    alert("Please enter a number below 3,999");
  } else if(num >= 1000){
    outputArray.push("M");
    convert(num - 1000);
  } else if (num >= 900){
    outputArray.push("CM");
    convert(num - 900);
  } else if (num >= 500){
    outputArray.push("D");
    convert(num - 500);
  } else if (num >= 400){
    outputArray.push("CD");
    convert(num - 400);
  } else if (num >= 100){
    outputArray.push("C")
    convert(num - 100);
  } else if (num >= 90){
    outputArray.push("XC");
    convert(num - 90);
  } else if (num >= 50){
    outputArray.push("L");
    convert(num - 50);
  } else if (num >= 40){
    outputArray.push("XL");
    convert(num - 40);
  } else if (num >= 10){
    outputArray.push("X");
    convert(num - 10);
  } else if (num >=  9){
    outputArray.push("IX");
    convert(num - 9);
  } else if (num >= 5){
    outputArray.push("V");
    convert(num - 5);
  } else if (num >= 4){
    outputArray.push("IV");
    convert(num - 4);
  } else if (num >= 1){
    outputArray.push("I");
    convert(num - 1);
  }else {
    return false;
  }
console.log(outputArray.toString());
}

// Frontend
$("form").submit(function(event){
  event.preventDefault();
  inputNumber = parseInt($("#inputNumber").val());
  convert(inputNumber);
  $("#result").text(outputArray.join("").toString());
});
