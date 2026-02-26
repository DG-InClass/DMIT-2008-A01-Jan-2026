// ~/api-calls/review-endpoints.js

const fetchMovieReviews = () => {
    return fetch('http://localhost:5000/reviews')
    //.then(handleJsonResponse)  //  function handleJsonResponse(respon)
      .then(response => response.json());
}

export { fetchMovieReviews }
