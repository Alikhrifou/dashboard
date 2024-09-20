import React from 'react'
import { Link } from 'react-router-dom'
import CallCenterImage from '../../assets/imageSVG/callCenterSvg.svg'
import FollowUpIcon from '../../assets/imageSVG/followUpIcon.svg'

function index() {
    return (<>
        {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

        <section className='w-full bg-main-background bg-no-repeat bg-cover bg-right bg-scroll' >

            <div className="grid lg:min-h-screen">


                <main
                    className="flex items-center justify-center px-8 py-8"
                >
                    <div className="max-w-xl lg:max-w-3xl border rounded-lg px-12 py-5 bg-white">


                        <h1 className="mt-6 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl mb-5">
                            Login To Account
                        </h1>
                        <span className='block text-center my-2'>Please enter your email adress and password to continue</span>



                        <form action="#" className="mt-8 grid grid-cols-6 gap-6">

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-3"> Email Adress :</label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    className="mt-1 h-12 w-full border rounded-xl border-[#D8D8D8] bg-[#F1F4F9] text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <div className="flex justify-between mb-3">
                                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>
                                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700">Forgot Password ?</label>

                                </div>

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    className="mt-1 h-12 w-full border rounded-xl border-[#D8D8D8] bg-[#F1F4F9] text-sm text-gray-700 shadow-sm"
                                />
                            </div>



                            <div className="col-span-6">
                                <label htmlFor="MarketingAccept" className="flex gap-4">
                                    <input
                                        type="checkbox"
                                        id="MarketingAccept"
                                        name="marketing_accept"
                                        className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                                    />

                                    <span className="text-sm text-gray-700">
                                        Remember password
                                    </span>
                                </label>
                            </div>

                            <div className="flex flex-col col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="inline-block w-72 shrink-0 rounded-xl border border-blue-600 bg-[#00B074] px-12 py-3  font-medium text-white transition active:text-blue-500"
                                >
                                    <Link to='/'>Sign in</Link>
                                </button>

                                <div className="flex justify-between items-center mt-4 w-full sm:mt-0">
                                    <span className='font-semibold text-[#202224]'>Don't have account?</span>
                                    <div>
                                        <Link to="#" className="text-blue-600 underline font-semibold text-end">Create account</Link>.
                                    </div>
                                </div>
                                <div className="flex gap-4">

                                    <div className="flex gap-2 flex-col items-center cursor-pointer">
                                        <img src={CallCenterImage} alt="" />
                                        <p>Callcenter</p>
                                    </div> 
                                    <div className="flex gap-2 flex-col items-center cursor-pointer">
                                        <img src={FollowUpIcon} alt="" />
                                        <Link to='/admin'>Follow up</Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>

    </>

    )
}

export default index