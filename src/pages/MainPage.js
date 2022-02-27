import '../App.css';
import Sidebar from '../component/Sidebar';
import FoodItem from '../component/FoodItem';

function MainPage(){
    return(
        <div className="flex flex-row pt-20">
          <Sidebar/>
          <div className="grid grid-cols-4 gap-1">
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
          </div>
        </div>
    );
}

export default MainPage;
