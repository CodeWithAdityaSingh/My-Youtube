import { addToggle } from "../utils/sidebarSlice";
import { useDispatch } from "react-redux";
let Header = () => {

  let dispatch = useDispatch()
  return (
    <div className="flex justify-between   w-full px-6 items-center">


      <div className="flex items-center  justify-center gap-4">
        <div  onClick={()=>{
          
                 dispatch(addToggle())
         }}>
          <img
            className="w-8 cursor-pointer"
            alt="hamburger"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAARVBMVEX///8AAAD19fXo6OhDQ0Pv7+9JSUkbGxu8vLzJycmMjIz4+PjBwcGCgoJRUVFzc3MmJiaZmZkgICBeXl56enplZWVWVlaT91pBAAABgElEQVR4nO3b246CMBhFYebASSkqHt7/UWeYCdaLtmK82JtkfU+wEkMtP21VAQAAAAAAAOvtP2X2z+vqITStTBOGutzXNx9iTV/qC+q8Wcj37dRt/3a5vk5dtugyz8eoDluM6SelV3dF6QfloM6KDsnAozorOiYD1VWPthk4qauiKRl4UWdF6T8Tm3U6t1LXN3XX4pbZ0gzqsMWQ7vPfLFTVSd02O+X7fv+P5WvNVNywzonX8VtmvD7L+1PLrKkDAAAA8J76S2bNnr8L50bmHDLj6bu+Vb92tsX3OovRQmGwYNG35e8k7uM3m+lbbv5mNAK+JAP5TvKCbQba/8T2D4n9MmO/UNv/1flvFkwKC33+G9bKfss/M39pAgAAAPAm76NR5ofL3I/nuR9wtBgsFEYLNvO3zCFbn/skmfGbzfQtN38zGgGnj8rLV5gofdlAXfVom4H230nsL13ZX1vzWagzF/98VuoNfydxv77rfwHa/wr5zPsSPgAAAAAAAHD3AycCPgunKl+TAAAAAElFTkSuQmCC"
          ></img>
        </div>

        <div>
          <img
            className="w-28"
            alt="youtubeLogo"
            src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
          ></img>
        </div>
      </div>

      <div className="flex items-center p-2 border-none justify-center  gap-x-4  border border-black h-10 rounded-3xl bg-gray-300 overflow-hidden ">
        <input
          className=" border rounded-l-3xl  p-1  w-96   bg-gray-200  border-none focus:outline-none  "
          type="text"
          placeholder="SearchHere!"
        ></input>
        <button className="w-11">
         <h3 className="text-3xl">🔎</h3>
        </button>
      </div>

      <div className="flex items-center  justify-center gap-4">
        <div>
          <img
            className="w-20"
            alt="userlogo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQk_YLiGYmCWN9N_UMuFeiqrr91TW1VaVhXw&s"
          ></img>
        </div>
        <div>
          <img
            className="w-12 rounded-full"
            alt="userloginlogo"
            src="https://yt3.ggpht.com/yti/ANjgQV8FSl6VWeFDpXp1KY4viNeKzQ3iy5X1GFPTH8KSPBDmzFs=s88-c-k-c0x00ffffff-no-rj"
          ></img>
        </div>
      </div>


    </div>

  );
};

export default Header;
