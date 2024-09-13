const feedbackForm = document.getElementById('feedbackForm');
const feedbackList = document.getElementById('feedbackList');

feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();

   
    const feedback = document.getElementById('feedback').value;

    
    const feedbackItem = document.createElement('div');
    feedbackItem.classList.add('feedback-item');
    feedbackItem.textContent = feedback;

    feedbackList.appendChild(feedbackItem);

    feedbackForm.reset();
});