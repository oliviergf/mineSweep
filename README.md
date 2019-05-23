# Introduction

As Merinio forays into the regulated world of unionized military installations, one of our potential customers has requested that we add a war situation simulator to our software. In the spirit of learning React, we have decided to host an internal RFP (Request for proposal) to provide them with the ideal solution.

They have specifically asked for a minefield simulator, not unlike the original minesweeper that could be found on every PC in existence. Being a governement entity, they have a long list of requirements and have even included some bonus features that would improve our standing.

# Requirements

In order to be considered in the RFP, your software must have at least the list of basic requirements, but would be better off with all the advanced requirements. It must also conform to the stringent IT requirements of the National Defence, otherwise they will block the project on grounds that it threatens national security.

### Basic Requirements

A recruit must be:

- able to see how many bombs remain.
- able to see how much time they have taken to locate all the bombs.
- able to reset the simulation at any time, losing all progress.
- able to click on a location to reveal it's contents.
- warned if they have clicked on a bomb, this ends the game unless bomb defusal has been be developed.
- informed of the number of adjacent bombs there are on a revealed cell, if there are no adjacent bombs, you can indicate this in the way you see fit.

### Advanced Requirements

A recruit must be:

- able to flag locations as suspected bomb sites.
- able to set the level of difficulty.

The game must:

- be able to expand the clicked location to make sure all unrevealed locations are surrounded by numbers.
- Automatically flag all locations once there are as many unrevealed locations as there are bombs.
- Show the classic smiley at the top of the window.

### IT Requirements

Due to internal security requirements, this application must:

- use the latest version of React.
- use Node.js if a server is required.
- use the latest version of redux for state management.
- run on the latest version of chrome.

### Bonus

- Be able to defuse a bomb if you click on one by accident, this should be accompanied by a skill test.
- Be able to change the colors of the interface.
- Be able to set a custom map size and number of bombs.
- make a noise when a bomb explodes.
- Add an extreme difficulty where it is possible to have multiple bombs per location.

### Extreme Bonus (requires a back end)

- Add a log in system
- Add a score board with monthly, yearly and all time high scores.
- Add a training system that shows probability of there being a bomb in a location.
- Add a timed competitive mode that works like chess game timers and has both players on identical maps.
