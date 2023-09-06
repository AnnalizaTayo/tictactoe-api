# tictactoe-api

Tic-Tac-Toe is a 2 player game typically played on a 3x3 grid. The player is identified as X, which is most of the time the first player, and O, which is the second player. Each player will have their turn to place their symbol on an empty slot on the board one after another. The main goal of players in the game is to be the first to form a horizontal, vertical or diagonal line of their symbols. If the board is filled with symbols and no winner is determined, the game will end in a draw.

I've created this express backend to serve the Tic-Tac-Toe game frontend on https://codepen.io/annaliza-arboleda-tayo/pen/MWZjMgy.

The user interface on the given link above interacts with this backend to roughly initiate the game and determine the winner. The winner is determined by comparing the current player's board standing to the pre-defined array of winning instances in line 12.

I've deployed this backend on a live server, impleting cors to allow access from anywhere anytime. This however, limits the project since it is designed for single browser use only.

Further update can be made on this project for future upgrade by using sessions and database to identify the users playing from different browsers and to save the progress and game hystory of each player.