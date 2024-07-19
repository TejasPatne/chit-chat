import { MdOutlineWallpaper } from "react-icons/md";
import useChangeBg from "../../hooks/useChangeBg";

function BgButton() {
    const nextBg = useChangeBg();
    const handleClick = (e) => {
        e.preventDefault();
        nextBg();
    }
  return (
    <div className="mt-3" onClick={(e) => handleClick(e)}>
      <MdOutlineWallpaper className="w-6 h-6 text-white cursor-pointer" />
    </div>
  );
}

export default BgButton;
