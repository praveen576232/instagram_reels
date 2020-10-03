import React from 'react';

import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
<div className="app_instagram_logo">
<img alt="" src="https://projectrawcast.com/wp-content/uploads/2017/09/instagramimagesizespostheadernew-1140x641.jpg"></img>
<h1>Reels</h1>
</div>
<div className="app_body">
   <Video src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'></Video>
   <Video src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'></Video>
   <Video src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'></Video>
   <Video src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'></Video>
</div>
    </div>
  );
}

export default App;
