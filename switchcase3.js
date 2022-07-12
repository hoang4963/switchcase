let x = prompt('Enter the number')
a = parseFloat(x)
b = Math.abs(a)
c = b/a
switch (c)
{
    case 1:
        alert('1');
        break;
    case -1:
        alert('-1');
        break;
    default:
        alert('0');

}