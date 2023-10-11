import AddTaskForm from "../AddTaskForm";
import Modal from "react-bootstrap/Modal";

const AddTaskModal = ({ showModal, onClose, onHide }) => {
  return (
    <div>
      <Modal show={showModal} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTaskForm showModal={showModal} onClose={onClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
