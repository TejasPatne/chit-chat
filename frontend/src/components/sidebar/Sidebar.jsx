 import BgButton from "./BgButton";
import Conversations from "./Conversations";
 import LogoutButton from "./LogoutButton";
 import SearchInput from "./SearchInput";

 const Sidebar = () => {
 	return (
 		<div className='border-r md:min-w-[450px] border-slate-500 p-4 flex flex-col'>
 			<SearchInput />
 			<div className='divider px-3'></div>
 			<Conversations />
 			<div className="flex gap-5">
			 <LogoutButton />
			 <BgButton />
			</div>
 		</div>
 	);
 };
 
 export default Sidebar;