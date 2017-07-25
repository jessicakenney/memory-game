
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

function flipTile (tile){

  if ((turnValues.length < 2) && (tilesFlipped < numTiles)) {
    turnValues.push(tile.value);
    turnIds.push(tile.id);
    console.log("turnValues :"+turnValues);
  } else if (tilesFlipped === numTiles){
      alert("Game Over");
  }
  if (turnValues.length === 2) {
    var match = (turnValues[0] === turnValues[1]);
    if (!match) {
      //flip the cards back over!
      alert("no match");
    } else {
      //dont flip the cards back over.
      alert("MATCH");
      tilesFlipped += 2;
      console.log("TilesFlipped " + tilesFlipped);
    }
    turnValues=[];
    turnIds=[];
  }
}

var tileValues=["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"];
var numTiles = tileValues.length;
var newTiles = [];
var turnValues = [];
var turnIds = [];
var tilesFlipped = 0;


$(document).ready(function(){

  $(".formButton").submit(function(event){
    event.preventDefault();
    alert("hi");
    //when submit a new game values are assigned ids
    //first step is to show id
    createBoard();
    $(".tileContainer").show();


    $(".col-md-3").click(function() {

      //determine which Tile is clicked to
      //retrieve the value
      var id = $(this).attr("id");
      var re=/\d+/;
      var idNum = re.exec(id);
      $(this).append("value: "+newTiles[idNum].value);

      flipTile(newTiles[idNum]);
      //$("#"+idsToFlipBack[0]).css("background-color","red");
      //$("#"+idsToFlipBack[1]).css("background-color","red");
      //debug
      //console.log($(this));
      //console.log("id= "+ id);

    });
  });
});
