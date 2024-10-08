import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const DetailPage = () => {
  useTitle("상세 페이지");
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = useSelector((state) =>
    state.todos.todos.find((todo) => todo.id === Number(id))
  );

  const onBackButtonHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>DetailPage</h1>
      <p>할일내용 : {todo.title}</p>
      <p>완료여부 : {todo.isDone ? "네" : "아니요"}</p>
      <button onClick={onBackButtonHandler}>메인페이지로</button>
    </div>
  );
};

export default DetailPage;
