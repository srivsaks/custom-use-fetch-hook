import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const [data1, loading1, error1] = useFetch({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    type: "GET"
  });
  console.log(data1, loading1, error1);
  return (
    <div className="App">
      {error1 && <>error</>}
      {data1 && <>data1</>}
      {loading1 && <div>Loading...</div>}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
