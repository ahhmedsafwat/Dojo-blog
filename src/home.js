import { useState } from "react";

const Home = () => {
  let [age, setAge] = useState(25);

  let [name, setName] = useState("mario");
  const handleClick = () => {
    setName("luigi");
    setAge(28);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>click me again</button>
    </div>
  );
};

export default Home;
