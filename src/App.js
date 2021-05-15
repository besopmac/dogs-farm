import ReactDOM from "react-dom";
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Dogs Farm</h1>
      <Pet
        name="Barney"
        animal="dog"
        breed="beagle"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));