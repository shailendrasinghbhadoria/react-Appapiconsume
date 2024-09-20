import React, { useState } from "react";

const CreateUser = () => {


    const [name, setName] = useState("")
    const [job, setJob] = useState("")


    const handclick = async()=>{        
        const res = await fetch('https://reqres.in/api/users',{
            method: "POST",
            headers:{
                'Content-Type':"application/json",
                'auth-token': localStorage.getItem('token')
            },
            body:JSON.stringify({name, job})
        })
        const json = await res.json()
        console.log(json)
        setName("")
        setJob("")

        alert(Object.values(json).join("\n"))
        
    }

  return (
    <>
      <div className="w-4/12 justify-center px-6 py-6 lg:px-8 mx-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create User
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form method="POST" className="space-y-6" onSubmit={(e)=>e.preventDefault()}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  required
                  onChange={(e)=>setName(e.target.value)}                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="job"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Job
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="job"
                  name="job"
                  type="text"
                  value={job}
                  onChange={(e)=>setJob(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handclick}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
