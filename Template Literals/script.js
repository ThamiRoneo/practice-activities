// select elements
const userForm = document.getElementById('user-form');
const nameInput = document.getElementById('name');
const colorInput = document.getElementById('color');
const activitiesInput = document.getElementById('activities');
const messageDiv = document.getElementById('message');
const activityList = document.getElementById('activity-list');

// form submission handler
userForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // get user input values
    const name = nameInput.value;
    const color = colorInput.value;
    const activities = activitiesInput.value.split(',').map(activity => activity.trim());

    // create message using template literals
    const message = `Hello, ${name}! Your favorite color is ${color}. You enjoy ${activities.length} activities.`;

    // display message
    messageDiv.textContent = message;

    // display activities in a list
    activityList.innerHTML = '';
    activities.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = activity;
        activityList.appendChild(li);
    });

});
