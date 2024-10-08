let num = window.prompt("Select a number for countdown:");

if (isNaN(parseInt(num)))
{
   console.log("Please enter a valid number.")
}
else
for(i=num; i>=0; i--)
{
    console.log(i);
}