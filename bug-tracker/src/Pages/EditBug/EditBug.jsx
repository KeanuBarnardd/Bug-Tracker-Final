import React from "react";
import FormInput from "../../Components/FormInput/FormInput";
import IconButton from "../../Components/IconButton/IconButton";
import "./EditBug.scss";

export default function EditBug() {
  return (
    <div className="container-col content">
      <div className="content-view">
        <h1>Editing Bug</h1>
        <form action="">
          <FormInput label="Title" isInput={true} placeHolder="Give your bug a title" />
          <FormInput
            label="Description"
            isInput={false}
            placeHolder="Describe what is going wrong"
          />
          <FormInput
            label="Steps"
            isInput={false}
            placeHolder="List the steps that need to be done to resolve this bug"
          />

          <div className="selectors">
            <div className="s-input">
              <h2 htmlFor="">Priority</h2>
              <select name="" id="">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="s-input">
              <h2 htmlFor="">Date</h2>
              <input className="date-input" type="Date"></input>
            </div>
          </div>

          <FormInput
            label="Version"
            isInput={true}
            placeHolder="What version of the Application are we on? "
          />

          <IconButton type="submit" text={"Submit"} icon={"fa-solid fa-circle-plus"} />
        </form>
      </div>
    </div>
  );
}
