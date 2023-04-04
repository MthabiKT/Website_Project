import React from "react";
import "../CSS/Home.css";
import ProjectsButton from "./Button";
import TeamImages from "../images/Team.jpg";
import Images from "../images/3.jpg";

function Home() {
  return (
    <div className="home-container">
      <section>
        <div class="container">
          <div class="row mt-5 jalign-self-center">
            <div class="col-8 ">
              <h1>Hey There! We are Team 4!</h1>
              <p className="m-4 py-5">
                As a team, we believe in the power of collaboration and are
                committed to creating an inclusive and supportive environment
                where everyone's ideas and contributions are valued. We pride
                ourselves on being adaptable and versatile, taking on challenges
                with enthusiasm and working together to find solutions.
              </p>
            </div>
            <div class="col-4">
              <img src={TeamImages} class="card-img-top" alt="..."></img>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row my-5">
            <div class="col-6">
              <img src={Images} class="card-img-top" alt="..."></img>
            </div>
            <div class="col-6 align-self-center">
              <p>
                We invite you to explore our portfolio and get to know our team.
                Whether you're interested in learning about our past projects or
                looking to collaborate on future endeavors, we're excited to
                connect with you and share our passion for technology.
              </p>
              <ProjectsButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
