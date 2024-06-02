import Card from 'react-bootstrap/Card';
import SampleData from './Data';

let messageSampleData = SampleData.section4

function Message() {
    return (
        <Card style={{marginLeft: '7px'}}>
            <Card.Header>
                <h6>
                    Message
                </h6>
            </Card.Header>
            <Card.Body>
                Hi, Reviewer 2
                <Card bg='#F0F2FC' style={{ marginTop: '15px', backgroundColor: '#F0F2FC' }}>
                    <Card.Body>
                        {messageSampleData[1].prompt_question}
                    </Card.Body>
                </Card>
            </Card.Body></Card>
    );
}

export default Message