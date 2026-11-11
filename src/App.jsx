import Header from "./components/Header.jsx";
import CourseList from "./components/CourseList.jsx";
import Footer from "./components/Footer.jsx";
import { courses } from "./data/courses.js";

import "./App.css";

function App() {
  return (
      <>
        <Header />

        <main className="main">
          <h2>Наши курсы</h2>
          <CourseList courses={courses} />
          {/*<CourseList courses={[]} /> Для проверки пустого списка*/}
        </main>

        <Footer />
      </>
  );
}

export default App;
