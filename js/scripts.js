
function Tile (value,id) {
  this.value = value;
  this.id = id;
}
function createBoard(){
  //create Tiles with id and values
  // currently using length of tileValues array to
  //decide number of tiles.
  // add shuffle tileValues function
  for (var i=0; i < tileValues.length; i++) {
    newTiles[i] = new Tile(tileValues[i],"tile-"+i);
    console.log("newTile for loop: "+newTiles[i].value);
  }
};

function flipTile (tile,){

  if (turnValues.length < 2) {
    turnValues.push(tile.value);
    turnIds.push(tile.id);
    console.log("turnValues :"+turnValues);
  }
  if (turnValues.length === 2) {
    alert("2flips");
    var match = (turnValues[0] === turnValues[1]);
    console.log(match);
  }
  if (!match) {
    //flip the cards back over.
    alert("no match");
    turnValues=[];
    turnIds=[];
  } else {
    //dont flip the cards back over.
    alert("MATCH");

  }

}

var tileValues=["A","B","A","B","C","C"];
var newTiles = [];
var turnValues = [];
var turnIds = [];


$(document).ready(function(){

  $(".board").submit(function(event){
    event.preventDefault();
    //when submit a new game values are assigned ids
    //first step is to show id
    createBoard();

    $(".col-md-2").click(function() {

      //determine which Tile is clicked to
      //retrieve the value
      var id = $(this).attr("id");
      var re=/\d+/;
      var idNum = re.exec(id);
      $(this).append("value: "+newTiles[idNum].value);

      flipTile(newTiles[idNum]);

      //debug
      console.log($(this));
      console.log("id= "+ id);

    });
  });
});
