import Logo from '/src/assets/Logo.svg'

export default function Login (){
    return (
        <div className="bg w-full h-screen flex items-center justify-center p-4 md:p-0">
          <div className='w-full md:w-1/4 m-5 px-4 py-8 rounded-lg bg-white shadow-sm'>
            <div className="flex w-full items-center justify-center mb-4">
                <img src={Logo} alt="" width='50%'/>
            </div>
              <h1 className='text-2xl text-center font-medium'>Login</h1>
              <p className='font-light text-center text-gray-500 mt-2'>Welcome back! 👋 Login to get started!</p>
              <div className='mt-6'>
                  <div className='flex flex-col'>
                      <label className='text-lg font-medium'>Email</label>
                      <input 
                          className='w-full border-2 border-gray-100 rounded-md p-3 mt-1 bg-transparent'
                          placeholder="Enter your email"/>
                  </div>
                  <div className='flex flex-col mt-2'>
                      <label className='text-lg font-medium'>Password</label>
                      <input 
                          className='w-full border-2 border-gray-100 rounded-md p-3 mt-1 bg-transparent'
                          placeholder="Min. of 8 characters"
                          type={"password"}
                      />
                  </div>
                  <div className='mt-4 flex flex-col'>
                      <button className='transition-all hover:opacity-95  ease-in-out transform py-3 bg-[#0066F5] rounded-lg text-white font-medium text-lg'>Log in</button>
                  </div>
                  <div className='mt-3 flex justify-center items-center'>
                      <p className='font-light text-base'>Don't have an account?</p>
                      <button className='ml-2 font-medium text-base text-[#0066F5]'>Sign up</button>
                  </div>
              </div>
          </div>
        </div>
      )
}