import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import './Comments.css'
import SampleData from './Data';

// Paste section 1 data here
let commentsSampleDate = SampleData.section1

function Comments() {
    return (
        <Card style={{marginLeft: '7px'}}>
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