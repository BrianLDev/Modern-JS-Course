// Listen for submit event (note that submit "bubbles up" to parent loan-form element)
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e) {
  alert('calculating...');
  // UI Variables
  const amount = document.getElementById('amount');
  const rate = document.getElementById('rate');
  const term = document.getElementById('term');
  const UImonthlyPmt = document.getElementById('mthly-pmt');
  const UInumPmts = document.getElementById('num-pmts');
  const UItotalPmts = document.getElementById('total-pmts');
  const UItotalPrincipal = document.getElementById('total-principal');
  const UItotalInterest = document.getElementById('total-interest');

  // TODO: ALLOW FOR OTHER COMPOUNDING INTERVALS LIKE YEARLY, QUARTERLY, SEMI-ANNUAL
  const principal = parseFloat(amount.value); // convert amount to a float
  const compoundingRate = parseFloat(rate.value) / 100 / 12; // convert to float and monthly
  const compoundingTerm = parseFloat(term.value) * 12;

  // Calculate monthly payment
  // const fv = (principal * Math.pow(1 + compoundingRate, compoundingTerm)).toFixed(2);
  const numerator = compoundingRate * principal * Math.pow(1+compoundingRate, compoundingTerm);
  const denominator = Math.pow(1+compoundingRate, compoundingTerm)-1;
  const monthlyPmt = (numerator / denominator).toFixed(2);
  const totalPmts = (monthlyPmt * compoundingTerm).toFixed(2);
  const totalInterest = (totalPmts - principal).toFixed(2);

  UImonthlyPmt.value = monthlyPmt;
  UInumPmts.value = compoundingTerm;
  UItotalPmts.value = totalPmts;
  UItotalPrincipal.value = principal;
  UItotalInterest.value = totalInterest;
  
  e.preventDefault();
}