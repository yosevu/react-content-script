import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import SampleData from './Data';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

let topicSampleData = SampleData.section2
let discussionData = SampleData.section3

function TopicCard({ status }: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (status === 'summary') {
    return (
      <Card style={{ marginLeft: '7px' }}>
        <Card.Header>
          <h6>
            Topic <Badge pill bg="info">{topicSampleData.length}</Badge>
          </h6>
        </Card.Header>
        <Card.Body style={{ height: '100%' }}>
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
                      <Button variant="primary" onClick={handleShow}>Prompt</Button>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Prompt Question</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{data.prompt_question}</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleClose}>
                            Refresh
                          </Button>
                        </Modal.Footer>
                      </Modal>
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
                    <Button variant="primary" onClick={handleShow}>Prompt</Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Prompt Question</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{data.prompt_question}</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleClose}>
                            Refresh
                          </Button>
                        </Modal.Footer>
                      </Modal>
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