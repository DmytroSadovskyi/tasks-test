import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const TaskModal = ({
  editedTitle,
  editedText,
  setEditedTitle,
  setEditedText,
  handleSaveChanges,
  show,
  onHide,
}) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="form-control"
        />
        <textarea
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="form-control mt-2"
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

export default TaskModal;
