function fun() {
  var n1 = document.getElementById("number1").value;
  var n2 = document.getElementById("number2").value;
    
  console.log(`The prime numbers between ${n1} and ${n2} are:`);

  const arr = [];
  
  for (let i = n1; i <= n2; i++) {
      let flag = 0;
  
      for (let j = 2; j < i; j++) {
          if (i % j == 0) {
              flag = 1;
              break;
          }
      }
  
      if (i > 1 && flag == 0) {
          arr.push(i);
      }
  }

  document.getElementById("result").innerHTML = "[ "+ arr + " ]";

}
