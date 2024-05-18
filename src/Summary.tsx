import TopicCard from './TopicCard';
import './Summary.css';
import Comments from './Comments';
import ScoreBoard from './ScoreBoard';

function Summary({status}: any) {
  return (
    <div className="review-summary">
      <div className="sideBar">
        <ScoreBoard />
      </div>
      <div className="sideBar">
        <TopicCard status={status}/>
      </div>
      <div className="sideBar">
        <Comments />
      </div>
    </div>
  )
}

export default Summary