import React from 'react';

const User = (props) => {
  const { data } = props;
  return (
    <div>
      <h1>User Component</h1>
      <h3>
        Hi this is {data.name} and i am {data.age} years Old
      </h3>
    </div>
  );
};

export default User;
