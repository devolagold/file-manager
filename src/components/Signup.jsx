import Logo from '/src/assets/Logo.svg'

export default function Signup (){
    return (
        <div className="bg w-full h-screen flex items-center justify-center p-4 md:p-0">
          <div className='w-full md:w-1/4 m-5 px-4 py-8 rounded-lg bg-white shadow-sm'>
          <div className="flex w-full items-center justify-center mb-4">
                <img src={Logo} alt="" width='50%'/>
            </div>
                <h1 className='text-2xl font-semibold'>Sign up</h1>
                <p className='font-light text-gray-500 mt-2'>Enter your details to create your account.</p>
              <div className='mt-4'>
                  <div className='flex flex-col mt-2'>
                      <input 
                          className='w-full border-2 border-gray-100 rounded-md p-3 mt-1 bg-transparent'
                          placeholder="Enter your First Name"/>
                  </div>
                  <div className='flex flex-col mt-2'>
                      <input 
                          className='w-full border-2 border-gray-100 rounded-md p-3 mt-1 bg-transparent'
                          placeholder="Enter your Last Name"/>
                  </div>
                  <div className='flex flex-col mt-2'>
                      <input 
                          className='w-full border-2 border-gray-100 rounded-md p-3 mt-1 bg-transparent'
                          placeholder="Enter your email"/>
                  </div>
                  <div className='flex flex-col mt-2'>
                      <input 
                          className='w-full border-2 border-gray-100 rounded-md p-3 mt-1 bg-transparent'
                          placeholder="Create Password"
                          type={"password"}
                      />
                  </div>
                  <div className='mt-4 flex flex-col'>
                      <button className='transition-all hover:opacity-95  ease-in-out transform py-3 bg-[#0066F5] rounded-xl text-white font-medium text-lg'>Sign up</button>
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