function fizzbuzz(num)
{
    if(num%3==0 && num%5==0)
    {
        return "Fizzbuzz";
    }
    if(num%5==0)
    {
        return "Buzz"
    }
    if(num%3==0)
    {
        return "Fizz"
    }
    return num.toString();
}

function fizzbuzzLista(n) {
    let text = "";
    for (let i = 1; i < n + 1; i++) 
    {
      text += fizzbuzz(i);
      if (i < n) {
        text += ", ";
      }
  
    }
    return text;
  }

export {fizzbuzz,fizzbuzzLista};