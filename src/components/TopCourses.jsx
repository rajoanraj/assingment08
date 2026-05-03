import Image from "next/image";
import { FcRating } from "react-icons/fc";
const TopCourses = async () => {
    const res = await fetch('http://localhost:3000/data.json')

    const courses = await res.json();

    return (
        <div>
            <h2 className="text-2xl font-bold mt-5">Top Courses</h2>
            <div className="grid grid-cols-3 gap-3">
                {courses.map((course) => (
                    <div key={course.id} className="course-card border rounded-xl p-0 overflow-hidden">
                        <Image className="rounded-lg" src={course?.image} alt={course?.title} width={500} height={400} />
                        <h3>{course.title}</h3>
                        <div className="grid grid-cols-2 gap-50">
                        <p className='course-instructor text-2xl'>{course.instructor}</p>
                      {course.rating > 10 && <div className="flex items-center gap-0"><FcRating/>{course.rating}
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">View</button>
                        </div>}
                          </div>
                      <div className="grid grid-cols-2 gap-50">
                        <p>{course.category}</p>
                        <p>{course.level}</p>
                      </div>
                      <p>{course.duration}</p>

                        <div className="text-xl">{course.description}</div>
                    </div>
                ))} 
            </div>

        </div>
    );
};


export default TopCourses
