import ReactDOM from "react-dom";
import SearchParams from './SearchParams';

const App = () => {
  return (
    <section className="wrapper">
      <h1>Dogs Farm</h1>
      <SearchParams />
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));