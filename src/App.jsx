import CityTabs from "./components/CityTabs";
import Hotel from "./components/Hotel";

function App() {
  return (
    <>
      <div>
        <CityTabs />
        <div className="max-w-screen">
          <Hotel />
        </div>
      </div>
    </>
  );
}

export default App;
