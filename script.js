document.getElementById("submitButton").onclick = () => {
    let temp= document.getElementById("textBox").value;
    temp = Number(temp);
    let answer= document.getElementById("answer");  
    if (document.getElementById("celsius").checked == true){
      answer.innerHTML= (temp - 32) * (5 / 9) + "    degree of celsius";
  
    }  else if (document.getElementById("fahrenheit").checked == true){
      answer.innerHTML= (temp * 9 / 5) + 32 + "    degree of fahrenheit";
    }
       else{
          answer.innerHTML = "choose a unit";
    }
    }