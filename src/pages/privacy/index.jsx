import React from "react";
import "./index.css";

export function Privacy() {
  return (
    <div className="privacy" id="privacy">
      <h1>Privacy Policy</h1>
      <h3> By using Null you agree to our privacy policy </h3>
      <br />
      <h4> What do data do we store & how do we use it? </h4>
      <li>
        Server name, icon & id for upcoming dashboard , moderation system,
        economy system & leveling system
      </li>
      <li>
        {" "}
        We store your user ID and user name and your guilds for leveling system,
        dashboard & economy system{" "}
      </li>
      <li>specific roles for auto role</li>
      <li> Some Channels for mod-logs and logging system</li>
      <li> When a person is muted their UserID is stored in the database </li>
      <br />
      <h4> Who can see your data?</h4>
      <li>ONLY ME THE CREATOR OF NULL CAN SEE YOUR DATA! </li>

      <br />

      <h4> 3rd party data sharing</h4>
      <li> NOPE NOPE NO SHARING IS ALLOWED </li>

      <br />

      <h4> Questions and concerns </h4>
      <li>
        {" "}
        Join our Support server{" "}
        <a href="https://discord.com/invite/C4Kzcm7B94">Here</a> for your epic
        questions to be epicly answered.
      </li>
      <br />

      <h4> I want my data to be removed! </h4>
      <li>
        {" "}
        AGAIN Join our Support server{" "}
        <a href="https://discord.com/invite/C4Kzcm7B94">Here</a> so e can delete
        our date (NOTE: it can take up to aweek for your data to be entierely be
        deleted!)
      </li>
      <br />
      <h4>
        {" "}
        We reserve the right to change our privacy policy without notifying you.{" "}
      </h4>
      <h4> Last updated January 15th 7:30pm EST </h4>
    </div>
  );
}
