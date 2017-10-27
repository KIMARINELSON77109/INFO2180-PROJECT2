/*                     EXTRA FEATURE ADDED

	- Added a feature to change the background image of the puzzle using a function called changeBackground()
		If the user pushes the change picture button then the picture of the puzzle is changed to
		 any 1 of the 4 added background pictures.
*/
var tiles; var emptySlot_X = 300; var emptySlot_Y = 300; var piece

"use strict";
window.onload = function()
{
  //Creates the change picture button and appends it to the div with class "controls"
  $("#controls").append("<button id = 'Button'>Change picture</button>");
  tiles = $("#puzzlearea")[0].children;
  $("#shufflebutton")[0].onclick = shufflePieces;
  $("#Button").on("click",function(){
    changeBackground()
    shufflePieces()
  });

  for(i = 0; i < tiles.length; i++)
    {
      tiles[i].className = "puzzlepiece";

      //calculate the left style and top style pixel position of the div's to formulate the game
      tiles[i].style.left = (i % 4 * 100) + "px";
			tiles[i].style.top = (parseInt(i / 4) * 100) + "px";

      console.log( (i % 4 * 100),(parseInt(i / 4) * 100))
      // Evaluates to "-XXX px -YYY px" to position the image on the squares using X and Y coordinates
      tiles[i].style.backgroundPosition = "-" + tiles[i].style.left + " " + "-" + tiles[i].style.top;

      /*When the mouse over event-handler is ran the isSquareMovable function check if the tile is movable
      and add the movablepiece class to that div tile*/
      tiles[i].onmouseover = isSquareMovable;

      /*When the mouse out event-handler is ran the RemoveMovablePiece function which remove the movablepiece
      class from the div tile*/
      tiles[i].onmouseout = RemoveMovablePiece;

      /*When a movable tile is clicked the moveTile function the ran the and the clicked tile is swaaped with the
       empty space tile*/
      tiles[i].onclick = moveTile;
    }
    //Background is select at random when the game starts
   changeBackground();
 }

  /*This function checks if a tile is valid to be swapped with the empty tile and if it is valid the "movablepiece" class
    is added to the div tile*/
  function isSquareMovable()
  {
    yValue = parseInt(this.style.top); xValue = parseInt(this.style.left);
    if (yValue == emptySlot_Y && xValue == (emptySlot_X-100) || yValue == emptySlot_Y && xValue == (emptySlot_X+100)
    || yValue == (emptySlot_Y-100) && xValue == emptySlot_X ||yValue == (emptySlot_Y+100) && xValue == emptySlot_X)
    {
      (this).classList.add("movablepiece");
    }
  }
  // This function removes the "movablepiece" class after the mouse leaves the tile which that class was applied to.
  function RemoveMovablePiece()
    {
      (this).classList.remove("movablepiece")
    }

//This function checks if a tile can be swapped with the empty tile and if it can then it swaps it
  function moveTile()
  {
    var yValue = parseInt(this.style.top);
		var xValue = parseInt(this.style.left);
		if (yValue == emptySlot_Y && xValue == (emptySlot_X-100) || yValue == emptySlot_Y && xValue == (emptySlot_X+100) ||
    yValue == (emptySlot_Y-100) && xValue == emptySlot_X || yValue == (emptySlot_Y+100) && xValue == emptySlot_X)
    {
			this.style.top = emptySlot_Y + "px";
			this.style.left = emptySlot_X + "px";
			emptySlot_Y = yValue;
			emptySlot_X = xValue;
		}
  }
//this function gets the tile given its top and left pixel position
  function getStyle(top, left)
  {
		for(var i =0; i < tiles.length; i++)
    {
			if(tiles[i].style.top==top && tiles[i].style.left==left)
      {
				piece = tiles[i];
				return piece;
			}
		}
  }

  function shufflePieces()
  {
    for(var i = 0; i < 200; i++)
    {
      var RanNummber = Math.floor (Math.random () * 4);
      var yValue ;
      var xValue;
      if (RanNummber == 0)
      { /* if RanNummber is zero, a left and top style is use as inputs in getsyle to find the tile that has that style position,
        when it is found that tile's style is swapped with the empty tile style, hence moving the tile to the empty sapce*/
        (getStyle((emptySlot_Y-100)+"px", emptySlot_X +"px"))|| getStyle((emptySlot_Y+100)+"px", emptySlot_X +"px");
        console.log(piece)
        yValue = parseInt(piece.style.top);
        xValue = parseInt(piece.style.left);
        piece.style.top = emptySlot_Y + "px";
        piece.style.left = emptySlot_X  + "px";
        emptySlot_Y = yValue;
        emptySlot_X  = xValue;
      }
      else if (RanNummber == 1)
      {
        /* if RanNummber is one, a left and top style is use as inputs in getsyle to find the tile that has that style position,
          when it is found that tile's style is swapped with the empty tile style, hence moving the tile to the empty sapce*/
        (getStyle(emptySlot_Y+"px", (emptySlot_X-100)+"px")) || getStyle(emptySlot_Y+"px", (emptySlot_X+ 100)+"px");
        yValue = parseInt(piece.style.top);
        xValue = parseInt(piece.style.left);
        piece.style.top = emptySlot_Y + "px";
        piece.style.left = emptySlot_X + "px";
        emptySlot_Y = yValue;
        emptySlot_X  = xValue;
      }
      else if (RanNummber == 2)
      {
        /* if RanNummber is two, a left and top style is use as inputs in getsyle to find the tile that has that style position,
          when it is found that tile's style is swapped with the empty tile style, hence moving the tile to the empty sapce*/
        getStyle((emptySlot_Y+100)+"px", emptySlot_X +"px") || (getStyle((emptySlot_Y-100)+"px", emptySlot_X+"px"));
        yValue = parseInt(piece.style.top);
        xValue = parseInt(piece.style.left);
        piece.style.top =emptySlot_Y+ "px";
        piece.style.left = emptySlot_X  + "px";
        emptySlot_Y = yValue;
        emptySlot_X  = xValue;
      }
      else
      {
        /* Otherwsie, a left and top style is use as inputs in getsyle to find the tile that has that style position,
          when it is found that tile's style is swapped with the empty tile style, hence moving the tile to the empty sapce*/
        getStyle(emptySlot_Y+"px", (emptySlot_X + 100)+"px") || (getStyle(emptySlot_Y+"px", (emptySlot_X-100)+"px"));
        yValue = parseInt(piece.style.top);
        xValue = parseInt(piece.style.left);
        piece.style.top = emptySlot_Y + "px";
        piece.style.left = emptySlot_X + "px";
        emptySlot_Y = yValue;
        emptySlot_X  = xValue;
      }
    }
 }
/*This function changes the background image of the puzzle based on random selection
of the fourth images available*/
 function changeBackground()
 {
   var pictures = ["background.jpg","itune.jpg","snap.jpg","sman.jpg"];
   var current = tiles[0].style.backgroundImage.slice(5, -2);
   var RanNum = Math.floor(Math.random() * pictures.length);

   while(current == pictures[RanNum])
   {
      RanNum = Math.floor(Math.random() * pictures.length);
   }
   for (var i = 0; i < tiles.length; i++)
   {
     tiles[i].style.backgroundImage = "url('" + pictures[RanNum] +"')";
   }
 }
