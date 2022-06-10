import React,{useState} from "react";
import { Link } from "react-router-dom";
import FormInput from "../../Components/FormInput/FormInput";
import "./EditBug.scss";

export default function EditBug({
  bug,
  getInputHandler,
  getPriorityHandler,
  confirmEdit,
  cancelEdit,
  setBugSaved,
  bugSaved
}) {

  

  return (
    <div className="container-col content">
      <div className="content-view">
        <h1 className="edit-title">Editing Bug</h1>
        <form action="" className={`${getPriorityHandler(bug)}`}>
          <FormInput
            label="Title"
            isInput={true}
            placeHolder="Give your bug a title"
            value={bug.title}
            getInputHandler={getInputHandler("title")}
          />
          <FormInput
            label="Description"
            isInput={false}
            placeHolder="Describe what is going wrong"
            value={bug.description}
            getInputHandler={getInputHandler("description")}
          />
          <FormInput
            label="Steps"
            isInput={false}
            placeHolder="List the steps that need to be done to resolve this bug"
            value={bug.steps}
            getInputHandler={getInputHandler("steps")}
          />

          <div className="selectors">
            <div className="s-input">
              <h2 htmlFor="">Priority</h2>
              <select name="" id="" value={bug.priority} onChange={getInputHandler("priority")}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="s-input">
              <h2 htmlFor="">Date</h2>
              <input
                className="date-input"
                type="Date"
                value={bug.date}
                onChange={getInputHandler("date")}
              ></input>
            </div>
          </div>

          <FormInput
            label="Version"
            isInput={true}
            placeHolder="What version of the Application are we on? "
            value={bug.version}
            getInputHandler={getInputHandler("version")}
          />

          <div className="form-btns">
            <button onClick={()=>{confirmEdit(bugSaved)}}>
              <Link className="links" to="/">
                <p>
                  <i className="fa-solid fa-edit"></i> Confirm Edits
                </p>
              </Link>
            </button>
            <button onClick={()=>{cancelEdit(bugSaved)}}>
              <Link className="links" to="/">
                <p>
                  <i className="fa-solid fa-cancel"></i> Cancel Changes
                </p>
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
