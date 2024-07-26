import Buttons from "./Buttons";
import { buttonname } from "../utils/constans";


let ButtonsLists = () => {
  return (
    <div className="flex m-2  overflow-x-scroll  no-scrollbar">
      
      {

      buttonname.map((element,index) => (
        <Buttons key={index} data={element} />
      ))
      
      }
    </div>
  );
};

export default ButtonsLists;
