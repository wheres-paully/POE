// CustomerReviews.js
import React from 'react';
import './CustomerReviews.css';

const reviews = [
  {
    author: 'Nadia P., Lincoln Park',
    title: 'A Mediterranean oasis in the Windy City',
    content:
      'Tucked away in one of Chicago’s coziest corners, Little Lemon is my go-to escape. The lemon-herb chicken practically melts in your mouth, and the ambience feels like a sunlit patio in Santorini.',
  },
  {
    author: 'Elliot T., Wicker Park',
    title: 'Elevated dining, laid-back vibe',
    content:
      'Little Lemon nails the balance between comfort and sophistication. From the grilled artichokes to their silky olive oil cake, everything is a flavor bomb.',
  },
  {
    author: 'Misha K., West Loop',
    title: 'The perfect date spot in Chicago',
    content:
      'Took my partner here for a surprise dinner and they were blown away. We ordered the lamb skewers and the feta-stuffed peppers, then lingered over mint tea like we were in a bistro in Athens.',
  },
];

export default function CustomerReviews() {
  return (
    <section className="reviews-section">
      <h2 className="reviews-heading">What Our Guests Are Saying</h2>
      <div className="review-cards">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3 className="review-title">“{review.title}”</h3>
            <p className="review-content">{review.content}</p>
            <p className="review-author">— {review.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}