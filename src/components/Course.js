const Header = ({ course }) => {
    return (
        <div>
            <h2>{course}</h2>
        </div>
    );
};

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => <Part part={part} key={part.id} />)}
        </div>
    );
};

const Part = ({ part }) => {
    return (
        <div>
            <p>
                {part.name} {part.exercises}
            </p>
        </div>
    )
}

const Total = ({ parts }) => {
    const sum = parts.reduce((previous, part) => previous + part.exercises, 0);
    return <p><b>Total number of exercises: {sum}</b></p>;
};


const Course = ({ course }) => {

    return (
        <div className="course">
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

export default Course