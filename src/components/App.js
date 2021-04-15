import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import StockBlock from "./StockBlock";
import StockInfo from "../SP500";

export default function App() {
  return (
    <div className="App">
      <Header />
      {StockInfo.map((node, index) => (
        <StockBlock
          key={index}
          Symbol={node.Symbol}
          Name={node.Name}
          Industry={node.Industry}
        />
      ))}
      <Footer />
    </div>
  );
}
