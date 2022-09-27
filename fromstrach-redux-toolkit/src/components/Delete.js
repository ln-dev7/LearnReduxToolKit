import axios from "axios";
import { useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { deletePicture } from "../feature/pictures.slice";

const Delete = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    axios.delete("http://localhost:3001/pictures/" + id).then(() => {
      dispatch(deletePicture(id));
    });
  };
  return (
    <div className="delete-icon" onClick={() => handleDelete()}>
      <AiOutlineDelete />
    </div>
  );
};

export default Delete;
