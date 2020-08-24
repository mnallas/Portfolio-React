import React from "react";

const About = () => {
  return (
    <div className="container" id="aboutMe">
      <h2 className="center font">About Me</h2>
      <img
        style={{ width: "50%" }}
        className="circle center"
        src="./assets/aboutme.jpg"
        alt=""
      />
      <h3 className="font">Myhkas Nallas</h3>
      <p className="font">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt
        eum quibusdam illo enim fuga adipisci cum neque, quisquam similique
        commodi eos temporibus suscipit nulla doloremque aperiam architecto
        consequuntur maxime! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Officia similique quam earum voluptates odio magni, facere aut
        perferendis, quasi minus veritatis delectus praesentium sit harum nisi
        et nulla saepe! Earum.
      </p>
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src="images/sample-1.jpg" />
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
