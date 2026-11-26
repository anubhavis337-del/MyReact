const College = () => {
  return (
    <div  className="text-5xl text-center mt-50 font-large">
        <h1>College Page</h1>

        <div>
            <Link to="/">College</Link>
            <Link to="students">Students</Link>
            <Link to="department">Department</Link>
            <Link to="library">Library</Link>
        </div>

    </div>
  )
}
export default College