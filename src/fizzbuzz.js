function fizzbuzz(num)
{
    if(num%3==0 && num%5==0)
    {
        return "fizzbuzz";
    }
}

function fizzbuzzLista(n) 
{
    let mensaje = "";
    for (let i = 1; i < n + 1; i++) 
    {
      texto += fizzbuzz(i);
      if (i < n) {
        texto += ", ";
      }
    }
    return mensaje;
}

export default {fizzbuzz,fizzbuzzLista};