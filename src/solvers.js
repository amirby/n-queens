/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// create a functin here. 
  // what it does, it takes the board and the rowIndex and returns 
  // the reslut of the nmb of solution on that board
// you'll need it in every function that returns solution,

// funciton's logic, if that it's going to loop over  ALL the descisions (togglePiece?)

//Ok Anas , there is below this function an other method that calclates the solution
//solution can be the cordonate of the rooks (i,j)
//can we make a zoom???
//Amir sent to you a zoom link ,if it is possible
// ah ok need to close the liveshare, can't run them both :()
//Ok
//we are waiting for you

//

var solutionFinderR = function (n, row, board, callback){
  if (row === n){
    return callback(board);
  }
  for (var j = 0 ; j < n ; j++){
    board.togglePiece(row, j)
    if (!board.hasAnyRooksConflicts()){
       var solution = solutionFinderR(n, row+1, board, callback)
       if (solution){
         return solution
       }
    }
    board.togglePiece(row,j) 
  }

}



window.findNRooksSolution = function(n) {
  var solution = [];  
  var board = new Board ( {n:n}) 
/*for ( var i = 0 ; i < n ; i++){   //           (0 1 0  0 0 0  0 0 0 )
  var row = board.rows()[i]
  for (var j = 0 ; j < row.length ; j++){
    board.togglePiece(i,j)
    if (board.hasAnyRooksConflicts()){
      board.togglePiece(i,j)  
    }
  }
}
solution = board.rows()*/
solutionFinderR(n , 0, board, function(board){
  return solution = board.rows() 
})
  
 console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; 
  var board = new Board ({n:n})
  
  solutionFinderR(n , 0, board, function(board){
    solutionCount++ 
  })


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
}



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
var solutionFinderQ = function (n, row, board, callback){
  if (row === n){
    return callback(board);
  }
  for (var j = 0 ; j < n ; j++){
    board.togglePiece(row, j)
    if (!board.hasAnyQueensConflicts()){
       var solution = solutionFinderQ(n, row+1, board, callback)
       if (solution){
         return solution
       }
    }
    board.togglePiece(row,j) 
  }

}

window.findNQueensSolution = function(n) {
  var solution = []; //fixme
  var board = new Board ( {n:n}) 
  if ((n === 2) || (n === 3)){
    solution = board.rows()
  }
  else {
    solutionFinderQ(n , 0, board, function(board){
      return solution = board.rows() 
    })
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; 
  var board = new Board ({n:n})
  
  solutionFinderQ(n , 0, board, function(board){
    solutionCount++ 
  })
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
