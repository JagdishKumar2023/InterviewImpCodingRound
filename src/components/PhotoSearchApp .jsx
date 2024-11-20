import { useState, useEffect } from "react";
import axios from "axios";

const UserCitySearchApp = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log("Fetched Users:", response.data);
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = users.filter(
      (user) =>
        user.address.suite.toLowerCase().includes(term) ||
        user.company.bs.toLowerCase().includes(term)
    );

    console.log("Search Term:", term);
    console.log("Filtered Users:", filtered);

    setFilteredUsers(filtered);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Search by Street or Company BS</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by street or company BS..."
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "100%",
          boxSizing: "border-box",
        }}
      />

      {filteredUsers.length === 0 ? (
        <p>No users match your search.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                width: "250px",
              }}
            >
              <h3>{user.name}</h3>
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
