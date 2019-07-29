let credits = 23580;
const pricePerDroid = 3000;
let Count_droids = prompt('How much droids do you want to bye?');

if ( Count_droids === null)
{
     console.log ('Canceled by user');
}
else {
    let totalPrice = Count_droids * pricePerDroid;
    if(credits < totalPrice)
    {
      console.log ('insufficient funds in the account');
    }
    else {
        let left_credits = credits - totalPrice;
        alert('You bye ' + Count_droids + ' droids, in your account left '
        + left_credits + ' credits');
    }
}