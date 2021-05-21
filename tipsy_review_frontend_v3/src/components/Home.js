import React from "react";

const Home = () => {
  return (
    <div className="ui inverted center aligned segment">
      <div className="ui text container ">
        <h1 className="ui inverted header">Welcome To Tipsy List</h1>
        <p className="ui inverted">
          A simple brewery tracking app where you can search for new breweries
          and save them. Along with the ability to add multiple reviews to
          remember every visit you've had!
        </p>
      </div>
      <h3 className="ui inverted header">Are you 21?</h3>
      <div className="ui segment">
        <div className="ui two column very relaxed grid">
          <div className="column">
            <h3>
              <a href="/breweries">YES</a>
            </h3>
          </div>
          <div className="column">
            <h3>
              <a href="">NO</a>
            </h3>
          </div>
        </div>
        <div className="ui vertical divider">or</div>
      </div>
    </div>
  );
};

export default Home;
