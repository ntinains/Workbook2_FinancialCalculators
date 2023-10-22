// P(r(1+r)^n/(1+r)^n-1) 
// n= number of payments over loan's lifetime
// t=monthly interest rate

const calculateMonthlyPayment = () => {
  const principal = document.getElementById("principal").value;

  let interestRate = document.getElementById("interestRate").value;

  let lengthOfLoan = document.getElementById("lengthOfLoan").value;

  if (principal && interestRate && lengthOfLoan) {
    interestRate = interestRate / 100 / 12;
    lengthOfLoan = lengthOfLoan * 12;
    const interestRateToPower = (interestRate + 1) ** lengthOfLoan;

    let payment =
      principal *
      (interestRate * (interestRateToPower / (interestRateToPower - 1)));
    document.getElementById("result").innerText = "$" + payment.toFixed(2);
    document.getElementById("leftColumn").style.opacity = 1;
  }
};

// function calculateMortgage(principal, interestRate, loanLengthYears) {
  //const monthlyInterestRate = interestRate / 12;
 // const numberOfPayments = loanLengthYears * 12;

 // const monthlyPayment =
 //   principal *
 //   ((monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfPayments) /
  //    ((1 + monthlyInterestRate) ** numberOfPayments - 1));
      
 // const totalPayed = monthlyPayment * 12 * loanLengthYears;
 // monthlyPayment = monthlyPayment.toFixed(2);
 // const totalInterest = (totalPayed - principal).toFixed(2);
//}