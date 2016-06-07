/* Count Up By */

$(function(){
  $("form#count").submit(function(event){
    $("#countednumbers").html("");

    // Removes error messages from form when re-submitting
    $(".form-group").removeClass("has-error");
    $(".error-msg").remove();
    // Error messages
    var errorNumber = "<span class='error-msg'>Please enter an integer (no letters).</span>  ";
    var errorNeg = "<span class='error-msg'>Please enter a non-negative number.</span>  ";
    var errorLarger = "<span class='error-msg'>'Count By' number must be less than 'Count To' number.</span>  ";
    var div = document.getElementById('countednumbers');


    // Gets number to count to from user
    var countTo = parseInt($("input#count-to").val());
    console.log(countTo);
    var countBy = parseInt($("input#count-by").val());
    console.log(countBy);

    // Checks if response is a number or not, then checks if negative
    if (countTo !== countTo) {
      $(".form-group-to").addClass("has-error").append(errorNumber);
    } else if (countTo < 0){
      $(".form-group-to").addClass("has-error").append(errorNeg);
    }
    if (countBy !== countBy) {
      $(".form-group-by").addClass("has-error").append(errorNumber);
    } else if (countBy < 0){
      $(".form-group-by").addClass("has-error").append(errorNeg);
    }

    // Checks if countBy is bigger than countTo
    if (countBy > countTo){
      $(".form-group-by").addClass("has-error").append(errorLarger);
    }

    for (var index = countBy; index <= countTo; index += countBy){
      div.innerHTML = div.innerHTML + index + ", ";
    }

    event.preventDefault();
  });

});
