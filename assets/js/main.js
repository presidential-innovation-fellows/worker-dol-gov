var concerns = document.getElementsByClassName('js-concern');
var details = document.getElementsByClassName('js-concern-details');
for (var i = 0; i < concerns.length; i++) {
  concerns[i].addEventListener('click', function(e) {
    var id = e.target.getAttribute('aria-controls');
    e.target.setAttribute('aria-selected', 'true');
    [].forEach.call(details, function(div) {
      div.setAttribute('hidden', '');
    });
    document.getElementById(id).removeAttribute('hidden');
  });
}
