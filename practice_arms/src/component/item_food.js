
import '../App.css';

function ItemFood() {
    return (
        <div className='flex flex-col bg-blue-800 w-48 font-sans rounded-xl mx-3 my-3'>
            <div className='flex flex-col justify-between'>
                <div className='flex justify-between items-center bg-red-100'>
                    <div>
                        abc
                    </div>
                    <div>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.3718 0.29187C13.3476 0.29187 12.4086 0.592616 11.5809 1.18577C10.7875 1.75444 10.2592 2.47873 9.94815 3.00541C9.63713 2.4787 9.10884 1.75444 8.31536 1.18577C7.4877 0.592616 6.54871 0.29187 5.52454 0.29187C2.66644 0.29187 0.511108 2.4582 0.511108 5.33097C0.511108 8.43455 3.20004 10.558 7.27072 13.7725C7.96199 14.3185 8.74552 14.9372 9.5599 15.5972C9.66725 15.6843 9.80512 15.7322 9.94815 15.7322C10.0912 15.7322 10.2291 15.6843 10.3364 15.5972C11.1509 14.9372 11.9344 14.3184 12.626 13.7722C16.6963 10.558 19.3852 8.43455 19.3852 5.33097C19.3852 2.4582 17.2299 0.29187 14.3718 0.29187Z" fill="#6D727B" />
                        </svg>
                    </div>
                </div>
                <div className='flex justify-end'>
                    Bahan makanan
                </div>
            </div>
           
            <img src='image/logo.png' className='object-cover rounded-xl border border-solid border-1 border-[#F2F2F2]' />

            <div className='flex flex-col px-3.5 py-2.5'>
                <span className='mb-3.5 font-medium text-base'>DALG Bulgogi</span>
                <span className='mb-1 line-through text-xs text-[#5A5A5A] font-poppins'>Rp.85.000</span>
                <div className='flex justify-between'>
                    <span className='text-sm text-[#4F4F4F] font-medium'>Rp.33.000</span>
                    <div className='flex items-center'>
                        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.19867 1.8228C8.41161 1.32514 9.21744 1.32514 9.43105 1.8228L10.8085 5.20379C10.905 5.42785 11.1505 5.57703 11.4247 5.57703H14.8097C15.4352 5.57703 15.7081 6.26691 15.2163 6.60477L12.8075 8.52522C12.6995 8.59873 12.6207 8.70063 12.5822 8.8163C12.5437 8.93198 12.5476 9.05549 12.5932 9.16911L13.4729 12.4729C13.6872 13.0035 12.9938 13.4593 12.4694 13.1327L9.19748 11.293C9.08543 11.2232 8.95181 11.1858 8.81486 11.1858C8.6779 11.1858 8.54428 11.2232 8.43223 11.293L5.1603 13.1327C4.63661 13.4593 3.94256 13.0029 4.15683 12.4729L5.03653 9.16911C5.08217 9.05549 5.08601 8.93198 5.04752 8.8163C5.00902 8.70063 4.93017 8.59873 4.82226 8.52522L2.4134 6.60477C1.92098 6.26691 2.19513 5.57703 2.81931 5.57703H6.20437C6.33765 5.57742 6.46792 5.54195 6.57795 5.4753C6.68798 5.40865 6.77258 5.31397 6.82056 5.20379L8.198 1.8228H8.19867Z" stroke="#FEE100" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className='font-medium text-xs ml-1'>4.5</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ItemFood;
