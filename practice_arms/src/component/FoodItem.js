import '../App.css'

function FoodItem(){
    return(
        <div className='bg-[#F2F2F2] w-52 h-64 rounded-lg m-3'>
            <div className='flex flex-col justify-between h-3/5 rounded-lg' style={{backgroundImage:'url("/image/logo.png")', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
                <div className='flex justify-between items-center'>
                    <div className='bg-red-500 w-max rounded-br-md px-2 py-1 border-2 border-white'>
                        <span className='text-sm text-white'>Save 99%</span>
                    </div>
                    <svg className='w-5 h-5 mr-3' viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3718 0.29187C13.3476 0.29187 12.4086 0.592616 11.5809 1.18577C10.7875 1.75444 10.2592 2.47873 9.94815 3.00541C9.63713 2.4787 9.10884 1.75444 8.31536 1.18577C7.4877 0.592616 6.54871 0.29187 5.52454 0.29187C2.66644 0.29187 0.511108 2.4582 0.511108 5.33097C0.511108 8.43455 3.20004 10.558 7.27072 13.7725C7.96199 14.3185 8.74552 14.9372 9.5599 15.5972C9.66725 15.6843 9.80512 15.7322 9.94815 15.7322C10.0912 15.7322 10.2291 15.6843 10.3364 15.5972C11.1509 14.9372 11.9344 14.3184 12.626 13.7722C16.6963 10.558 19.3852 8.43455 19.3852 5.33097C19.3852 2.4582 17.2299 0.29187 14.3718 0.29187Z" fill="#6D727B"/>
                    </svg>
                </div>
                <div className='flex flex-row justify-end text-right'>
                    <span className='w-auto bg-amber-400 px-2 px-1 rounded-tl-md border-2 border-white'>Bahan Makanan</span>
                </div>
            </div>
            <div className='p-2'>
                <span className='block mb-3 font-semibold'>DALG Bulgogi</span>
                <span className='block line-through'>Rp 85.000</span>
                <div className='flex justify-between'>
                    <span>Rp 33.000</span>
                    <div className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <span>4.6</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodItem;