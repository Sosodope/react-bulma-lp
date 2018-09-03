import React from "react";
import Group from "../assets/images/team/Group.png";
import Group1 from "../assets/images/team/Group-1.png";
import Group2 from "../assets/images/team/Group-2.png";
import Group3 from "../assets/images/team/Group-3.png";
import Group4 from "../assets/images/team/Group-4.png";
import Group5 from "../assets/images/team/Group-5.png";
import Group6 from "../assets/images/team/Group-6.png";
import Group7 from "../assets/images/team/Group-7.png";
import Group8 from "../assets/images/team/Group-8.png";

const teams = [
  {
    name: "Vadim",
    role: "Managing Director",
    src: `${Group}`
  },
  {
    name: "Sergey",
    role: "Technology Director",
    src: `${Group1}`
  },
  {
    name: "Andrey",
    role: "Frontend Developer",
    src: `${Group2}`
  },
  {
    name: "Alex",
    role: "Frontend Developer",
    src: `${Group3}`
  },
  {
    name: "Alice",
    role: "Backend Developer",
    src: `${Group4}`
  },
  {
    name: "Peter",
    role: "Mobile Developer",
    src: `${Group5}`
  },
  {
    name: "Ben",
    role: "Product Designer",
    src: `${Group6}`
  },
  {
    name: "Tom",
    role: "Product Designer",
    src: `${Group7}`
  },
  {
    name: "Vadim",
    role: "Managing Director",
    src: `${Group8}`
  }
];

const Team = () => {
  return (
    <div class="level team">
      {teams.map(team => {
        return (
          <div class="level-item has-text-centered">
            <img src={team.src} alt={team.name} />
            <div className="content">
              <h4 className="name">{team.name}</h4>
              <p className="role">{team.role}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Team;
