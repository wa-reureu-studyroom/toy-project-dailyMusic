import './Community.css';
import NewItem from '../component/NewItem'
import CommunityItems from '../component/CommunityItems'

const Community = () => {
    return(
        <section className='communityWrap'>
            <h1>Community</h1>
            <NewItem />
            <CommunityItems />
        </section>
    )
}

export default Community;