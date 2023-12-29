import DeleteIcon from "@mui/icons-material/Delete";
const DeleteSavedWord = ({ onDelete }: any) => {
  return (
    <div>
      <button onClick={onDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default DeleteSavedWord;
