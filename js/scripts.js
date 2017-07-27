
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
  }
};

function flipTile (tile) {
  //check if the tile is empty first
  var string = $("#"+tile.id).text();
  var empty = /^\s*$/.test(string);
  if ((turnValues.length <= 2) && (tilesFlipped < numTiles) && empty) {
    $("#"+tile.id).addClass("tileFront");
    $("#"+tile.id).text(tile.value);

    turnValues.push(tile.value);
    turnIds.push(tile.id);
    console.log("turnValues :"+turnValues);
    console.log("turnValueslength :"+turnValues.length);
  }
  if (turnValues.length === 2) {
    var match = (turnValues[0] === turnValues[1]);
    if (!match) {
      //flipBack(turnIds[0]);
      //flipBack(turnIds[1]);
      //setTimeout(function() {flipBack(turnIds[0])}, 700);
      //setTimeout(function() {flipBack(turnIds[1])}, 700);
      setTimeout(flipBack(turnIds[0]), 1000);
      setTimeout(flipBack(turnIds[1]), 20000);
    } else {
      //match condition
      tilesFlipped += 2;
      console.log("TilesFlipped " + tilesFlipped);
      if (tilesFlipped === numTiles) {
        alert ("gameover");
      }
    }
    //clear
    turnValues=[];
    turnIds=[];
  }
}

function flipBack (id){
  $("#"+id).text("");
  $("#"+id).removeClass("tileFront");
}

var tileValues=["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"];
var numTiles = tileValues.length;
var newTiles = [];
var turnValues = [];
var turnIds = [];
var tilesFlipped = 0;

var seconds = 0;
var minutes = 0;
var hours = 0;

function add() {
  seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  console.log(hours+ "hr" +minutes+ "min" +seconds + "sec ");
  return $("#clock").text(hours + ":" + minutes + ":" + seconds);
;
}

function timer(){
  setInterval(function(){add();
  }, 1000);

}
function stop() {
  clearInterval();
}


$(document).ready(function(){

  $(".formButton").submit(function(event){
    event.preventDefault();
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
      //debug
      console.log($(this));
      console.log(id);

      flipTile(newTiles[idNum]);
    });
    console.log(seconds);
    timer();
    stop();
  });
  // $("#clock").click(function() {

  // });
});
