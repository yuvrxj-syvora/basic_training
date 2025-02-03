import useFetch from "../hooks/useFetch";

const Todo = () => {
  const { data, error, loading } = useFetch("https://dummyjson.com/todos");

  return (
    <div>
      <h2>Todos</h2>
      {data && (
        <ul>
          {data.todos.map((item) => (
            <li key={item.id}>{item.todo}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todo;
