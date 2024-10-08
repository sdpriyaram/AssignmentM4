for (i=1;i<=100;i++)
    { 
        let result;
        if(i%3==0 && i%5==0)
            result = "Marco! Polo!";
        else if(i%3==0)
            result = "Marco!";
        else if(i%5==0)
            result = "Polo!";
        else
            result = i;

        console.log(result);
    }