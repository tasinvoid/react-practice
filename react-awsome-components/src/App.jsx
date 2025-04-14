import "./App.css";
import Chart from "./Components/Chart/Chart";
import Navbar from "./Components/Navbar/Navbar";
import PricingContainer from "./Components/PricingContainer/PricingContainer";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <Chart></Chart>
      <main>
        <PricingContainer></PricingContainer>
      </main>
    </>
  );
}

export default App;
