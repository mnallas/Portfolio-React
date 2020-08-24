import React from "react";

const Intro = () => {
  return (
    <div id="home" className="row">
      <div className="col s12">
        <div>
          <img
            className="responsive-img"
            src="https://images.unsplash.com/photo-1536382846503-832f3d8c7742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            // style={{max-width: "100%"}}
            alt="#"
          />
          <h1 className="centered font">Hi! My name is Myhkas</h1>
          {/* <h4 className="bottom font flow-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est itaque
            repellat inventore quae cum! Quidem quasi quibusdam vero rerum enim,
            veniam tempore aspernatur suscipit quod officiis sed ducimus, cumque
            ut.
          </h4> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;
