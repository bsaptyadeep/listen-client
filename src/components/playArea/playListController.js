import React from 'react';
import { playList } from '../../config';
import { useData } from '../../dataProvider';

const PlayListController = () => {

    const {data, setData} = useData();
    console.log(data)
    return (
        <div className='play-area-controller'>
            {
                playList.map((play)=>(
                    <div className="controller-item" key={play}
                    onClick={()=>setData(play)}
                    >
                        {play}
                    </div>
                ))
            }
        </div>
  )
}

export default PlayListController