import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Mainpage from './components/mainpage/Mainpage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import Shpalljet from './components/pages/Shpalljet';
import SinglePageOfAds from './components/pages/SinglePageOfAds';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/activities" element={<ActivitiesPage />} /> */}
          <Route path="/ads" element={<Shpalljet />} />
          <Route path="/ads/:adsID" element={<SinglePageOfAds />} />
        </Routes>
        </BrowserRouter>
     {/* <Mainpage /> */}
   </>
  );
}

export default App;
