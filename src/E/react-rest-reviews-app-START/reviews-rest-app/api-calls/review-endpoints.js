// ~/api-calls/review-endpoints.js

const fetchMovieReviews = () => {
    return fetch('http://localhost:5000/review')
    .then(handleJsonResponse)
    .catch(handleNetworkError)
}

/**
 * General Error Handling for Network errors
 * @param {Error} err The error identified by the fetch
 */
const handleNetworkError = (err) => {
    const message = `The reviews service is not available at this time. (${err.message})`;
    throw new Error(message, { cause: err });
}

/**
 * Process the web server response with the expectation that
 * it will be returning JSON data.
 * @param {Response} response A Response from a web server
 * @returns {object} Some JavaScript object
 */
const handleJsonResponse = (response) => {
    // Check for the correct status code (200 range)
    if(!response.ok) {
        throw new Error(`The server responded with the code ${response.status}: "${response.statusText}"`);
    }
    // Expect the server to return a JSON response
    const contentType = response.headers.get('content-type');
    if(!contentType || !contentType.includes('application/json')) {
        throw new Error(`Expected a JSON response, but got: ${contentType || "unknown"}`);
    }
    // Everything should be fine if I reached this point.
    return response.json();
}

export { fetchMovieReviews }
