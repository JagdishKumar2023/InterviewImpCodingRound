import { useState, useEffect } from "react";
import axios from "axios";

const CheckboxApp = () => {
  const [comments, setComments] = useState([]);
  const [selectedComments, setSelectedComments] = useState([]);

  // Fetch comments from the API using Axios
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setComments(response.data.slice(0, 50));
      } catch (err) {
        console.log(err);
      }
    };
    fetchComments();
  }, []);

  // Toggle comment selection
  const toggleSelection = (id) => {
    setSelectedComments((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Comments Selection</h1>
      <div style={{ marginBottom: "20px" }}>
        {comments.map(({ id, email }) => (
          <label key={id} style={{ display: "block", margin: "5px 0" }}>
            <input
              type="checkbox"
              checked={selectedComments.includes(id)}
              onChange={() => toggleSelection(id)}
            />
            {email}
          </label>
        ))}
      </div>

      <h2>Selected Comments:</h2>
      <ul>
        {comments
          .filter(({ id }) => selectedComments.includes(id))
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
