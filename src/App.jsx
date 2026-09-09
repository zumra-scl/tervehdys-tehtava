import Tervehdys from "./components/Tervehdys";
import OpiskelijaTiedot from "./components/OpiskelijaTiedot";

function App() {
  const opiskelija = {
    nimi: "Matti Meikäläinen",
    ika: 16,
    kurssi: "Reactin perusteet",
  };

  return (
    <div>
      <Tervehdys nimi="Mika" />

      <OpiskelijaTiedot opiskelija={opiskelija} />
    </div>
  );
}

export default App;
