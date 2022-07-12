let browser = prompt('Enter browser name!')
switch (browser)
    {
        case 'Eage':
            alert('You have got the Eage!');
        break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert('Ok we support browsers too');
        break;
        default:
            alert('We hope that this page look ok');
}