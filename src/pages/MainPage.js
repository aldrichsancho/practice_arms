import '../App.css';
import FoodItem from '../component/FoodItem';

function MainPage(){
    return(
        <div className="flex flex-row">
          <div className="sidebar w-3/12 bg-[#FF0000]">

          </div>
          <div className="w-8/12">
            <FoodItem/>
          </div>
        </div>
    );
}

export default MainPage;
