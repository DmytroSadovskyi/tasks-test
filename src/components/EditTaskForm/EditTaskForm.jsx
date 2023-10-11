const EditTaskForm = ({editedTitle, setEditedTitle, editedText, setEditedText}) => {
  return (
    <form>
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
        style={{ resize: "none" }}
      />
    </form>
  );
};

export default EditTaskForm;