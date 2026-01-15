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

        let myForm = ev.target;
        let controls = myForm.element;
        // When you are reading code, ask yourself: What is it?
        // The `it` might be a variable/object (What is its DATA TYPE)
        // or `it' might be a function call 
        // or it might be some other part of the JavaScript grammar

        // Although it's a "poor choice", we will look for the
        // DOM element by its CSS class name
        let ulElement = document.querySelector('.topics-list');
        ulElement.innerHTML += 
            `<li class="list-group-item">${topicInput.value}</li>`;
    });
