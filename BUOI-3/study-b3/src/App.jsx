import "./assets/styles.css";
import Hello from "./component/Hello";
import Wellcome from "./component/Wellcome";
import Hi from "./component/Hi";

function App() {
  return (
    <>
      {/* <Hello/> */}

      <Wellcome>
        <Hi />
      </Wellcome>
    </>
  );
}

export default App;
