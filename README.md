# Memory Game

##### Epicodus Section: Intro to Programming Group Project

### By Kimberly Lu, Jessica Sheridan, Shyamal Punekar, Beth Hansen

## Description

This application is a memory tile game designed for users to click on a tile to
flip it and reveal an image to be matched with a second click. If two flips create a
match, the tiles will stay faced up. If no match is found, the tiles will flip
back over for another try. While the clock runs, continue flipping tiles until you find
all matches. Game ends when all of the tiles are matched and faced up. Enjoy seeing
how long it takes for you to complete all matches.

## Specifications:

| Behavior      | Input | Output |
| ------------- | ------------- | ------------- |
|create a board | submit new game | show 1 box |
|display a value for the tile | click on tile | A |
|display id for the tile | click on the tile | [A,tile-0]|
|create board with 2 tiles| submit new game | show 2 tiles |
|display value and id for both tiles| click on boxes | [A,tile-0][B,tile-1]|
|detect 2 tiles match | tile-0 then tile-1 click| [match]|
|detect 2 tiles unmatched | tile-0 then tile-1 click| [no match]|
|shuffle tile values for new board | submit new game and tile-0 click| [B]|
|detect when all cards have been matched | all matches made | game over|
|clock ticking| | |
|clock stops| | |
|when first tile is clicked ,clock starts| | |
|clock stops when game is complete | | |

## Setup
git clone https://github.com/jessicakenney/memory-game.git

## Support and Contact details
email with any questions: jessicakenney@yahoo.com,

## Known Issues/Bugs

## Technologies Used
JavaScript and jQuery

### Legal
This software is licensed under MIT Copyright (c) 2017 Jessica Sheridan
