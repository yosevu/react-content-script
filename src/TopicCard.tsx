import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';


let topicSampleData = [
  {
    id: "1",
    keywords: "Clarity, Methodology, Findings, Contribution",
    reviewers: "R1, R4",
    summary: "Reviewers 1 and 4 emphasize the need for clarity in methodology and findings to enhance the paper's contribution."
  },
  {
    id: "2",
    keywords: "Livestreaming, Literacy, Method, Findings",
    reviewers: "R2",
    summary: "Reviewer 2 focuses on the importance of exploring livestreaming for literacy in China and the clarity of method and findings."
  },
  {
    id: "3",
    keywords: "Pedagogical models, Data analysis, Recommendations, HCI",
    reviewers: "R3",
    summary: "Reviewer 3 highlights the significance of pedagogical models, data analysis, and recommendations for the HCI community."
  }

]

let discussionData = [
  {
    id: "1",
    topic_keywords: "Significance, Research Quality",
    reviewer_involved: "Reviewer1, Reviewer2, Reviewer3",
    summary: "Reviewers 1, 2, and 3 have differing opinions on the significance and research quality of the paper.",
    prompt_question: "How do you perceive the significance and research quality of the paper, considering the varying opinions among reviewers?"
  }
]
function TopicCard({status}: any) {
  // const [status, setStatus] = useState('summary');
  if (status === 'summary') {
    return (
      <Card>
      <Card.Header>
        <h6>
          Topic <Badge pill bg="info">{topicSampleData.length}</Badge>
        </h6>
      </Card.Header>
      <Card.Body style={{height: '100%'}}>
        <Accordion defaultActiveKey="0">
          {topicSampleData.map(function (data) {
            return (
              <Accordion.Item eventKey={data.id}>
                <Accordion.Header>{data.keywords}</Accordion.Header>
                <Accordion.Body>
                  <div className="topic-content">
                    <p style={{ paddingLeft: '5px' }}><strong>Reviewer&nbsp; &nbsp; &nbsp; <span>{data.reviewers}</span></strong> </p>
                    <Card bg='#F0F2FC' style={{ marginBottom: '15px', backgroundColor: '#F0F2FC' }}>
                      <Card.Body>
                        {data.summary}
                      </Card.Body>
                    </Card>
                    <Button variant="primary">Prompt</Button>{' '}
                  </div>

                </Accordion.Body>
              </Accordion.Item>
            )
          })}
        </Accordion>
      </Card.Body>
    </Card>
    )
  }
  return (
    <Card>
      <Card.Header>
        <h6>
          Topic <Badge pill bg="info">{discussionData.length}</Badge>
        </h6>
      </Card.Header>
      <Card.Body>
        <Accordion defaultActiveKey="0">
          {discussionData.map(function (data) {
            return (
              <Accordion.Item eventKey={data.id}>
                <Accordion.Header>{data.topic_keywords}</Accordion.Header>
                <Accordion.Body>
                  <div className="topic-content">
                    <p style={{ paddingLeft: '5px' }}><strong>Reviewer&nbsp; &nbsp; &nbsp; <span>{data.reviewer_involved}</span></strong> </p>
                    <Card bg='#F0F2FC' style={{ marginBottom: '15px', backgroundColor: '#F0F2FC' }}>
                      <Card.Body>
                        {data.summary}
                      </Card.Body>
                    </Card>
                    <Button variant="primary">Prompt</Button>{' '}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            )
          })}
        </Accordion>
      </Card.Body>
    </Card>
  );
}

export default TopicCard;