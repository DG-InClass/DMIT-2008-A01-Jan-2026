// ~/test/Byline.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // module sets up the fake browser
import Byline from '../components/Byline';

test('byline should include the author name', () => {
    // Arrange
    render(<Byline author="Dan Gilleland" />);

    // Act
    const someElement = screen.queryByText('by Dan Gilleland');

    // Assert
    expect(someElement).toBeInTheDocument();
});

test('byline should include some other author name', () => {
    render(<Byline author="Stewart Dent" />);
    const someElement = screen.queryByText('by Stewart Dent');
    expect(someElement).toBeInTheDocument();
});

test('byLine should link to the author GitHub profile', () => {
    render(<Byline author="Dan Gilleland" githubUsername="dgilleland" />);
    const actualElement = screen.getByText('GitHub Profile');
    expect(actualElement).toBeInTheDocument();
    expect(actualElement.href).toBe('https://github.com/dgilleland');
});

test('byline should not have a GitHub Profile', () => {
    render(<Byline author="Dan Gilleland" />);
    const element = screen.queryByText('GitHub Profile');
    expect(element).not.toBeInTheDocument();
});

test('byline link to GitHub Profile shoiuld open in a new tab', () => {
    render(<Byline author="Bruce Wayne" githubUsername='theRealBatman' />);
    const actualElement = screen.getByText('GitHub Profile');
    expect(actualElement).toBeInTheDocument();
    expect(actualElement.target).toBe('_blank');
});
