
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
  //want to start clock on first click
  if (firstClick){
    myInterval = setInterval(function(){add();}, 1000);
    firstClick = 0;
  }
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
        clearInterval(myInterval);
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

var firstClick= 1; //to start clock on firstClick
var seconds = 0;
var minutes = 0;
var hours = 0;

function add() {
  seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      minutes = minutes;
      if (minutes < 10) {
        minutes = "0" + minutes
      }
    }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
 $("#clock").text(hours + ":" + minutes + ":" + seconds);
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

      // $("#clock").click(function()
      //   alert("clockckicked")
      //   var myInterval = setInterval(function(){add();}, 1000);
      // });
    });
  });
});
