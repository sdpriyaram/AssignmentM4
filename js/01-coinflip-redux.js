let coinFlip = window.prompt("Select number of times to do coinflip:");

if (isNaN(parseInt(coinFlip)))
{
   console.log("Please enter a valid number.")
}
else
{
  for (i=0; i<parseInt(coinFlip); i++)
  {
    let randomNum = Math.round(Math.random());
    if (randomNum == 0)
        toss = 'Heads';
    else 
        toss = 'Tails';
    console.log(toss);
    console.log("  ");
  }
}
