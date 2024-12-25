import Homelayout from "../Layout/Homelayout.jsx"

function Home()
{
    return (
        <>       
        <Homelayout>
        <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh] ">
            <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold"> Find out best <span className="text-yellow-500 ">Course </span></h1>
                < p className="text-c">
                    We have a large library of courses taught by highly skilled and qualified faculties at
                    </p>
            </div>
        </div>
        </Homelayout>
        </>
    )

}

export default Home