import CanvasModel from "./Canvas";
import { Home, Customize } from "./Pages";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customize />
    </main>
  );
}

export default App;
