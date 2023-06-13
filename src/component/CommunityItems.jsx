import './CommunityItems.css';
import Dummy from '../datas/dummydata.json';
import ProfilePhj from "../assets/ProfilePhj.png";
import ProfileWjy from "../assets/ProfileWjy.png";
import ProfileJhj from "../assets/ProfileJhj.png";
import { FiThumbsUp } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import { BsPencil } from 'react-icons/bs';

const CommunityItems = () => {
    const dummyArt = Dummy.articles;
    return (
        <div className="communityItemsWrap">
                {dummyArt.map((item) => 
                    <div className='communityItem'>
                        <img src={item.userId === 'phj' ? ProfilePhj : (item.userId === 'wjy') ? ProfileWjy : ProfileJhj} alt={item.userI}이미지 />
                        {item.userId === 'phj' ? <GrClose className='closeBtn button' /> : ''}
                        <div className='communityCnt'>
                            <span>@{item.userId}</span>
                            <p>{item.userContent}</p>
                        </div>
                        <div className='likeBtn button'>
                            <FiThumbsUp />
                            <span className='likeCount'>{item.like}</span>
                        </div>
                        {item.userId === 'phj' ? <BsPencil className='editBtn button' /> : ''}
                    </div>
                )}
        </div>
    );
};

export default CommunityItems;