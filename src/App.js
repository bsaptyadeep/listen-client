import MainImage from './assets/mainImage.png';
import Logo from './assets/logo.png'
import './App.css';
import { useData } from './dataProvider';
import PlayListController from './components/playArea/playListController';
import { playList } from './config';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AudioContainer from './components/audioContainer/audioContainer';

function App() {
  const { data, setData } = useData();
  const [ audioList, setAudioList ] = useState([]);

  const getAudioList = async () => {
    try{
      const url='https://app0001.onrender.com/audio'
      const res = await axios.get(url);
      setAudioList(res.data.filter((audio)=>audio.playlist===data));
    }
    catch(er)
    {

    }
  }

  useEffect(()=>{
    getAudioList();
    console.log(audioList)
  },[data])

  return (
    <div className="App">
      {/* <div className="navbar">
        <div className='ham-buger'>
          <span className='line ham1'></span>
          <span className='line ham2'></span>
          <span className='line ham1'></span>
        </div>
      </div> */}
      <div className="top">
        <div className="top-top">
          <img src={Logo} height={50} alt="logo"/>
        </div>
        <div className="top-bottom">
          <img src={MainImage} height={500} />
        </div>
      </div>
      <div className='play-area'>
        <div className='play-area-controller'>
          <ul>
            {
              playList.map((play) => {
                return (
                  <li className={play===data?'playList-name active':'playList-name'} key={play} onClick={() => {
                    setData(play)
                  }}>
                    {play}
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='playlist-container'>
          {
            audioList.length===0? "No episode uploaded":
            audioList.map((audio)=>(
              <AudioContainer audio={audio}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
