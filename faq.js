const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];





faqData.forEach((item)=>{
// creating elements
  let section = document.createElement("section");
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  let button = document.createElement("button");
  let para = document.createElement("p");

  // add classes
  section.classList.add("faq");
  div.classList.add("faq_header");
  button.classList.add("show_btn");
  para.classList.add("hidden");
  

  // adding content
  h3.textContent = item.question;
  para.textContent = item.answer;
  button.textContent = "+";

  // append elements
  section.appendChild(div);
  div.appendChild(h3);
  div.appendChild(button);
  section.appendChild(para);

  // append all elements to parent container

  document.querySelector(".accordian_body").appendChild(section);

  // ADD TOGGLE FEATURE OON BUTTON
  button.addEventListener("click",()=>{
    para.classList.toggle("hidden");
  })

  
})






