import logo from "./logo.svg";
import GetBalanceData from "./GetBalanceData";

function App() {
  return (
    <div>
      <header className="flex">
        <img src={logo} alt="logo" />
        <h2>.React, Sass & Ether JS.</h2>
      </header>
      <GetBalanceData />
      <footer className="flex">
        <h2>
          .all projects on{" "}
          <a
            href="https://github.com/cgbl-90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github.
          </a>
        </h2>
        <h2>
          <a
            href="https://t.me/cg_bl"
            target="_blank"
            rel="noopener noreferrer"
          >
            @gb_bl
          </a>
        </h2>
      </footer>
    </div>
  );
}

export default App;
