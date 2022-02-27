import '../App.css';
import SidebarItem from './SidebarItem'

function Sidebar(){
    return(
        <div className="flex flex-col w-1/4 px-20">
          <div className="flex flex-row w-full mb-10">
            <div className="flex w-8/12 h-10">
              <input type="text" className="w-full p-4" placeholder="Cari produk ..."/>
            </div>
            <div className="flex w-4/12 h-10">
              <button className="bg-[#DD0103] pl-5 pr-5">
                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.77205 15.4882C8.27458 15.4878 9.73381 14.9126 10.9174 13.8542L14.6386 18.1096L15.8356 16.7408L12.1144 12.4854C13.0404 11.1318 13.5437 9.46274 13.5441 7.7441C13.5441 3.4742 10.506 0 6.77205 0C3.03811 0 0 3.4742 0 7.7441C0 12.014 3.03811 15.4882 6.77205 15.4882ZM6.77205 1.93602C9.57314 1.93602 11.8511 4.54095 11.8511 7.7441C11.8511 10.9473 9.57314 13.5522 6.77205 13.5522C3.97096 13.5522 1.69301 10.9473 1.69301 7.7441C1.69301 4.54095 3.97096 1.93602 6.77205 1.93602Z" fill="white"/>
                  <path d="M7.96712 6.37532C8.28794 6.74317 8.46486 7.22911 8.46486 7.74409H10.1579C10.1586 7.23533 10.0712 6.73145 9.9006 6.26156C9.73002 5.79168 9.47969 5.36512 9.16407 5.00654C7.88247 3.5429 5.6604 3.5429 4.37964 5.00654L5.5749 6.37726C6.21824 5.6435 7.32716 5.64544 7.96712 6.37532Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <SidebarItem name="Featured Product"/>
            <SidebarItem name="Best Seller"/>
            <SidebarItem name="Food"/>
            <SidebarItem name="Drink"/>
            <SidebarItem name="Foodstuff"/>
            <SidebarItem name="Rent"/>
            <SidebarItem name="Voucher"/>
          </div>
        </div>
    );
}

export default Sidebar;
