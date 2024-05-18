import Card from 'react-bootstrap/Card';

let messageSampleData =
    [
        {
            reviewer_involved: "Reviewer1",
            prompt_question: "Could you elaborate on how you assess the significance and research quality of the paper, especially in comparison to the perspectives of other reviewers?"
        },
        {
            reviewer_involved: "Reviewer2",
            prompt_question: "Could you provide more insights on the significance and research quality of the paper, considering the differing opinions expressed by other reviewers?"
        },
        {
            reviewer_involved: "Reviewer3",
            prompt_question: "Can you further discuss your views on the significance and research quality of the paper, given the varying assessments provided by other reviewers?"
        },
        {
            reviewer_involved: "Reviewer4",
            prompt_question: "Could you elaborate on the clarity, depth of analysis, and methodology concerns raised in your review, and how these aspects could be improved in the paper?"
        }
    ]


function Message() {
    return (
        <Card>
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