/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/
document
    .querySelector('form')
    .addEventListener('submit', (ev) => {
        ev.preventDefault();
        console.log('Form submit');
        // Get a reference to my <input name="new-topic" />
        let topicInput = 
           ev.target.elements['new-topic'];
        // \_form__/ \______/\_ indexer _/
        //              |- collection of element/controls in my form
        console.log(topicInput.value);
        let topic = topicInput.value.trim();

        if(topic === '') {
            // Bad input....
            topicInput.classList.add('is-invalid');
        } else {
            // Good input
            topicInput.classList.remove('is-invalid');
            let ulElement = document.querySelector('.topics-list');
            ulElement.innerHTML += 
                `<li class="list-group-item">${topic}</li>`;
            topicInput.value = ''; // clear the input
        }
        topicInput.focus(); // so that the user can continue....
    });
