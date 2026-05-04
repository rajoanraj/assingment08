const AllCourse = async () => {
 const res = await fetch('http://localhost:3000/data.json')
    const courses = await res.json()
    console.log(courses)   
    return (
        <div>
            <h1 className="text-2xl font-bold m-3">All Courses</h1>
            <div>
                {courses.map(courses => (
                    <div key={courses.id} course={courses} className="border p-4 m-3 rounded">
                        
                    </div>
                ))}
            </div>
        </div>
        ) 
}

export default AllCourse
