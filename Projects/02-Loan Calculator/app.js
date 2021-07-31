// Hide the results when page first loaded/reloaded
document.addEventListener('DOMContentLoaded', hideResults);

// Listen for submit event (note that submit "bubbles up" to parent loan-form element)
document.getElementById('loan-form').addEventListener('submit', beginResults);



// Hide results
function hideResults() {
  document.getElementById('results').hidden = true;
  document.getElementById('loading').style.display = 'none';
}

// Begin Results Process
function beginResults(e) {
  hideResults();
  // show loader
  document.getElementById('loading').style.display = 'block';
  // then calculate results after timeout
  setTimeout(calculateResults, 500);

  e.preventDefault();
}

// Calculate Results
function calculateResults() {
  // UI Variables
  const amount = document.getElementById('amount');
  const rate = document.getElementById('rate');
  const term = document.getElementById('term');
  const UImonthlyPmt = document.getElementById('mthly-pmt');
  const UInumPmts = document.getElementById('num-pmts');
  const UItotalPmts = document.getElementById('total-pmts');
  const UItotalPrincipal = document.getElementById('total-principal');
  const UItotalInterest = document.getElementById('total-interest');

  hideResults();

  // TODO: ALLOW FOR OTHER COMPOUNDING INTERVALS LIKE YEARLY, QUARTERLY, SEMI-ANNUAL
  const principal = parseFloat(amount.value); // convert amount to a float
  const compoundingRate = parseFloat(rate.value) / 100 / 12; // convert to float and monthly
  const compoundingTerm = parseFloat(term.value) * 12;

  // Calculate monthly payment
  const numerator = compoundingRate * principal * Math.pow(1+compoundingRate, compoundingTerm);
  const denominator = Math.pow(1+compoundingRate, compoundingTerm)-1;
  const monthlyPmt = (numerator / denominator).toFixed(2);

  // validate monthly Pmt is valid (finite) then populate the UI
  if (isFinite(monthlyPmt)) {
    const totalPmts = (monthlyPmt * compoundingTerm).toFixed(2);
    const totalInterest = (totalPmts - principal).toFixed(2);

    // unhide results UI
    document.getElementById('results').hidden = false;

    UImonthlyPmt.value = monthlyPmt;
    UInumPmts.value = compoundingTerm;
    UItotalPmts.value = totalPmts;
    UItotalPrincipal.value = principal.toFixed(2);
    UItotalInterest.value = totalInterest;
  } else {
    showError('Error: Please double check values');
  }
}

// Show Error
function showError(error) {
  hideResults();
  
  // Get elements from UI
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Create a div
  const errorDiv = document.createElement('div');

  // Add class
  errorDiv.className = 'alert alert-danger';  // bootstrap classes for alert

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000); // 3000ms = 3s
}

function clearError() {
  document.querySelector('.alert').remove();
}