import React from "react";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div id="portfolio">
            <h2 className="center font">Porfolio</h2>
            <div className="col s12">
              <div className="carousel carousel-slider center">
                <div className="carousel-fixed-item center"></div>
                <div
                  className="carousel-item black-text responsive-img bgsize"
                  href="#one!"
                  style={{ backgroundImage: `url(./assets/recipe_app.png))` }}
                >
                  <h2 className="font">Recipe App</h2>
                  <div className="chip blue">HTML</div>
                  <div className="chip red">CSS</div>
                  <div className="chip yellow">JavaScript</div>
                  <div className="chip purple">BootStrap</div>
                  <div className="chip green">Jquery</div>
                </div>
                <div
                  className="carousel-item black-text responsive-img bgsize"
                  href="#two!"
                  style={{ backgroundImage: `url(./assets/weather_app2.png)` }}
                >
                  <h2 className="font">Weather App</h2>
                  <div className="chip blue">HTML</div>
                  <div className="chip red">CSS</div>
                  <div className="chip yellow">JavaScript</div>
                  <div className="chip purple">BootStrap</div>
                  <div className="chip green">Jquery</div>
                </div>
                <div
                  className="carousel-item black-text responsive-img bgsize"
                  href="#three!"
                  style={{ backgroundImage: `url(./assets/todo_list.png)` }}
                >
                  <h2 className="font">Workday Scheduler</h2>
                  <div className="chip blue">HTML</div>
                  <div className="chip red">CSS</div>
                  <div className="chip yellow">JavaScript</div>
                  <div className="chip purple">BootStrap</div>
                  <div className="chip green">Jquery</div>
                </div>
                <div
                  className="carousel-item black-textback responsive-img bgsize"
                  href="#four!"
                  style={{
                    backgroundImage: `url(./assets/password_generator.png)`,
                  }}
                >
                  <h2 className="font">Password Generator</h2>
                  <div className="chip blue">HTML</div>
                  <div className="chip red">CSS</div>
                  <div className="chip yellow">JavaScript</div>
                  <div className="chip purple">BootStrap</div>
                  <div className="chip green">Jquery</div>
                </div>
                <div
                  className="carousel-item black-textback responsive-img bgsize"
                  href="#four!"
                  style={{ backgroundImage: "url(./assets/shoequelize.png)" }}
                >
                  <h2 className="font">Shoequelize</h2>
                  <div className="chip blue">HTML</div>
                  <div className="chip red">CSS</div>
                  <div className="chip yellow">JavaScript</div>
                  <div className="chip pink">Materialize</div>
                  <div className="chip green">Jquery</div>
                  <div className="chip light-blue">Sequelize</div>
                  <div className="chip light-green">nodeJs</div>
                </div>
              </div>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                ut voluptates dolore odio sequi saepe voluptatum modi maxime
                assumenda amet, eos molestias est et labore id consectetur
                reiciendis. Voluptas, ea!
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
