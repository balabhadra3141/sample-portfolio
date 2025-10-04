import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/page-components/MainPage';
import AboutPage from './components/page-components/AboutPage';
import SkillsPage from './components/page-components/SkillsPage';
import ProjectsPage from './components/page-components/ProjectsPage';
import ContactPage from './components/page-components/ContactPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/About' element={<AboutPage />} />
          <Route path='/Skills' element={<SkillsPage />} />
          <Route path='/Projects' element={<ProjectsPage />} />
          <Route path='/Contact' element={<ContactPage />} />
        </Routes>
      </div>


    </BrowserRouter>
  )
}

export default App;
