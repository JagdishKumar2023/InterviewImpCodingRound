import { useState, useEffect } from "react";

const CheckboxApp = () => {
  const [comments, setComments] = useState([]);
  const [selectedComments, setSelectedComments] = useState([]);

  // Fetch comments from the API
  useEffect(() => {
    async function fetchComments() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json(); // Parse the response as JSON
      console.log(data); // Log the fetched data

      // Limit to first 10 comments for simplicity and log the sliced data
      setComments(data.slice(0, 10));
    }
    fetchComments();
  }, []);

  // Toggle comment selection
  const handleCheckboxChange = (id) => {
    setSelectedComments((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((commentId) => commentId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div>
      <h1>Comments Selection</h1>

      {comments.map((comment) => (
        <div key={comment.id}>
          <label>
            <input
              type="checkbox"
              checked={selectedComments.includes(comment.id)}
              onChange={() => handleCheckboxChange(comment.id)}
            />
            {comment.email} {/* Display the email */}
          </label>
        </div>
      ))}

      <h2>Selected Comments:</h2>
      <ul>
        {comments
          .filter((comment) => selectedComments.includes(comment.id))
          .map((comment) => (
            <li key={comment.id}>
              <strong>Email:</strong> {comment.email} <br />
              <strong>Post ID:</strong> {comment.postId}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CheckboxApp;
