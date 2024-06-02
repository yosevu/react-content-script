let SampleData = {
    section1: [
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
    ],
    section2: [
        {
            id: "1",
            keywords: "Clarity, Methodology, Findings, Contribution",
            reviewers: "R1, R4",
            summary: "Reviewers 1 and 4 emphasize the need for clarity in methodology and findings to enhance the paper's contribution.",
            prompt_question: "How do you perceive the significance and research quality of the paper, considering the varying opinions among reviewers?"
          },
          {
            id: "2",
            keywords: "Livestreaming, Literacy, Method, Findings",
            reviewers: "R2",
            summary: "Reviewer 2 focuses on the importance of exploring livestreaming for literacy in China and the clarity of method and findings.",
            prompt_question: "How do you perceive the significance and research quality of the paper, considering the varying opinions among reviewers?"
          },
          {
            id: "3",
            keywords: "Pedagogical models, Data analysis, Recommendations, HCI",
            reviewers: "R3",
            summary: "Reviewer 3 highlights the significance of pedagogical models, data analysis, and recommendations for the HCI community.",
            prompt_question: "How do you perceive the significance and research quality of the paper, considering the varying opinions among reviewers?"
          }
    ],
    section3: [
        {
            id: "1",
            topic_keywords: "Significance, Research Quality",
            reviewer_involved: "R1, R2, R3",
            summary: "Reviewers 1, 2, and 3 have differing opinions on the significance and research quality of the paper.",
            prompt_question: "How do you perceive the significance and research quality of the paper, considering the varying opinions among reviewers?"
        
        }
    ],
    section4: [
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
}

export default SampleData