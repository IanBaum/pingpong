$(document).ready(function(){

  var pingPong = function(number){
    
  }

  $("#userInput").submit(function(event){
    event.preventDefault();
    var number= parseInt($("#userNumber").val());
    pingPong(number);
  })
});
