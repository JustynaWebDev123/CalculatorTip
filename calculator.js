
function calculateMyTip(){
    let getMoney = document.getElementById("money").value;
    let getService = document.getElementById("service").value;
    let customers = document.getElementById("people").value;
  
  if ( getMoney === "" || getService === "0") {
    alert("Please enter amount of money");
    return ;
  }
  
  if(customers === "" || customers <=1){
    customers = 1;
    document.getElementById("each").style.display = "none";
  } else {
  document.getElementById("each").style.display = "block";
  }
  
  let total = (getMoney * getService)/customers;
  total = Math.round(total * 100)/ 100;
  total = total.toFixed(2);
  
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
  }
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  document.getElementById("btn").onclick = function() {
    calculateMyTip();
  
  }
  