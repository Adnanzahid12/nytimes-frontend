import NyTimes from "./comonents/NYTimes/NyTimes"
import ArticleDetails from "./comonents/ArticleDetails/ArticleDetails";
import { DataProvider } from "./comonents/dataProvider/dataProvider";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <DataProvider>
    <Router>
            <Routes>
                <Route path="/" element={<NyTimes />} />
                <Route path="/article-details/:id" element={<ArticleDetails />} />
            </Routes>
        </Router>
    </DataProvider>
  );
}

export default App;
