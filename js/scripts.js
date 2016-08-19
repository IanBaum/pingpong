$(document).ready(function(){
  var button = 0;

  var pingPong = function(number){
    for(i=1;i<=number;i++){
      if(i % 3 === 0 && i % 5 != 0){
        $("#outputList").append("<li> ping </li>");
      }
      else if(i % 5 === 0 && i % 3 != 0){
        $("#outputList").append("<li> pong </li>");
      }
      else if(i % 5 === 0 && i % 3 === 0){
        $("#outputList").append("<li> pingpong </li>");
      }
      else{
        $("#outputList").append("<li>" + i + "</li>");
      }
    }
  }
  var badgerMushroom = function(number){
    for(i=1;i<=number;i++){
      if(i % 3 === 0 && i % 5 != 0){
        $("#outputList").append("<li><img src='img/mushroom.png'></li>");
      }
      else if(i % 5 === 0 && i % 3 != 0){
        $("#outputList").append("<li><img src='img/mushroom.png'></li>");
      }
      else if(i % 5 === 0 && i % 3 === 0){
        $("#outputList").append("<li><img src='img/snake.png'></li>");
      }
      else{
        $("#outputList").append("<li><img src='img/badger.png'></li>");
      }
    }
  }
  $("#mainButton").click(function(){
    button = 0;
  });
  $("#badgerButton").click(function(){
    button = 1;
  });
  $("#userInput").submit(function(event){
    event.preventDefault();
    var number= parseInt($("#userNumber").val());
    $("#outputList").text("");
    if(button === 0){
      pingPong(number);
    }
    else if (button === 1){
      $("#outputList").text("");
      badgerMushroom(number);
    }
  })
});
