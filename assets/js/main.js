$(function() {
  
  $(".chosen-select").chosen({
  	placeholder_text_single: "Choose your job",
    no_results_text: "We don't support your profile yet - click <b>Explore all rights</b> below."
  });

  $(".chosen-select").on('change', function(evt, params) {
    $("a.learn-rights").attr("href", params["selected"])
  });

  var comboplete = new Awesomplete('input.dropdown-input-index', {
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

  Awesomplete.$('input.dropdown-input-index').addEventListener("awesomplete-selectcomplete", function() {
      updateLearnMore();
  });

  $('input.dropdown-input-index').on('input propertychange paste', function() {
      updateLearnMore();
  });


  function updateLearnMore() {
   var url = $("#workerprofiles option[value='" + $('input.dropdown-input-index').val() + "']").attr('data-url');
        if(url !== undefined && url !== null) { 
          $("a.learn-rights").attr("href", url)
        } 
        else { 
        $("a.learn-rights").attr("href", "profiles/all.html")
    }
 }


});