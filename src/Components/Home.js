import React from "react";
// import "../CSS/Home.css";
import ProjectsButton from "./Button";
import TeamImages from "../images/Team.jpg";

function Home() {
  return (
    <div className="home-container">
      <section>
        <div class="container">
          <div class="row mt-5 jalign-self-center">
            <div class="col-8 ">
              <h1>Hey There! I'm  Muthoni Nduhiu</h1>
              <p className="m-4 py-5">
                I believe in the power of collaboration and are
                committed to creating an inclusive and supportive environment
                where everyone's ideas and contributions are valued. I pride
                myself on being adaptable and versatile, taking on challenges
                with enthusiasm and working together with others to find solutions.
              </p>
            </div>
            <div class="col-4">
              <img src={TeamImages} class="card-img-top" alt="..."></img>
              <ProjectsButton />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;