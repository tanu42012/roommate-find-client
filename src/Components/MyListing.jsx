
import Navbar from './Navbar';
import Footer from './Footer';
import { useLoaderData } from 'react-router';
import MyList from './MyList';

import { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
 





const MyListing = () => {
    const {loading}=use(AuthContext);
    // const[roomData,setRoomData]=useState([]);
    const roomData= useLoaderData();
    // console.log(roomData);
    if(loading){
        return <Loading></Loading>
    }
   

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