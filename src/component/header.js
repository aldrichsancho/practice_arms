import '../App.css';

function Header() {
  return (
    <div className="flex w-screen bg-[#DD0103] rounded-b-3xl justify-between items-center">
      <div className='flex w-1/3 gap-9 pl-24 py-6 text-[#F9EFEF] text-base'>
        <a href="#">Home</a>
        <a href="#" className='font-semibold '>Product</a>
        <a href="#">Voucher</a>
      </div>

      <img src="image/logo.png" alt="logo" width={"135px"}/>

      <div className='flex gap-5 py-6 pr-24 text-[#F9EFEF] text-base items-center'>
        <svg className="divide-x-4" width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.83954 8.70911C1.47482 8.70911 1.12503 8.85345 0.867137 9.11039C0.60924 9.36732 0.464355 9.7158 0.464355 10.0792C0.464355 10.4425 0.60924 10.791 0.867137 11.0479C1.12503 11.3049 1.47482 11.4492 1.83954 11.4492H3.51726L3.93669 13.1234C3.94086 13.1427 3.94544 13.1619 3.95044 13.181L5.81794 20.6204L4.5899 21.8424C2.85717 23.5687 4.08384 26.5198 6.53441 26.5198H18.3417C18.7065 26.5198 19.0562 26.3755 19.3141 26.1185C19.572 25.8616 19.7169 25.5131 19.7169 25.1498C19.7169 24.7864 19.572 24.4379 19.3141 24.181C19.0562 23.924 18.7065 23.7797 18.3417 23.7797H6.53441L7.9096 22.4096H16.9666C17.2219 22.4095 17.4721 22.3386 17.6892 22.2047C17.9064 22.0709 18.0818 21.8795 18.196 21.652L22.3215 13.4317C22.4263 13.2229 22.4757 12.9908 22.4652 12.7576C22.4546 12.5244 22.3844 12.2978 22.2613 12.0992C22.1381 11.9006 21.9661 11.7366 21.7614 11.6229C21.5568 11.5091 21.3264 11.4493 21.0921 11.4492H6.35014L5.92383 9.74624C5.84934 9.44997 5.67761 9.18699 5.43593 8.99909C5.19425 8.81118 4.89647 8.70911 4.5899 8.70911H1.83954Z" fill="white" />
          <path d="M19.7169 29.945C19.7169 30.49 19.4996 31.0127 19.1127 31.3981C18.7259 31.7835 18.2012 32.0001 17.6541 32.0001C17.107 32.0001 16.5823 31.7835 16.1955 31.3981C15.8086 31.0127 15.5913 30.49 15.5913 29.945C15.5913 29.3999 15.8086 28.8772 16.1955 28.4918C16.5823 28.1064 17.107 27.8899 17.6541 27.8899C18.2012 27.8899 18.7259 28.1064 19.1127 28.4918C19.4996 28.8772 19.7169 29.3999 19.7169 29.945Z" fill="white" />
          <path d="M6.65262 32.0001C7.1997 32.0001 7.72437 31.7835 8.11122 31.3981C8.49806 31.0127 8.71539 30.49 8.71539 29.945C8.71539 29.3999 8.49806 28.8772 8.11122 28.4918C7.72437 28.1064 7.1997 27.8899 6.65262 27.8899C6.10553 27.8899 5.58086 28.1064 5.19402 28.4918C4.80717 28.8772 4.58984 29.3999 4.58984 29.945C4.58984 30.49 4.80717 31.0127 5.19402 31.3981C5.58086 31.7835 6.10553 32.0001 6.65262 32.0001Z" fill="white" />
          <circle cx="21.5668" cy="9.0585" r="8.0585" fill="#DD0103" stroke="white" strokeWidth="2" />
          <path d="M19.164 11.104C19.932 10.464 20.544 9.932 21 9.508C21.456 9.076 21.836 8.628 22.14 8.164C22.444 7.7 22.596 7.244 22.596 6.796C22.596 6.388 22.5 6.068 22.308 5.836C22.116 5.604 21.82 5.488 21.42 5.488C21.02 5.488 20.712 5.624 20.496 5.896C20.28 6.16 20.168 6.524 20.16 6.988H18.528C18.56 6.028 18.844 5.3 19.38 4.804C19.924 4.308 20.612 4.06 21.444 4.06C22.356 4.06 23.056 4.304 23.544 4.792C24.032 5.272 24.276 5.908 24.276 6.7C24.276 7.324 24.108 7.92 23.772 8.488C23.436 9.056 23.052 9.552 22.62 9.976C22.188 10.392 21.624 10.896 20.928 11.488H24.468V12.88H18.54V11.632L19.164 11.104Z" fill="white" />
        </svg>
        <svg width="2" height="42" viewBox="0 0 2 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 1L1 41" stroke="white" />
        </svg>

        <div className='flex'>
          <div className='rounded-full'>
            <img src="image/profile.jpg" className='rounded-full object-cover' style={{ height: "44px", width: "44px" }} />
          </div>
        </div>
        <span className='font-medium text-sm '>User Name</span>
      </div>
    </div>

  );
}

export default Header;
