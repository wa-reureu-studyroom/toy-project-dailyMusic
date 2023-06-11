import './Article.css';
import userImg01 from '../assets/userImg01.png';
import {FiThumbsUp} from 'react-icons/fi';

const Article = ({datas}) => { 

    return (
        <div className="article-wrapper">
            <div className="article-container" id={datas.id}>
                <div className="article-userImg"><img src={userImg01} alt="유저 이미지"/></div>
                <div className="article-writeBox">
                    <div className="article-userId">@{datas.userId}</div>
                    <div className="article-userContent">{datas.userContent}</div>
                </div>  
                <div className="article-likes">
                    <div className="likeBtn"><FiThumbsUp className="article-thumbsUp"/></div>
                    <div className="like-count">{datas.like}</div>
                </div>
            </div>
        </div>
    )
}

export default Article;