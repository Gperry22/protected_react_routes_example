import React from "react";

const Dashboard = props => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Secret Page</p>
      <button onClick={props.handleLogout}>Log Out</button>
    </div>
  );
};

export default Dashboard;
