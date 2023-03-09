import React, { useState } from "react";

const GoalForm = ({ setAllGoals, allGoals }) => {
  const [formData, setFormData] = useState({
    goal: "",
    by: "",
  });

  const handleGoal = (e) => {
    e.preventDefault();
    setAllGoals([...allGoals, formData]);
    setFormData({ goal: "", by: "" });
  };

  function goalChange(e) {
    setFormData({ ...formData, goal: e.target.value });
  }
  function byChange(e) {
    setFormData({ ...formData, by: e.target.value });
  }

  return (
    <>
      <h1>My Goals</h1>
      <form>
        <input
          type="text"
          name="goal"
          placeholder="Goal..."
          onChange={goalChange}
        />
        <input type="text" name="by" onChange={byChange} placeholder="By..." />
        <button onClick={handleGoal}>Add</button>
      </form>
    </>
  );
};

export default GoalForm;
