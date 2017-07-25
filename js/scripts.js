
function Tile () {
  this.value = value;
  this.id = id;
}


$(document).ready(function(){

  $(".board").submit(function(event){
    event.preventDefault();
    alert("hi");
    //when submit a new game values are assigned ids
    //first step is to show id
    $("#tile-0").css("background-color","red");
  });

  $(".col-md-4").click(function() {
    $(this).append("X");
    var id = event.target.id;
    console.log("id= "+ id);
  });

});
