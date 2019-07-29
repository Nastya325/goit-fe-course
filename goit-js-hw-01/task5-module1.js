const priceChina = 100;
const priceChili = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

const China = 'China';
const Chili = 'Chili';
const Australia = 'Australia';
const India = 'India';
const Jamaica = 'Jamaica';

let userCountry = prompt('Choose country for delivered');

let userCost;
switch (userCountry.toUpperCase())
{
    case China.toUpperCase():
        userCost = priceChina;
        break;
    case Chili.toUpperCase():
    userCost = priceChili;
    break;
    case Australia.toUpperCase():
        userCost = priceAustralia;
        break;
    case India.toUpperCase():
        userCost = priceIndia;
    break;
    case Jamaica.toUpperCase():
    userCost = priceJamaica;
    break;
    default:
        userCost = null;
}

if (
    userCost === null
)
{
    alert('delivery is not available in your country');
}
else {
    alert('Delivery to ' + userCountry + ' will be cost ' + userCost)};