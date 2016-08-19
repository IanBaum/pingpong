$(document).ready(function(){

  var pingPong = function(number){
    for(i=1;i<=number;i++){
      $("#outputList").append("<li>" + i + "</li>");
    }
  }

  $("#userInput").submit(function(event){
    event.preventDefault();
    var number= parseInt($("#userNumber").val());
    $("#outputList").text("");
    pingPong(number);
  })
});
