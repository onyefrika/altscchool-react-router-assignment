import React from "react";

function User({ user, loading }) {
  const userDetails = user.map((use) => {
    return (
      <div key={use.cell}>
        <img src={use.picture.large} alt="" />
        <div>{`${use.name.first} ${use.name.last}`}</div>
        <div>{use.email}</div>
      </div>
    );
  });

  if (loading) {
    return <h2>Loading..</h2>;
  } else {
    return (
      <div className="user-contd">
        <div className="use">{userDetails}</div>
      </div>
    );
  }
}

export default User;