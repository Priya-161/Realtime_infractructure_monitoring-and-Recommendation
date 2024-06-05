document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your feedback!');
});

function handleButtonClick(action) {
    switch(action) {
        case 'Classification Monitor':
            window.open('https://code.earthengine.google.com/c50d6e6eb6927b50cb46019a56bc4dec', '_blank');
            break;
        case 'Building Detection Monitor':
            window.open('https://code.earthengine.google.com/98331fa9ee0f30a64ae31aa953deb400', '_blank');
            break;
        case 'Recommend':
            window.location.href = 'HospitalneedRecommend.html';
            break;
        case 'Emergency':
            window.location.href = 'hospital.html';
            break;
        default:
            alert('Button ' + action + ' clicked!');
            break;
    }
}
