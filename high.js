function highch(tableau) {
    let res = []
    for (let e = 0; e != tableau[0].length; e++) {
      res.push({ name: tableau[0][e], y: tableau[1][e] },)
    }
    return res;
  }
  
  function highBar(tableau) {
    let res = []
    for (let e = 0; e != tableau[0].length; e++) {
      res.push([tableau[0][e], tableau[1][e]])
    }
    return res;
  }
  function tri(tableau) {
    let recup = []
    for(let e = 0; e != tableau.length; e++){
      recup.push([tableau[e][0], tableau[e][1]])
    }
    let res = []
    while(recup.length != 0){
      let maxi = recup[0][1];
      let index = 0
      for(let i = 0; i != recup.length; i++){
        if(recup[i][1] > maxi){
          maxi = recup[i][1]
          index = i
        }
      }
      res.push(recup[index])
      recup.splice(index,1)
    }
    return res
  }