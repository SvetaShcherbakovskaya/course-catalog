import CourseCard from "./CourseCard.jsx";

function CourseList({ courses }) {
    if (courses.length === 0) {
        return <p className="empty-message">Курсы не найдены.</p>;
    }

    return (
        <ul className="course-list">
            {courses.map((course) => (
                <li key={course.id}>
                    <CourseCard course={course} />
                </li>
            ))}
        </ul>
    );
}

export default CourseList;