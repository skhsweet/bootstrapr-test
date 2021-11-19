// Show all the panels open again when checklist selected
$(document).on("click", ".checklist-refresh", function(){

  // Show panels
  $(this).parent().parent().find(".collapse").collapse("show");

  // Remove the checked checkboxes
  $(this).parent().parent().find(".btn-link i").addClass("bi-square").removeClass("bi-check-square");

});

// Change the icon when panel header clicked on
$(document).on("click", ".br-checklist-div .btn-link", function(){

  // If checked, uncheck. And vice-versa
  if ( $(this).find("i").hasClass("bi-square")) {
    $(this).find("i").removeClass("bi-square").addClass("bi-check-square");
  } else {
    $(this).find("i").removeClass("bi-check-square").addClass("bi-square");
  }
});