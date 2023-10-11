import { MdClose, MdEdit } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted, updateTask } from "../../redux/actions";
import EditTaskModal from "../EditTaskModal";
import { useState } from "react";

const Task = ({ task }) => {
  const [modalShow, setModalShow] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedText, setEditedText] = useState(task.text);

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  const handleEdit = () => {
    setModalShow(true);
  };

  const handleSaveChanges = () => {
    dispatch(updateTask(task.id, editedTitle, editedText));
    setModalShow(false);
  };

  const handleCloseModal = () => {
    setEditedTitle(task.title);
    setEditedText(task.text);
    setModalShow(false);
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        onChange={handleToggle}
        className={css.checkbox}
        checked={task.completed}
      />

      <div className={css.taskInfo}>
        <p className={css.title}>{editedTitle}</p>
        <p className={css.text}>{editedText}</p>
      </div>
      <div className={css.buttons}>
        <button className={css.btn} onClick={handleEdit}>
          <MdEdit size={24} />
        </button>
        <button className={css.btn} onClick={handleDelete}>
          <MdClose size={24} />
        </button>
      </div>
      <EditTaskModal
        show={modalShow}
        onHide={handleCloseModal}
        editedTitle={editedTitle}
        editedText={editedText}
        setEditedTitle={setEditedTitle}
        setEditedText={setEditedText}
        handleSaveChanges={handleSaveChanges}
      />
    </div>
  );
};

export default Task;
