import React from 'react';
import { useLoaderData } from 'react-router';
import MyList from '../Components/MyList';

const MyItems = () => {
    const roomData= useLoaderData();
    console.log(roomData);
    return (
        <div>
           <MyList  roomData={roomData}
                ></MyList>
        </div>
    );
};

export default MyItems;
