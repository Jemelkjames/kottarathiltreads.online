function calculateSIP() {
    var investmentAmount = document.getElementById("investmentAmount").value;
    var numberOfMonths = document.getElementById("numberOfMonths").value;
    var rateOfReturn = document.getElementById("rateOfReturn").value;
    
    var totalInvestment = investmentAmount * numberOfMonths;
    var expectedReturn = totalInvestment * (rateOfReturn / 100);
    
    document.getElementById("totalInvestment").innerHTML = totalInvestment;
    document.getElementById("expectedReturn").innerHTML = expectedReturn;
    
  }

