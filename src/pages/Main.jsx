import React from 'react';
import Article from '../component/Article';
import Weather from '../component/Weather';
import './Main.css';


const Main = ({datas}) => {

    // 가장 좋아요 높은 갯수를 찾습니다. 
    const topLike = Math.max(...datas.map(e => e.like));
    // 가장 높은 좋아요 갯수를 가진 객체를 필터링합니다. 
    const topLikeData = datas.filter( e => e.like === topLike);

    //console.log(datas);
    return(
        <div className="Main-container">
            <div className="main-playlist-section">
                <h1>뮤직 플리 들어갈 곳</h1>
            </div>
            <div className="main-api-section">
                <Weather/>
                {topLikeData.map(e => <Article key={e.id} datas={e}/>)}
            </div>
        </div>
    )
}

export default Main;