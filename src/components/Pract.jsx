import axios from "axios"; // Import axios if running in a React or Node.js project

const Pract = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    console.log(response.data); // Logs the array of comments
  } catch (error) {
    console.error("There was a problem with the axios request:", error.message);
  }
};

export default Pract;

// Call the function to log the data
Pract();
