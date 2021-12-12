
  function findMinAndRemoveSorted (array){
    if(array.length < 2){
      return array;
    } else {
      merge(findMinAndRemoveSorted (firstHalfArray), findMinAndRemoveSorted (secondHalfArray))
    }
  }