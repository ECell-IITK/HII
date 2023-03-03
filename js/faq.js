const faq = [
  {
    title: "What is Ajay and Rooma Dubey HII program?",
    content:
      "It is a program for supporting the students of IITK in the field of Healthtech innovation to convert their ideas into reality. Through this program, such talented students will get a chance to prove their talent and convert their project ideas to develop product design prototypes.",
  },
  {
    title: "Who is Ajay Dubey?",
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
      "Application Start Date: <strong>01/03/2023</strong>, <br/> Application Close Date: <strong>15/03/2023</strong>, <br/> Result Announcement Date: <strong>06/04/2023</strong>",
  },
  {
    title: "Who is eligible to participate in the program?",
    content:
      "This program will be open to all UG students who have completed their 4th semester and are yet to begin their 5th semester, <br/> Dual Degree students who completed the 6th  Semester will be also eligible, <br/> Students from all the departments, <br/> A team of 3-4 students coming from at least two different departments or an Interdisciplinary team of 3-4 students, <br/> No merit criteria are needed or  Student’s CGPGI shall not be included in the evaluation criteria",
  },
  {
    title: "How can I apply for the program?",
    content:
      "Through the application link attached to the website. To apply to this program please click<a style='display:inline' href='https://docs.google.com/forms/d/e/1FAIpQLSdKSpVPIVEFgST6q18eIQDZLZalCLQdvD7qKo9t-FJFe22zWw/viewform'>here</a>",
  },
  {
    title: "Are there any application costs associated with participating?",
    content: "No",
  },
  {
    title: "What are the benefits of participating in the program?",
    content: `
    A chance to immerse in hospitals and medical industries for closely understanding the pain points and identifying challenges in the Indian healthcare system. <br/>
    An opportunity to disrupt the Indian healthcare system with innovative technological solutions and impact millions of Indian lives. <br/>
    A structured program to experience and train oneself for entrepreneurship in healthcare. <br/>
    Through field exposure (Summer Internship Program) a chance to identify relevant engineering problems in healthcare to solve. <br/>
    Innovators/ startups are connected with viable funding and networking opportunities to fast-track their growth. Helps create and nurture relationships with peers, encourages team work, develops problem-solving skills and facilitate connection with an expert, professional network. <br/>
    Get access to an amazing community of business leaders, investors, managers with proven experience, and faculty at IIT Kanpur offering unmatched technical and business expertise. <br/>
    Have access to world-class infrastructure at IIT Kanpur at faculty/student rates. <br/>
    Provide founders access to multiple funding pipelines throughout their startup journey. Programs offer mentorship and technical support across ideation, prototype, and seed stage. Offer some major schemes like SPARSH, BIG, TIDE 2.0, NIDHI EiR, and IAIN across domains.
    `,
  },
  {
    title: "What is the selection process ( will be conducted by SIIC)?",
    content:
      "<strong>Round 1:</strong> Shortlisting of applications based on the response and the eligibility criteria, <br/> <Strong>Round 2:</Strong> First round of interview, <br/> <strong>Round 3:</strong> The selected students from Round 2 shall be given case studies to read and review and make a presentation, <br/> Based on the presentation by the selected student groups and their application. The final list of student groups will be selected.",
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
      "Travel, Accommodation, food and any other miscellaneous expenses required to complete the Summer Internship.",
  },
  {
    title:
      "How much will I receive for all the expense heads mentioned in the previous question?",
    content: "It will be decided once the teams are finalized.",
  },
  {
    title: "Who will be managing these all expenses?",
    content: "SIIC",
  },
  {
    title:
      "Can the student participate alone or with a group outside the IITK?",
    content: "No",
  },
  {
    title:
      "Is it mandatory for the student groups to come back after completing the Summer Internship Program and participate in the process of development of prototype?",
    content: "Yes",
  },
  {
    title:
      "What if I do not participate to find a problem statement and prototype development?",
    content:
      "In this case, the expenses incurred will be recovered from the student group.",
  },
  {
    title: "How many students can take part in a group?",
    content: "3 to 4 students",
  },
  {
    title: "Is there any mandate to incubate in SIIC?",
    content: "Yes. The student group sign a binding agreement for this",
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
      "In the 5th and 6th semesters, the SIIC will provide assistance post-incubation to improve upon the prototype and plan for manufacturing as well as commercialization.",
  },
  {
    title: "POC from E Cell, IITK DF and SIIC?",
    content:
      "<strong>E Cell</strong> - Vinit Toshniwal <strong>vinit@ecelliitk.com</strong>, <br/> <strong>SIIC</strong> - Aditi Kumar <strong>aditikr@iitk.ac.in</strong>, <br/> <strong>IITKDF</strong> - Mradul Verma <strong>programs_dora@iitk.ac.in</strong>",
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
      <p class="content">${content}</p>
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
