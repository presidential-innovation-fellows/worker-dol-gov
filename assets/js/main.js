$(function() {
  
  $(".chosen-select").chosen({
  	placeholder_text_single: "Choose your job",
    no_results_text: "We don't support your profile yet - click <b>Explore all rights</b> below."
  });

  $(".chosen-select").on('change', function(evt, params) {
    $("a.learn-rights").attr("href", params["selected"])
  });

  $('input.index-input').on('input propertychange paste', function() {
  		var url = $("#workerprofiles option[value='" + $('input.index-input').val() + "']").attr('data-url');
        if(url !== undefined && url !== null) { 
        	$("a.learn-rights").attr("href", url)
        }	
        else { 
    		$("a.learn-rights").attr("href", "profiles/all.html")
		}
  });

  var comboplete = new Awesomplete('input.dropdown-input', {
  minChars: 0,
  });
  
  Awesomplete.$('.dropdown-btn').addEventListener("click", function() {
  if (comboplete.ul.childNodes.length === 0) {
    comboplete.minChars = 0;
    comboplete.evaluate();
  }
  else if (comboplete.ul.hasAttribute('hidden')) {
    comboplete.open();
  }
  else {
    comboplete.close();
  }
});

  document.querySelector('input.dropdown-input').addEventListener('awesomplete-selectcomplete', function(evt){
    var url = $("#mylist option[value='" + $('input.dropdown-input').val() + "']").attr('data-url');
    window.location.href = url;
  })


});