
function Tile (value,id) {
  this.value = value;
  this.id = id;
}
// function createBoard(){
// };


$(document).ready(function(){

  $(".board").submit(function(event){
    event.preventDefault();
    //when submit a new game values are assigned ids
    //first step is to show id
    var tileValues=["A"];

    //createBoard();
    var newTile = new Tile(tileValues[0],"tile-0");
    console.log(tileValues[0]);
    $("#tile-0").css("background-color","red");
    console.log("newTile value: "+newTile.value);

    $(".col-md-4").click(function() {
      $(this).append("value: "+newTile.value);
      console.log($(this));
      //debug
      //var id = event.target.id;
      var id = $(this).attr("id");
      console.log("id= "+ id);
    });
  });
});
