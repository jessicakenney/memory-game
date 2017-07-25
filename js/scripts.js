
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
    var tileValues=["A","B"];
    var newTiles = [];
    //createBoard();
    for (var i=0; i < tileValues.length; i++) {
      newTiles[i] = new Tile(tileValues[i],"tile-"+i);
      $("#tile-"+i).css("background-color","red");
    }

    $(".col-md-4").click(function() {
      var id = $(this).attr("id");
      var re=/\d+/;
      var idNum = re.exec(id);

      $(this).append("value: "+newTiles[idNum].value);
      console.log($(this));
      //debug
      //var id = event.target.id;

      console.log("id= "+ id);
    });
  });
});
