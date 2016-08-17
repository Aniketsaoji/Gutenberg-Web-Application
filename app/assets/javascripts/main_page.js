// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(e){
    console.log("in main_page.js");
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
      console.log("in function");
      e.preventDefault();
      var param = $(this).attr("href").replace("#","");
      var concept = $(this).text();
      $('.search-panel span#search_concept').text(concept);
      $('.input-group #search_param').val(param);
  });
});