const faq = [
  {
    title: "What is Ajay and Roma Dubey HII program?",
    content:
      "It is a program for supporting the students of IITK in the field of Healthtech innovation to convert their ideas into reality. Through this program, such talented students will get a chance to prove their talent and convert their project ideas to develop product design prototypes.",
  },
  {
    title: "Who is Ajay Dubey?",
    content: "He is an alumnus of IIT Kanpur of Batch 1980.",
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
      "Application Start Date: ,Application Close Date: ,Result Announcement Date: Allocation of the Institution",
  },
  {
    title: "Who is eligible to participate in the program?",
    content:
      "This program will be open to all UG students who have completed their 4th semester and are yet to begin their 5th semester, Dual Degree students who completed the 6th  Semester will be also eligible, Students from all the departments., A team of 3-4 students coming from at least two different departments or an Interdisciplinary team of 3-4 students, No merit criteria are needed or  Student’s CGPGI shall not be included in the evaluation criteria",
  },
  {
    title: "How can I apply for the program?",
    content:
      "Through the application link attached to the website. To apply to this program please click here.",
  },
  {
    title: "Are there any application costs associated with participating?",
    content: "No",
  },
  {
    title: "What is the selection process ( will be conducted by SIIC)?",
    content:
      "Shortlisting of applications based on the response and the eligibility criteria, First round of interview, The selected students from Round 2 shall be given case studies to read and review and make a presentation, Based on the presentation by the selected student groups and their application. The final list of student groups will be selected.",
  },
  {
    title: "Who will be the selection committee members?",
    content:
      "The tentative selection committee would include: 2 faculties, 1 SIIC member, 1 industry expert, Donor, 1 member from the Gangwal School of Medical Sciences and Technology",
  },
  {
    title:
      "Is any stipend provided to the selected student groups for this program?",
    content: "No",
  },
  {
    title: "What all costs will be covered?",
    content:
      "Travel, Accommodation, foodings and any other miscellaneous expenses required to complete the Summer Internship.",
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
      "It is not meant for that and the Institute will not facilitate this",
  },
  {
    title: "How much will the student group budget?",
    content: "It will be determined on a case-to-case basis",
  },
  {
    title: "DWhat after prototype development?",
    content:
      "In the 5th and 6th semesters, the group will provide assistance to improve upon the prototype and plan for manufacturing as well as commercialization.",
  },
  {
    title: "POC from E Cell, IITK DF and SIIC?",
    content: "E Cell- Vinit Toshniwal, SIIC- Aditi Kumar, IITKDF- Mradul Verma",
  },
];

let opened = -1;

document.querySelector(".faqs").innerHTML = faq
  .map(
    ({ title, content }, idx) =>
      `<div class="faq" id=${idx}>
      <p class="title">${title} <img src='${
        opened != idx ? "../assets/down.png" : "../assets/up.png"
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
