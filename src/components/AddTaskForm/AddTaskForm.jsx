import React, { useState } from "react";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";
import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";
const AddTaskForm = ({ showModal, onClose }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [validated, setValidated] = useState(false);

  const existingTask = tasks.find((task) => task.title === title);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
    } else if (existingTask) {
      alert("You already have a task with such title");
      setTitle("");
      setText("");
      return;
    } else {
      dispatch(addTask(title, text));
      onClose();
      setTitle("");
      setText("");
      setValidated(false);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setValidated(false);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <input
          className={`form-control mb-2 ${
            validated ? (title.trim() === "" ? "is-invalid" : "is-valid") : ""
          }`}
          type="text"
          name="title"
          placeholder="Enter task title..."
          value={title}
          onChange={handleTitleChange}
          required
        />
        {validated && title.trim() === "" && (
          <div className="invalid-feedback">Title is required.</div>
        )}
      </div>
      <textarea
        className="form-control mb-4"
        style={{ resize: "none" }}
        name="text"
        placeholder="Enter task text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button type="submit">Add task</Button>
    </form>
  );
};

export default AddTaskForm;
