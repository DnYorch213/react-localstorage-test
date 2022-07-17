export const VisibilityControl = ({
  isChecked,
  callback,
  description,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete all ${description}?`)) {
      cleanTasks();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => callback(e.target.checked)}
        />
        <label htmlFor="form-check-label">Show Task Done</label>
      </div>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Clear
      </button>
    </div>
  );
};
