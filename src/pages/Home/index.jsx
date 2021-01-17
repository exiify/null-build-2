import React from "react";
import "./index.css";
import "./features.css";
import Helmet from "react-helmet";

export function Home() {
  return (
    <div className="pog" id="home">
      <Helmet>
        <title> Home </title>
      </Helmet>
      <div className="homeMain">
        <div classname="home-lol">
          <div className="home-text-wrap">
            <img
              alt={""}
              classname="null-pfp"
              src={"https://i.imgur.com/gvgy11R.png"}
            />
            <h1 classname="home-text-big">
              Make the best discord server with Null{" "}
            </h1>
            <a
              class="btn  btn-lg btn-home"
              href="https://discord.com/oauth2/authorize?client_id=796009533323345941&permissions=473394422&scope=bot"
              role="button"
            >
              Add to server
            </a>
            <a
              class="btn btn-secondary btn-lg"
              href="https://discord.gg/C4Kzcm7B94"
              role="button"
            >
              Support Server
            </a>
          </div>
        </div>
      </div>

      <div className="rest">
        <section>
          <div className="text-area">
            <h3 className="section-title">
              <span className="text-highlight">High Quality Music</span>
              <br />
            </h3>
            <p className="section-body short">
              Null supports Spotify, YouTube, SoundCloud, BandCamp, Deezer &amp;
              More! We give each person 10 <span className="bold">FREE</span>{" "}
              Custom playilsts with 1000 songs per playlist!
            </p>
          </div>
          <img
            height="15rem!important;"
            alt="Null is an epic "
            src={"https://i.imgur.com/6oEfd40.png"}
          />
        </section>
        <section className="reverse">
          <div className="text-area">
            <h3 className="section-title">
              <span className="text-highlight">Leveling</span>
              <br />
            </h3>
            <p className="section-body">
              Null has a powerful leveling system with a leaderboard and rank
              command , and if you don't like it you can just disable it!
            </p>
          </div>
          <img
            alt="Powerful Leveling commands"
            src={"https://i.imgur.com/3ZvjvZz.png"}
          />
        </section>

        <span data-ccpa-link="1"></span>
      </div>
    </div>
  );
}
