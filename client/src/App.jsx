import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage.view';
import ClassroomPage from './views/ClassroomPage/ClassroomPage.view';
import InstructorsPage from './views/InstructorsPage/InstructorsPage.view';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/instructors" element={<InstructorsPage />} />
        <Route path="/classroom" element={<ClassroomPage />} />
        {/*<Route
        path="/library/:currentBookIndex"
        element={<ReadPage currentBookIndex={currentBookIndex} />}
      />*/}
      </Routes>
    </div>
  );
}

export default App;
