// Find all concerns and details
var concerns = document.getElementsByClassName('js-concern');
var details = document.getElementsByClassName('js-concern-details');

// Takes a slug ID like i-was-discriminated-against and highlights the button and shows the details
function selectConcern(id) {
  // Deselect all concerns
  [].forEach.call(concerns, function(concern) {
    concern.setAttribute('aria-selected', 'false');
  });

  // Show all details
  [].forEach.call(details, function(div) {
    div.setAttribute('hidden', '');
  });

  // Select the concern that matches the ID and show the details group that matches the ID
  document.querySelector('[aria-controls="'+ id +'"]').setAttribute('aria-selected', 'true');
  document.getElementById(id).removeAttribute('hidden');
}

// If a query param was passed, go highlight the concerns
if (window.location.search.length > 0) {
  var q = window.location.search.split('?concern=')[1];
  selectConcern(q);
}

// Attach event listeners to all concerns
for (var i = 0; i < concerns.length; i++) {
  concerns[i].addEventListener('click', function(e) {
    var id = e.target.getAttribute('aria-controls');
    selectConcern(id);
  });
}
