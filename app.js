
// put your code here...
const reviews=[
  {
    id:0,
    name:"Leirnad",
    job:"frontend developer",
    text:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    img:"person-1.png"
  },
  {
    id:1,
    name:"Hitee",
    job:"product manager",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    img:"comrade.png"
  },
  {
  id:2,
  name:"d'judge",
  job:"senior developer",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  img:"djudge.png"
  },
  {
    id:3,
    name:"dj-cuppy",
    job:"backend developer",
    text:"lorem ipsum dolor sit amet",
    img:"cuppy.png"
  }
  
]
const img=document.getElementById("person-img")
const author=document.getElementById("author")
const job=document.getElementById("job")
const info=document.getElementById("info")

const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn")

let currentItem=0;



window.addEventListener("DOMContentLoaded",function() {
  const item=reviews[currentItem];
  img.src=item.img;
  showPerson(currentItem);
})
function showPerson(currentItem){
  const item=reviews[currentItem];
  img.src=item.img;
  author.textContent=item.name;
  job.textContent=item.job;
  info.textContent=item.text;
}
nextBtn.addEventListener("click",function() {
  currentItem++
  
  if(currentItem>reviews.length-1){
    currentItem=0;
  }
  showPerson(currentItem);
})
prevBtn.addEventListener("click",function() {
  currentItem--
  if(currentItem<0){
    currentItem=reviews.length-1
  }
  showPerson(currentItem);
})
