
import MessageContainer from "../../components/messages/MessageContainer.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const Home = () => {
	return (
		<div className='flex flex-col sm:flex-row sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-sky-950 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
