const faq = [
  {
    title: "What is Rooma & Ajay Dubey’s HII Program?",
    content:
      "It is a program for supporting the students of IITK in the field of Health-care innovation to convert their ideas into reality. Through this program, such talented students will get a chance to prove their talent and convert their project ideas to develop product design prototypes.",
  },
  {
    title: "Who is Mr. Ajay Dubey?",
    content:
      "He graduated from IIT Kanpur in the year 1980 and later held various leadership positions in the technology industry. He served as the Vice President at Infosys, leading the Pune Development Center, and also worked as the COO at Persistent Systems Pvt. Ltd. He is an Angel Investor at Clodura Systems.",
  },
  {
    title: "Is it an institute-supported program or a donor-supported program?",
    content: "It is a donor-supported program.",
  },
  {
    title: "Have we received the funding for the program?",
    content: "Yes",
  },
  {
    title: "Is the program approved by the Director of IIT Kanpur?",
    content: "Yes",
  },
  {
    title: "What is the purpose of the program?",
    content:
      "To promote entrepreneurship in the healthcare sector among the students and support innovative technologies and drive creative solutions to improve the way people access and manage healthcare.",
  },
  {
    title: "What is the timeline for the program?",
    content:
      "Application Start Date: <strong>February 15, 2024</strong>, <br/> Application Close Date: <strong>March 15, 2024</strong>",
  },
  {
    title: "Who is eligible to participate in the program?",
    content: `<ul>
    This program will be open to all UG (2nd year onwards), PG(1st sem onwards), PhD students who have completed.
      </ul>`,
  },
  {
    title: "How can I apply for the program?",
    content:
      "Through the application link attached to the website. To apply to this program please click<a style='display:inline' href='https://forms.gle/2B32XMtqjLBdwoxC7'>here</a>",
  },
  {
    title: "Are there any application costs associated with participating?",
    content: "No",
  },
  {
    title: "What are the benefits of participating in the program?",
    content: `
    A chance to immerse in hospitals and medical industries for closely understanding the pain points and identifying challenges in the Indian healthcare system.
 <br/>
 Once in a lifetime opportunity to disrupt the Indian healthcare system with innovative technological solutions and impact millions of Indian lives. <br/>
 A structured program to experience and train oneself for entrepreneurship in healthcare. <br/>
 Through field exposure (immersion program) a chance to identify relevant
 engineering problems in healthcare to solve.
  <br/>
  Innovators/ startups are connected with viable funding and networking opportunities to fast-track their growth. Help founders nurture relationships with peers, and facilitate connection with an expert, professional network. <br/>
  Get access to an amazing community of business leaders, investors, managers with proven experience, and faculty at IIT Kanpur offering unmatched technical and business expertise. <br/>
  Have access to world-class infrastructure at IIT Kanpur at faculty/student rates. <br/>
  Provide founders access to multiple funding pipelines throughout their startup journey. Programs offer mentorship and technical support across ideation, prototype, and seed stage. Offer some major schemes like SPARSH, BIG, TIDE 2.0, NIDHI EiR, and IAIN across domains.
    `,
  },
  {
    title: "What is the selection process ( will be conducted by SIIC)?",
    content:
      "<strong>Round 1:</strong> Shortlisting of applications based on the response and the eligibility criteria., <br/> <Strong>Round 2:</Strong> First round of interview, <br/> <strong>Round 3:</strong> The selected students from Round 2 shall be given case studies to read and review and make a presentation., <br/> Based on the presentation by the selected student groups and their application. The final list of student groups will be selected.",
  },
  {
    title: "Who will be the selection committee members?",
    content:
      "The tentative selection committee would include: <br/> 2 faculties, <br/> 1 SIIC member, <br/> 1 industry expert, <br/> Donor, <br/> 1 member from the Gangwal School of Medical Sciences and Technology",
  },
  {
    title:
      "Is any stipend provided to the selected student groups for this program?",
    content: "No",
  },
  {
    title: "What all costs will be covered?",
    content:
      "Travel, Accommodation, Food expenses and any other miscellaneous expenses required to complete the Summer Internship.",
  },
  {
    title:
      "How much will I receive for all the expense heads mentioned in the previous question?",
    content: "It will be decided once the students are selected.",
  },
  {
    title: "Who will be managing these all expenses?",
    content: "The generous contribution of Mr. Dubey will cover all the expenses for the program.",
  },
  {
    title:
      "Can the student participate alone or with a group outside the IITK?",
    content: "Unfortunately, the program supports only students from the institute and no outsiders would be able to participate directly on indirectly.",
  },
  {
    title:
      "Is it mandatory for the student groups to come back after completing the Summer Internship Program and participate in the process of development of prototype?",
    content: "Yes",
  },
  {
    title: "How many students can take part in a group?",
    content: "3 to 4 students",
  },
  {
    title: "Is there any mandate to incubate in SIIC?",
    content: "Yes. The student group sign a binding agreement for this.",
  },
  {
    title: "Do student groups need to sign any agreement?",
    content: "Yes",
  },
  {
    title:
      "What will happen if the student group will fail to develop a prototype?",
    content:
      "A detailed report needs to be submitted for all projects. Such reports will be signed by a faculty mentor. If the attempt to make the prototype failed for genuine reasons, beyond the control of the group, there will be no consequences.",
  },
  {
    title: "How much will the student group budget?",
    content: "It will be determined on a case-to-case basis",
  },
  {
    title: "What after prototype development?",
    content:
      "The program goals to give an entrepreneurship exposure to the students after they have completed the innovation journey.",
  },
  {
    title: "POC from E Cell, IITK DF and SIIC?",
    content:
      "<strong>E Cell</strong> - Piyush Raj <strong>rpiyush21@iitk.ac.in</strong>, <br/> <strong>SIIC</strong> -  <strong>bioincubatoratiitk@gmail.com</strong>, <br/> <strong>IITKDF</strong> - Mradul Verma <strong>programs_dora@iitk.ac.in</strong>",
  },
  {
    title: "What is Clinical immersion?",
    content:
      "One of the part of the program is clinical immersion in which the fellows get to visit Clinical institutions, learn about the technology and healthcare system of the country and to find problem statements that they should pursue during the course of this program.",
  },
  {
    title: "Where did the students of the previous Cohort go for the clinical immersions?",
    content:
      "The fellows of the last cohort went to Sree Chitra Tirunal Institute of Medical Sciences and Technology, Trivandrum, Kerela.",
  },
  
];

let opened = -1;

document.querySelector(".faqs").innerHTML = faq
  .map(
    ({ title, content }, idx) =>
      `<div class="faq" id=${idx}>
      <p class="title">${title} <img src='${
        opened != idx ? "/HII/assets/down.png" : "/HII/assets/up.png"
      }'></p>
      <div class="content">${content}</div>
    </div>`
  )
  .join("");

document.querySelectorAll(".faq").forEach((faq) =>
  faq.addEventListener("click", (e) => {
    console.log(e.target.id);
    showContent(e.target.id);
  })
);

function showContent(id) {
  if (id == opened) {
    document.getElementById(opened).classList.remove("opened");
    opened = -1;
    return;
  }
  if (opened != -1) {
    document.getElementById(opened).classList.remove("opened");
  }
  document.getElementById(id).classList.add("opened");
  opened = id;
}
