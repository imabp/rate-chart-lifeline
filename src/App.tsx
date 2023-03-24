import "./styles.css";
import { Search } from "./components/search";
import { createContext, useState } from "react";
import { RateChartItem } from "./data";
type GlobalContextProps = {
  appState: RateChartItem[];
  setAppState: React.Dispatch<React.SetStateAction<RateChartItem[]>>;
};
export const GlobalContext = createContext<GlobalContextProps>({
  appState: [],
  setAppState: () => {}
});

export default function App() {
  const [appState, setAppState] = useState<RateChartItem[]>([]);

  let totalPrice = 0;

  appState.forEach((s) => {
    totalPrice += s.price;
  });

  return (
    <GlobalContext.Provider value={{ appState, setAppState }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="App">
          <h1>RATE CHART</h1>
          <h2>Type test name to start</h2>
          <Search />
        </div>
        <div className="App">
          <h1>Selected Item</h1>
          <h2>Total Price: {totalPrice}</h2>{" "}
          {/* {appState.reduce((acc, current) => acc.price+current.price)} */}
          {appState?.map((s) => (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>{s.name}</div>
              <div>{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </GlobalContext.Provider>
  );
}
