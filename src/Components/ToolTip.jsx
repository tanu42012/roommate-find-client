import React from 'react';
import { Tooltip } from 'react-tooltip';

const ToolTip = () => {
    return (
        <div className='mt-6 flex justify-center'> 
            <a href='' data-tooltip-id='tooltip1' className='border-2 border-blue-400 py-4 px-4 bg-blue-300 rounded-xl'>Hover ME To Check Room</a>
            <Tooltip 
            place='bottom'
            offset={50}
            arrowColor='blue'
            // style={{color:"black",backgroundColor:"white"}}
            id='tooltip1'>
                

                Several Types of Room Here Kindly Check Below
            </Tooltip>
        </div>
    );
};

export default ToolTip;