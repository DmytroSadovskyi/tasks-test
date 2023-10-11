import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditTaskForm from "../EditTaskForm";

const EditTaskModal = ({
  editedTitle,
  editedText,
  setEditedTitle,
  setEditedText,
  handleSaveChanges,
  show,
  onHide,
}) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditTaskForm
          editedText={editedText}
          editedTitle={editedTitle}
          setEditedText={setEditedText}
          setEditedTitle={setEditedTitle}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTaskModal;
