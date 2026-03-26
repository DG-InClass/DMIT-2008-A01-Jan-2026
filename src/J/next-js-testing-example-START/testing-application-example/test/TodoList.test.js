// ~/test/TodoList.test.js

// Importing functions to help with testing
import {fireEvent, render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom'; // brings in the browser simulation

import TodoList from '../components/TodoList';

// (note: the jest.config.js settings are making the `test()` and `expect()` functions globally available)

test('todo list title renders correctly', () => {
    render(<TodoList />);
    const titleElement = screen.getByText('Our Todo List');
    expect(titleElement).toBeInTheDocument();
});

test('todo is added successfully', () => {
    // Arrange - set up all the things needed
    render(<TodoList />);
    const inputElement = screen.getByLabelText('New Todo');
    const buttonElement = screen.getByText('Add Todo');
    const listElement = screen.getByTestId('todo-item-list');
    const EXPECTED_STRING = 'Learn Testing in JavaScript';

    // Let's put the text in our input element
    fireEvent.change(inputElement, {
        target: { value: EXPECTED_STRING }
    });
    // Let's do a quick "sanity check" that the text was
    // entered into the inputElement
    expect(inputElement.value).toBe(EXPECTED_STRING);

    // Act - do the thing that we are testing
    act(() => {
        buttonElement.click();
    })

    // Assert - see if it worked as expected
    expect(listElement).toHaveTextContent(EXPECTED_STRING);
    expect(inputElement.value).toBe('');
});
