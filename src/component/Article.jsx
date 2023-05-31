import './Article.css';
import dummyDatas from '../datas/dummydata';
import {useState} from 'react'
import userImg01 from '../assets/userImg01.png';
import {FiThumbsUp} from 'react-icons/fi';

const Article = () => {
    const [datas, setData] = useState(dummyDatas);
    const data = datas[0];

    return (
        <div className="article-wrapper">
            <div className="article-container" id={data.id}>
                <div className="article-userImg"><img src={userImg01} alt="유저 이미지"/></div>
                <div className="article-writeBox">
                    <div className="article-userId">@{data.userId}</div>
                    <div className="article-userContent">{data.userContent}</div>
                </div>  
                <div className="article-likes">
                    <div className="likeBtn"><FiThumbsUp/></div>
                    <div className="like-count">{data.like}</div>
                </div>
            </div>
        </div>
    )
}

export default Article;