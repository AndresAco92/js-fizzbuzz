//inserimento ciclo
for(i = 1; i < 101; i++){
  var numeri = i;
  console.log(i)
  //ricchiesta multipli di 3
  if(i % 3 == 0){
    console.log('Fizz');
  }
  //ricchiesta multipli di 5
  if(i % 5 == 0){
    console.log('Buzz');
  }
  //richiesta di entrambi multipli
  if(i % 3 == 0 && i % 5 == 0){
    console.log('FizzBuzz')
  }
}