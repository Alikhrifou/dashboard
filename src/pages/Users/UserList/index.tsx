import React, { useState } from 'react'
import SharedTable from '../../../components/SharedTable'
import UserTest from '../../../assets/imageSVG/userTest.svg'
import UserTest2 from '../../../assets/imageSVG/userTest2.svg'
import ToggleInput from '../../../components/ToogleInput'
import UserFIlter from '../../../components/UserFilter'
import UserForm from './UserAddForm'

import EyeIcon from '../../../assets/imageSVG/eyeIcon.svg'
import EditeIcon from '../../../assets/imageSVG/editeIcon.svg'
import DeleteIcon from '../../../assets/imageSVG/deleteIcon.svg'

interface IUsers {
    Image: JSX.Element,
    Name: string;
    Role: JSX.Element,
    email: string;
    PhoneNumber: string;
    LastSeen: string,
    Active: JSX.Element,
    Actions: ""
}

function Index() {
    const users: IUsers[] = [
        {
            Image: <div className='flex items-center gap-5 justify-start'>
                <img src={UserTest} className='h-12 w-12' />
            </div>,
            Name: 'Test Name',
            Role: <></>,
            email: 'test@example.com',
            PhoneNumber: '0632596335',
            LastSeen: 'Now',
            Active: <><ToggleInput /></>,
            Actions: ''

        }, {
            Image: <div className='flex items-center gap-5 justify-start'>
                <img src={UserTest2} className='h-12 w-12' />
            </div>,
            Name: 'Test Name',
            Role: <></>,
            email: 'test@example.com',
            PhoneNumber: '0632596335',
            LastSeen: 'Now',
            Active: <><ToggleInput /></>,
            Actions: ''

        }
    ];

    const [displayAddUserForm, setDisplayAddUserForm] = useState<boolean>(false)
    const columns = [
        { header: 'Image', accessor: 'Image' as keyof IUsers },
        { header: 'Name', accessor: 'Name' as keyof IUsers },
        {
            header: 'Role', accessor: 'Role' as keyof IUsers,
            render: () => (
                <div className="flex">
                    <div className="border border-[#00B074] text-[#00B074] px-3 py-1 rounded">Seller</div>
                </div>
            )
        },
        { header: 'email', accessor: 'email' as keyof IUsers },
        { header: 'Phone Number', accessor: 'PhoneNumber' as keyof IUsers },
        { header: 'Last Seen', accessor: 'LastSeen' as keyof IUsers },
        { header: 'Active', accessor: 'Active' as keyof IUsers },
        {
            header: 'Actions',
            accessor: 'id' as keyof IUsers,
            render: () => (
                <span className="inline-flex overflow-hidden rounded-lg border border-[##979797] bg-[##D5D5D5] shadow-sm">
                <button
                    className="inline-block border-e px-3 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
                    title="Edit Product"
                >
                    <img src={EyeIcon} className='w-4 h-4 px-0' />
                </button>
                 <button
                    className="inline-block border-e px-3 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
                    title="Edit Product"
                >
                    <img src={EditeIcon} className='w-4 h-4 px-0' />
                </button>
    
                <button
                    className="inline-block px-3 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
                    title="Delete Product"
                >
                  <img src={DeleteIcon} className='w-4 h-4' />
                </button>
            </span>
            )
        },
    ];
    return (<>
        {displayAddUserForm ? <UserForm setDisplayAddUserForm={setDisplayAddUserForm} displayAddUserForm={displayAddUserForm}/> :
            <div>
                <div className='flex my-5 justify-between items-center'>
                    <p className='text-lg text-[#00B074]'>Users</p>
                    <UserFIlter setDisplayAddUserForm={setDisplayAddUserForm} displayAddUserForm={displayAddUserForm} />
                </div>
                <SharedTable columns={columns} data={users} />
            </div>
        }
    </>)
}

export default Index