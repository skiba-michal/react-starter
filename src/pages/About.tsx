import React from "react";
import { useVoteStore } from "@store";

const About = () => {
  const { votes, subtractVotes, addVotes } = useVoteStore();
  return (
    <div>
      <div> About</div>
      <div>
        <button onClick={addVotes}>Add</button>
        <button onClick={subtractVotes}>Subtract</button>
      </div>
      <div> {votes}</div>
    </div>
  );
};

export default About;
