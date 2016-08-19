$(document).ready(function(){

  var pingPong = function(number){
    for(i=1;i<=number;i++){
      if(i % 3 === 0){
        $("#outputList").append("<li> ping </li>");
      }
      else if(i % 5 === 0){
        $("#outputList").append("<li> pong </li>");
      }
      else{
        $("#outputList").append("<li>" + i + "</li>");
      }
    }
  }

  $("#userInput").submit(function(event){
    event.preventDefault();
    var number= parseInt($("#userNumber").val());
    $("#outputList").text("");
    pingPong(number);
  })
});
