import { render } from "react-dom";
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Barney" animal="dog" breed="beagle" />
      <Pet name="Nemo" animal="fish" breed="clownfish" />
    </div>
  );
};

render(<App />, document.getElementById("root"));