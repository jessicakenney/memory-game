function Tile (value,id) {
  this.value = value;
  this.id = id;
}
function createBoard(){
  //Turn off shuffle during debug
  //tileValues.shuffle();
  for (var i=0; i < tileValues.length; i++) {
    newTiles[i] = new Tile(tileValues[i],"tile-"+i);
    if (debugMode) {console.log("newTiles "+newTiles[i].value,newTiles[i].id);}
  }
}
Array.prototype.shuffle = function (){
  for (var index = this.length - 1; index > 0; index-- ) {
    var randomIndex = Math.floor(Math.random() * (index + 1));
    var temp = this[index];
    this[index] = this[randomIndex];
    this[randomIndex] = temp;
  }
  if (debugMode) {console.log("shuffled array: "+this);}
}

function getIdValue(id){
  var value = $("#"+id).text();
  console.log("getIdValue  "+id+" value "+value);
  return value;
}

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
    //Flip tiles
    if (isDefault){
      $("#"+tile.id).addClass(defaultClass);
    } else {
      $("#"+tile.id).addClass("img-"+tile.value);
    }
    $("#"+tile.id).text(tile.value);
    turnValues.push(tile.value);
    turnIds.push(tile.id);
  }
  if (turnValues.length === 2) {
    var match = (turnValues[0] === turnValues[1]);
    if (!match) {
      turnIds.forEach (function(id) {
        setTimeout(function() {flipBack(id);}, 700);
      });
    } else {
      //Match condition
      tilesFlipped += 2;
      if(debugMode) {console.log("TilesFlipped " + tilesFlipped);}
      turnIds.forEach (function(id) {
      });
      //End of game
      if (tilesFlipped === numTiles) {
        //End timer here
        newTiles.forEach (function(tile){
          setTimeout(function() {flipBack(tile.id);}, 500);
        });
        tilesFlipped = 0;
        newTiles = [];
        setTimeout (function () {$(".tileContainer").hide();},1000);
        //$("#tile-5").text("Game Complete");
      }
    }
    //Clear
    turnValues=[];
    turnIds=[];
  }
}
function flipBack (id){
  if (debugMode) {console.log("flipback: "+ id);}
  //Remove styling class and clear value
  if (isDefault) {
    $("#"+id).removeClass(defaultClass);
  } else {
    var val = getIdValue(id);
    $("#"+id).removeClass("img-"+val);
  }
  $("#"+id).text("");
}

var tileValues=["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"];
var numTiles = tileValues.length;
var newTiles = [];
var turnValues = [];
var turnIds = [];
var tilesFlipped = 0;
var isDefault = 0;
var debugMode = 1;
var defaultClass = "tileFront";
var imageClasses = ["img-A","img-A","img-B","img-B","img-C","img-C","img-D","img-D","img-E","img-E","img-F","img-F","img-G","img-G","img-H","img-H"];

// ------------------FRONT END------------------------------------
$(document).ready(function(){

  $(".formButton").submit(function(event){
    event.preventDefault();

    $(".tileContainer").show();
    createBoard();

    $(".col-md-3").click(function() {

      //determine which Tile is clicked to
      //retrieve the value
      var id = $(this).attr("id");
      var re=/\d+/;
      var idNum = re.exec(id);
      if (debugMode){
        console.log($(this));
        console.log(id);
      }

      flipTile(newTiles[idNum]);

      // $("#clock").click(function()
      //   alert("clockckicked")
      //   var myInterval = setInterval(function(){add();}, 1000);
      // });
    });
  });
});
