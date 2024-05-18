import TopicCard from './TopicCard';
import './Summary.css';
import Comments from './Comments';
import Message from './Message';

function Discussion({status}: any) {
    return (
        <div className="review-summary">
            <div className="sideBar">
                <TopicCard status={status}/>
            </div>
            <div className="sideBar">
                <Message />
            </div>
        </div>
    )
}

export default Discussion