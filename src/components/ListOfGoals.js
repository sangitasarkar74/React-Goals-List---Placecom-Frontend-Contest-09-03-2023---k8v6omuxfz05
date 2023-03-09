import React from "react";
import GoalForm from "./GoalForm";

const ListOfGoals = ({ allGoals }) => {
  return (
    <ul>
      {allGoals.length > 0 ? (
        <>
          {allGoals.map((goal, i) => (
            <li key={i}>
              <p>
                My goal is to {goal.goal}, by {goal.by}
              </p>
            </li>
          ))}
        </>
      ) : null}
    </ul>
  );
};

export default ListOfGoals;
