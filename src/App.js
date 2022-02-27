import logo from './logo.svg';
import './App.css';
import Header from './component/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='flex justify-between items-center text-sm '>
        
        <div className='flex items-center'>
          <span className='text-[#FF685B] font-bold'>
            Login
          </span>
          <div className='bg-[#FF685B] rounded px-6 py-4 ml-11'>
            <span className='text-white font-bold'>
                Join Us
            </span>
          </div>
        </div>
      </div>

      <div className='flex'>
          <div className='flex flex-col w-1/2 mt-32 text-left'>
              <span className="text-[#FF685B] font-bold">Join Us</span>
              <span className='font-bold text-6xl  my-9'>A Great Place to Recevice Care</span>
              <span className='text-xl text-[#737373] mb-9'>Medical Recover is most focused in helping you discover your most beautiful smile</span>
              <div className='flex'>
                <div className='bg-[#FF685B] rounded py-4 px-10 text-white mr-5'>Get Quote Now</div>
                <div className='bg-white rounded py-4 px-10 text-[#FF685B] border-2 border-[#FF685B]'>Learn More</div>
              </div>
          </div>
          <img src="image/hahay.png"/>
      </div>
      
      <div className='flex flex-row justify-between -mt-10'>
        <div className='bg-black py-9'>abc</div>
        <div className='bg-red-400 py-9'>abc</div>
        <div className='bg-blue-400 py-9'>abc</div>
      </div>
      
    </div>
  );
}

export default App;
