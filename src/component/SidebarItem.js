import '../App.css';

function SidebarItem(props){
    return(
      <div className="bg-white font-semibold rounded-lg text-center shadow-md py-5">
        {props.name}
      </div>
    );
}

export default SidebarItem;
