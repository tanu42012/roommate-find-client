
import Navbar from './Navbar';
import Footer from './Footer';
import { useLoaderData } from 'react-router';
import MyList from './MyList';




const MyListing = () => {
    // const[roomData,setRoomData]=useState([]);
    const roomData= useLoaderData();
    console.log(roomData);
   

    return (
        <div>
            
            <section>
                
                <Navbar></Navbar>
            </section>
            <section>
                <MyList  roomData={roomData}
                ></MyList>
                

            </section>

          
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default MyListing;