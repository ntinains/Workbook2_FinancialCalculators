// Formula for calculating CD Interest: A = P(1+r/n)^(nt)
// A is total CD is worth at end of term
// P is prinicpal
// R is rate 
// n is number of times that interest in compounded every year
// t is time or number of years until maturity date

const form =document.getElementById("calculator-form");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    const amount = principal * (1 + rate / 100) ** time;
    const interest = amount - principal;

resultDiv.innerHTML = `
<p>After ${time} years, at annual interst rate of ${rate}%, </p>
<p>the principal of $${principal} will grow to $${amount.toFixed(2)},</p>
<p>with an interest of $${interest.toFixed(2)}.</p>`;

});
