import { ErrorBoundary } from "react-error-boundary";
import useFetch from "../hooks/useFetch";

const Todo = () => {
  // const url = "https://app.requestly.io/mock/7gmdFoaQdhKfe28uLfa9"
  const url =  "https://dummyjson.com/todos"
  const { data, error, loading } = useFetch(url)

  return (
    <div>
      <h2>Todos</h2>
      {loading && <>loading</>}
      {data && (
        <ul>
          {data.todos.map((item) => (
            <li key={item.id}>{item.todo}</li>
          ))}
        </ul>
      )}
      {error && <div>error</div>}
    </div>
  );
};

export default Todo;
