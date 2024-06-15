import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/Homepage';
import Courses from './Pages/Courses/Courses';
import CoursesDetalis from './Pages/CoursesDetalis/CoursesDetalis';
import CoursesPricing from './Pages/CoursesPricing/CoursesPricing';
import AllMentors from './Pages/AllMentors/AllMentors';
import SingleMentorDetalis from './Pages/SingleMentorDetalis/SingleMentorDetalis';
import { NavbarComponent } from './components/NavbarComponent/NavbarComponent';
import { Footer } from './components/Footer/Footer';


function App() {

  return (
    <>

      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/CoursesDetalis' element={<CoursesDetalis />} />
          <Route path='/CoursesPricing' element={<CoursesPricing />} />
          <Route path='/AllMentors' element={<AllMentors />} />
          <Route path='/SingleMentorDetalis' element={<SingleMentorDetalis />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
