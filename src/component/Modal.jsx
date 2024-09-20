import React,{useEffect, useState} from 'react'


const Modal = ({ showModal, setShowModal, user}) => {
    
   
   const {id, avatar} = user
   const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

   const initialValue ={
    id: user.id,
    email: user.email,
    first_name:user.first_name,
    last_name:user.last_name
    }

    const [userData, setUserData] =useState({})

    const {email, first_name, last_name } = userData
   

    useEffect(()=>{
        setPreviewUrl(avatar)
        setUserData(initialValue)
    },[avatar])

    

    const handleFileChange =(event)=>{
        const file = event.target.files[0];
        setSelectedFile(file);    
        
        const previewUrl = URL.createObjectURL(file);
        setPreviewUrl(previewUrl);
    };

    const handleChange=(e)=>{
        let {name, value} = e.target
        setUserData({...userData, [name]:value})
    }

  
      const handclick=(e)=>{
        e.preventDefault()
        setShowModal(false)
      }

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[50%]">
              
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
               
                <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Edit User</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                
                <div className="relative flex-auto">
                  <div className="w-full justify-center px-6 py-6 lg:px-8 mx-auto">
                   

                    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                      <form method="POST" className="space-y-3">
                        <div>
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            First Name
                          </label>
                          <div className="mt-1">
                            <input
                              id="first_name"
                              name="first_name"
                              type="text"
                              value={first_name}
                              required
                              onChange={handleChange}
                              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <label
                              htmlFor="last_name"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Last Name
                            </label>
                          </div>
                          <div className="mt-1">
                            <input
                              id="last_name"
                              name="last_name"
                              type="text"
                              value={last_name}
                              onChange={handleChange}
                              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Email
                            </label>
                          </div>
                          <div className="mt-1">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={email}
                              onChange={handleChange}
                              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <label
                              htmlFor="file"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Image
                            </label>
                          </div>
                          <div className="mt-1">
                            {/* <img src={avatar} title="Avatar" width={"80px"}/> {avatar} */}
                            {previewUrl && (
                                <div>                                
                                <img src={previewUrl} alt="Selected" style={{ width: "100px", height: "auto" }} />
                                {previewUrl}
                                </div>
                            )}
                            <input
                              id="file"
                              name="file"
                              type="file"
                              accept="image/*"                                              
                              onChange={handleFileChange}
                              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>                        

                       
                      </form>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handclick}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal