

interface IIndexUserCard {
    email: string,
    status: boolean,
    role: string,
    fullName: string,
}

function index({ email,
    status,
    role,
    fullName,
}: IIndexUserCard) {
    return (

        <div className="flex flex-col flex-shrink-0 items-center w-60 bg-white shadow-lg rounded-xl p-4 bg-card-background bg-cover bg-bottom bg-no-repeat">
            <div className="relative items-center">
                <img className={`w-24 h-24 rounded-full border-2 ${status ? 'border-[#05D558]' : 'border-[#EF3826]'}`} src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" alt="User 1" />

            </div>
            <div className="mt-4 text-center">
                <div className={`flex items-center justify-center ${status ? 'text-[#05D558]' : 'text-[#EF3826]'}`}>
                    <div className={`w-3 h-3 mr-1 ${status ? 'bg-[#05D558]' : 'bg-[#EF3826]'} border-2 border-white rounded-full`}>
                    </div>{status ? 'Online' : 'Offline'}</div>
                <div className="text-lg font-semibold mt-2">{fullName}</div>
                <div className="text-sm text-[#202224] mt-1">{role}</div>
                <div className="text-sm text-[#202224] mt-1">{email}</div>
            </div>
        </div>

    )
}

export default index