

function Tile (value,id,imgClass) {
  this.value = value;
  this.id = id;
  this.imgClass = imgClass;
}
function createBoard(){
  //turn off shuffle during debug
  //tileValues.shuffle();
  //can i just get the imageClass here to be sync'ed with vals
  var tileImgClasses = tileValues.map(function(value) {
    return getImageClass(value);
  });
  for (var i=0; i < tileValues.length; i++) {
    newTiles[i] = new Tile(tileValues[i],"tile-"+i,tileImgClasses[i]);
    console.log("newTiles "+newTiles[i].value,newTiles[i].id,newTiles[i].imgClass);
  }
}
Array.prototype.shuffle = function (){
  alert("shuffle");
  for (var index = this.length - 1; index > 0; index-- ) {
    var randomIndex = Math.floor(Math.random() * (index + 1));
    var temp = this[index];
    this[index] = this[randomIndex];
    this[randomIndex] = temp;
    console.log(this[randomIndex],randomIndex);
  }
  console.log("shuffled array: "+this);
}
function getImageClass(value){
  for (var index = 0; index < imageClasses.length; index++ ) {
    var string = imageClasses[index];
    var result = /[A-H]$/.exec(string);
    var match = (value === result[0]);
    //console.log("string "+string+" foo "+result+" value "+value,match);
    if (match){
      return imageClasses[index];
    }
  }
}
function getIdValue(id){
  console.log("getIdValue  "+id);
}

function flipTile (tile) {
  //check if the tile is empty first
  var string = $("#"+tile.id).text();
  var empty = /^\s*$/.test(string);
  if ((turnValues.length <= 2) && (tilesFlipped < numTiles) && empty) {
    //flip tiles
    if (isDefault){
      $("#"+tile.id).addClass(defaultClass);
    } else {
      var imgClass = getImageClass(tile.value);
      $("#"+tile.id).addClass(imgClass);
    }
    $("#"+tile.id).text(tile.value);

    turnValues.push(tile.value);
    turnIds.push(tile.id);
    console.log("turnValues :"+turnValues);
    console.log("turnValueslength :"+turnValues.length);
  }
  if (turnValues.length === 2) {
    var match = (turnValues[0] === turnValues[1]);
    if (!match) {
      turnIds.forEach (function(id) {
        setTimeout(function() {flipBack(id);}, 700);
      });
    } else {
      //match condition
      tilesFlipped += 2;
      console.log("TilesFlipped " + tilesFlipped);
      if (tilesFlipped === numTiles) {
        //alert ("gameover");
        newTiles.forEach (function(tile){
            flipBack(tile.id);
        });
        tilesFlipped = 0;
        newTiles = [];
        setTimeout (function () {$(".tileContainer").hide();},1000);
      }
    }
    turnValues=[];
    turnIds=[];
  }
}
function flipBack (id){
  console.log("flipback: "+ id);
  $("#"+id).text("");
  //need to figure out imageClass
  if (isDefault) {
    $("#"+id).removeClass(defaultClass);
  } else {
    var val = getIdValue(id);
    var img = getImageClass(val);
    $("#"+id).removeClass(img);
  }
}

var tileValues=["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"];
var numTiles = tileValues.length;
var newTiles = [];
var turnValues = [];
var turnIds = [];
var tilesFlipped = 0;
//using tileFront for all and .text value
var isDefault = 1;
var defaultClass = "tileFront";
var imageClasses = ["img0-A","img0-A","img1-B","img1-B","img2-C","img2-C","img3-D","img3-D","img4-E","img4-E","img5-F","img5-F","img6-G","img6-G","img7-H","img7-H"];

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
      //debug
      console.log($(this));
      console.log(id);

      flipTile(newTiles[idNum]);
    });
  });
});
