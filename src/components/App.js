import { useState } from "react";

const App = () => {
  const [showList, setShowList] = useState(false);
  let listItem = ["Yes", "Probably not"];

  return (
    <div className="App">
      <div className="content">
        <p>Should you use a dropdown?</p>
        <button onMouseEnter={() => setShowList(!showList)}>
          Select
          <svg
            className={showList && "rotate"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
          </svg>
        </button>
        {showList && (
          <ul>
            {listItem.map((item) => {
              return <li onClick={() => setShowList(!showList)}>{item}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
