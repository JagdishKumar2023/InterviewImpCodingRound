import { useState, useEffect } from "react";
import axios from "axios";

const CheckboxApp = () => {
  const [comments, setComments] = useState([]);
  const [selectedComments, setSelectedComments] = useState([]);

  // Fetch comments from the API when the component mounts
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setComments(response.data.slice(0, 50)); // Get the first 50 comments
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    };
    fetchComments();
  }, []);

  // Toggle comment selection when a checkbox is clicked
  const toggleSelection = (id) => {
    setSelectedComments(
      (prev) =>
        prev.includes(id)
          ? prev.filter((cid) => cid !== id) // If the comment is selected, unselect it
          : [...prev, id] // If the comment is not selected, select it
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Comments Selection</h1>

      {/* Render a list of comments with checkboxes */}
      <div style={{ marginBottom: "20px" }}>
        {comments.map(({ id, email }) => (
          <label key={id} style={{ display: "block", margin: "5px 0" }}>
            <input
              type="checkbox"
              checked={selectedComments.includes(id)} // Check if the comment is selected
              onChange={() => toggleSelection(id)} // Toggle selection on checkbox change
            />
            {email}
          </label>
        ))}
      </div>

      {/* Display selected comments */}
      <h2>Selected Comments:</h2>
      <ul>
        {comments
          .filter(({ id }) => selectedComments.includes(id)) // Filter comments based on selection
          .map(({ id, email, postId }) => (
            <li key={id} style={{ marginBottom: "10px" }}>
              <strong>Email:</strong> {email} <br />
              <strong>Post ID:</strong> {postId}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CheckboxApp;
