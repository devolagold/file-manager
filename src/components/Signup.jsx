export default function Signup (){
    return (
        <div className="bg w-full h-screen flex items-center justify-center p-4 md:p-0">
          <div className='w-full md:w-1/4 m-5 px-4 py-8 rounded-lg bg-white shadow-sm'>
              <h1 className='text-3xl font-semibold'>Sign up</h1>
              <p className='font-light text-gray-500 mt-4'>Enter your details to create your account.</p>
              <div className='mt-6'>
                  <div className='flex flex-col mt-2'>
                      {/* <label className='text-lg font-medium'>First Name</label> */}
                      <input 
                          className='w-full border-2 border-gray-100 rounded-md p-4 mt-1 bg-transparent'
                          placeholder="Enter your First Name"/>
                  </div>
                  <div className='flex flex-col mt-2'>
                      {/* <label className='text-lg font-medium'>Last Name</label> */}
                      <input 
                          className='w-full border-2 border-gray-100 rounded-md p-4 mt-1 bg-transparent'
                          placeholder="Enter your Last Name"/>
                  </div>
                  <div className='flex flex-col mt-2'>
                      {/* <label className='text-lg font-medium'>Email</label> */}
                      <input 
                          className='w-full border-2 border-gray-100 rounded-md p-4 mt-1 bg-transparent'
                          placeholder="Enter your email"/>
                  </div>
                  <div className='flex flex-col mt-2'>
                      {/* <label className='text-lg font-medium'>Password</label> */}
                      <input 
                          className='w-full border-2 border-gray-100 rounded-md p-3 mt-1 bg-transparent'
                          placeholder="Create Password"
                          type={"password"}
                      />
                  </div>
                  <div className='mt-4 flex flex-col'>
                      <button className='transition-all hover:opacity-95  ease-in-out transform py-4 bg-[#0066F5] rounded-xl text-white font-medium text-lg'>Log in</button>
                  </div>
                  <div className='mt-3 flex justify-center items-center'>
                      <p className='font-light text-base'>Already have an account?</p>
                      <button className='ml-2 font-medium text-base text-[#0066F5]'>Log in</button>
                  </div>
              </div>
          </div>
        </div>
      )
}