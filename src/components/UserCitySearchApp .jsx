import { useState, useEffect } from "react";
import axios from "axios";

const UserCitySearchApp = () => {
  const [users, setUsers] = useState([]);
  const [sortingCriteria, setSortingCriteria] = useState({
    name: false,
    email: false,
    company: false,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleSortingChange = (event) => {
    const { name, checked } = event.target;

    // Update sorting criteria state
    setSortingCriteria((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const applySorting = (data) => {
    let sortedData = [...data];

    // Sort based on the selected criteria
    if (sortingCriteria.name) {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortingCriteria.email) {
      sortedData.sort((a, b) => a.email.localeCompare(b.email));
    }

    if (sortingCriteria.company) {
      sortedData.sort((a, b) => a.company.name.localeCompare(b.company.name));
    }

    return sortedData;
  };

  const displayedUsers = applySorting(users);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Sorting by Checkbox</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2>Sort By:</h2>
        <label>
          <input
            type="checkbox"
            name="name"
            checked={sortingCriteria.name}
            onChange={handleSortingChange}
          />
          Name
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="checkbox"
            name="email"
            checked={sortingCriteria.email}
            onChange={handleSortingChange}
          />
          Email
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="checkbox"
            name="company"
            checked={sortingCriteria.company}
            onChange={handleSortingChange}
          />
          Company Name
        </label>
      </div>

      {displayedUsers.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {displayedUsers.map((user) => (
            <div
              key={user.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                width: "250px",
              }}
            >
              <h3>Name: {user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Street: {user.address.suite}</p>
              <p>Company: {user.company.name}</p>
              <p>BS: {user.company.bs}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserCitySearchApp;
