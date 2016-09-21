$(function() {
  
  $(".chosen-select").chosen({
  	placeholder_text_single: "Choose your job",
    no_results_text: "We don't support your profile yet - click <b>Explore all rights</b> below."
  });

  $(".chosen-select").on('change', function(evt, params) {
    $("a.learn-rights").attr("href", params["selected"])
  });

});