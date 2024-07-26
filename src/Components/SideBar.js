import { sideBarData, sideBarDataDescription } from "../utils/constans";
import { useSelector } from "react-redux";
import SideBar2 from "./SideBar2";
import { sideBarData2 } from "../utils/constans";
import SideBarDataDescription from "./SideBarDataDescription";
import { Link } from "react-router-dom";




let SideBar = () => {
  let selector = useSelector((store) => store.sidebar.toggle);



  return (
    <div className="m-2 text-left   p-2 rounded-md shadow shadow-black w-1.5/12 cursor-pointer">
      {selector
        ? sideBarData.map((element,index) => {
            return (
              <>
                <h1 className=" my-2 text-xl  font-bold  ">👀 {element.icon}</h1>

               
                 <SideBarDataDescription key={sideBarDataDescription[index].key} data = {sideBarDataDescription[index]} />

              </>
            );
          })
        : sideBarData2.map((element) => <Link to={'/'}><SideBar2 key={element.key} data={element} /></Link>)}
    </div>
  );
};

export default SideBar;
