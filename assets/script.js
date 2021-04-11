//inserimento ciclo
for(i = 1; i < 101; i++){
  var numeri = i;
  //ricchiesta multipli di 3
  if(i % 3 == 0){
    console.log('Fizz');
  }else if(i % 5 == 0){   //ricchiesta multipli di 5
    console.log('Buzz');
  }else if(i % 3 == 0 && i % 5 == 0){   //richiesta di entrambi multipli
    console.log('FizzBuzz')
  }else{    //se non è nessuna delle ricchieste prima allora stampa i numeri non multipli
    console.log(i)
  }
}