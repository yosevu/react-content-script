import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import './Comments.css'

let commentsSampleDate = [
    {
        reviwer_involved: "Reviewer1",
        topic_keywords: "Clarity, Methodology, Findings, Contribution, Reliability"
    },
    {
        reviwer_involved: "Reviewer2",
        topic_keywords: "Livestreaming, Literacy, China, Method, Findings"
    },
    {
        reviwer_involved: "Reviewer3",
        topic_keywords: "Pedagogical models, Community-driven, Data analysis, Recommendations, HCI"
    },
    {
        reviwer_involved: "Reviewer4",
        topic_keywords: "Clarity, Depth of analysis, Literature contribution, Data presentation, Methodology"
    }
]

function Comments() {
    return (
        <Card>
            <Card.Header>
                <h6>
                    Comments
                </h6>
            </Card.Header>
            <Card.Body style={{height: '100%'}}>
                {commentsSampleDate.map(function (data) {
                    return (
                        <div style={{marginBottom: '5px'}}>
                            <p>{data.reviwer_involved}</p>
                            <div className="item_container">
                                {data.topic_keywords.split(",").map((keyword, i) => 
                                    <h5  className="single_item" key={i}><Badge pill bg="primary">{keyword}</Badge></h5>
                                )}      
                            </div>
                        </div>
                    )
                })}

            </Card.Body>
        </Card>
    );
}

export default Comments;