import React from "react";
import FormInput from "../../Components/FormInput/FormInput";
import IconButton from "../../Components/IconButton/IconButton";
import PopUp from "../../Components/PopUp/PopUp";

import "./AddBug.scss";

export default function AddBug({
  getInputHandler,
  createBugHandler,
  getPriorityHandler,
  bug,
  displayPopup,
}) {
  return (
    <div className="container-col content">
      <div className="content-view">
        <h1>Lets add a bug to your list</h1>
        <form action="" className={`${getPriorityHandler(bug)}`}>
          <FormInput
            getInputHandler={getInputHandler("title")}
            label="Title"
            isInput={true}
            placeHolder="Give your bug a title"
          />
          <FormInput
            getInputHandler={getInputHandler("description")}
            label="Description"
            isInput={false}
            placeHolder="Describe what is going wrong"
          />
          <FormInput
            getInputHandler={getInputHandler("steps")}
            label="Steps"
            isInput={false}
            placeHolder="List the steps that need to be done to resolve this bug"
          />

          <div className="selectors">
            <div className="s-input">
              <h2 htmlFor="">Priority</h2>
              <select name="" id="" onChange={getInputHandler("priority")}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="s-input">
              <h2 htmlFor="">Date</h2>
              <input className="date-input" type="Date" onChange={getInputHandler("date")} />
            </div>
          </div>

          <FormInput
            getInputHandler={getInputHandler("version")}
            label="Version"
            isInput={true}
            placeHolder="What version of the Application are we on? "
          />

          <IconButton
            buttonClick={createBugHandler(bug.priority)}
            type="submit"
            text={"Submit"}
            icon={"fa-solid fa-circle-plus"}
          />
          <PopUp displayPopup={displayPopup} />
        </form>
      </div>
    </div>
  );
}
