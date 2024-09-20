interface ISelectInput {
    label?: string;
    width?: string;
}

function SharedSelect({ label, width }: ISelectInput) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="" className='text-[#6B6B6B] text-sm'>{label}</label>

            <div className="relative">
                <select
                    name=""
                    id=""
                    className="border w-full  rounded-xl px-3 py-1 h-14 appearance-none"
                    style={{ width: `${width}` }}
                >
                    <option value="">All</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg width="20" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.32297 5.1203L1.78587 0.268485C1.37733 -0.0894952 0.71495 -0.0894952 0.306407 0.268485C-0.102136 0.626466 -0.102136 1.20687 0.306407 1.56485L6.58324 7.06485C6.99179 7.42283 7.65416 7.42283 8.06271 7.06485L14.3395 1.56485C14.7481 1.20687 14.7481 0.626466 14.3395 0.268485C13.931 -0.0894952 13.2686 -0.0894952 12.8601 0.268485L7.32297 5.1203Z" fill="#A6A6A6" />
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default SharedSelect