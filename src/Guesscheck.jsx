import React from 'react'

function Guesscheck( {secretnum,term}) {

  let result;

  if (term){
    const numericterm = Number(term)
    if (numericterm > secretnum) {
      result = "Higher";
    }
    else if (numericterm < secretnum) {
      result = "Lower";
    }
    else if ( numericterm === secretnum) {
      result = "Yippee! correct";
  
    }
    else {
      result = "Enter valid input";
    }
  }
  return (
    <h4 style={{fontSize:'15px',fontWeight:'400'}}>You Guessed : {result}</h4>
  )
}

export default Guesscheck