import axios from "axios";
import { useEffect, useState } from "react";
import "./Practice.css";

const Practice = () => {
  const [users, setUser] = useState([]);
  const [filteredValue, setFilteredValue] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resData = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        console.log("Fetched Users:", resData.data);
        setUser(resData.data);
        setFilteredValue(resData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchQuery(searchTerm);

    console.log("Search Query:", searchTerm);

    const filtered = users.filter(
      (user) =>
        user.address.city.toLowerCase().includes(searchTerm) ||
        user.address.street.toLowerCase().includes(searchTerm) ||
        user.name.toLowerCase().includes(searchTerm)
    );

    console.log("Filtered Results:", filtered);
    setFilteredValue(filtered);
  };

  return (
    <div className="main-container">
      <input
        type="text"
        onChange={handleSearch}
        value={searchQuery}
        placeholder="Search here..."
        className="search-input"
      />
      {filteredValue.length === 0 ? (
        <p className="no-results">No search values</p>
      ) : (
        <div className="user-list">
          {filteredValue.map((ele, index) => (
            <div key={index} className="user-card">
              <p className="user-name">Name: {ele.name}</p>
              <p className="user-address">Address: {ele.address.city}</p>
              <p className="user-street">Street: {ele.address.street}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Practice;
