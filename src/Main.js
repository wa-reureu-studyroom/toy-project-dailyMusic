import React from 'react';
import PlayList from './component/PlayList';
import Weather from './component/Weather';
import Article from './component/Article';

function Main({datas}) {
    return (
    <div>
        <PlayList />
        <Weather />
        <div className="article-srction">
            {datas.map(e => { return(<Article articles={e}/>) })}
        </div>
    </div>
    );
}

export default Main;
