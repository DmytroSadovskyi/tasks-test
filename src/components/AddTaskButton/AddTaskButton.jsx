import React, { useState } from "react";
import Button from "../Button";
import AddTaskModal from "../AddTaskModal";

const AddTaskButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button onClick={handleShowModal}>Add Task</Button>
      <AddTaskModal
        showModal={showModal}
        onClose={handleCloseModal}
        onHide={handleCloseModal}
      />
    </div>
  );
};

export default AddTaskButton;
