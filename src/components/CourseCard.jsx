import Card from "./Card.jsx";
import AvailabilityBadge from "./AvailabilityBadge.jsx";

function CourseCard({ course }) {
    const { id, title, teacher, duration, price, isAvailable } = course;

    return (
        <Card>
            <article>
                <div className="course-heading">
                    <h3>{title}</h3>
                    <AvailabilityBadge isAvailable={isAvailable} />
                </div>

                <p className="course-id">ID: {id}</p>
                <p>Преподаватель: {teacher}</p>
                <p>Продолжительность: {duration} часов</p>
                <p className="course-price">Стоимость: {price} USD</p>

                {price > 400 && (
                    <p className="premium">Премиальный курс</p>
                )}
            </article>
        </Card>
    );
}

export default CourseCard;