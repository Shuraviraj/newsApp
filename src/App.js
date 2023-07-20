import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#ff1a1a" height={3} loaderSpeed={1100} progress={progress} />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key={"general"} pageSize={pageSize} country={"in"} category={"general"} />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key={"business"} pageSize={pageSize} country={"in"} category={"business"} />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key={"entertainment"} pageSize={pageSize} country={"in"} category={"entertainment"} />} />
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key={"general"} pageSize={pageSize} country={"in"} category={"general"} />} />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key={"health"} pageSize={pageSize} country={"in"} category={"health"} />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key={"science"} pageSize={pageSize} country={"in"} category={"science"} />} />
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key={"sports"} pageSize={pageSize} country={"in"} category={"sports"} />} />
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key={"technology"} pageSize={pageSize} country={"in"} category={"technology"} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

//****************BELOW IS THE CLASS BASED CODE */
// import "./App.css";

// import React, { Component } from "react";
// import Navbar from "./components/Navbar";
// import News from "./components/News";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";

// export default class App extends Component {
//   pageSize = 6;
//   apiKey = process.env.REACT_APP_NEWS_API;

//   state = {
//     progress: 0,
//   };

//   setProgress = (progress) => {
//     setState({ progress: progress });
//   };

//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <LoadingBar color="#ff1a1a" height={3} loaderSpeed={1100} progress={state.progress} />
//           <Routes>
//             <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key={"general"} pageSize={pageSize} country={"in"} category={"general"} />} />
//             <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key={"business"} pageSize={pageSize} country={"in"} category={"business"} />} />
//             <Route
//               path="/entertainment"
//               element={<News setProgress={setProgress} apiKey={apiKey} key={"entertainment"} pageSize={pageSize} country={"in"} category={"entertainment"} />}
//             />
//             <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key={"general"} pageSize={pageSize} country={"in"} category={"general"} />} />
//             <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key={"health"} pageSize={pageSize} country={"in"} category={"health"} />} />
//             <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key={"science"} pageSize={pageSize} country={"in"} category={"science"} />} />
//             <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key={"sports"} pageSize={pageSize} country={"in"} category={"sports"} />} />
//             <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key={"technology"} pageSize={pageSize} country={"in"} category={"technology"} />} />
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }
