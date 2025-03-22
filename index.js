// Write your code 
document.querySelector("main").remove();
const newHeader = document.createElement("h1")
   newHeader.textContent="ian is the champion"
newHeader.id="victory"
document.body.append(newHeader);
const body = document.body
 const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
  }
 h1.append(ul);

 const victory = document.getElementById("victory");
victory.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

  
  const element = document.getElementById("victory");
victory.style.height = "300px";
victory.style.backgroundColor = "#27647B";

victory.textContent = "You've changed what's on the screen!";

victory.style.fontSize = "24px";
victory.style.marginLeft = "30px";
victory.style.lineHeight = 2;

victory.className = "pet-listing dog";
victory. classList.remove("dog");
victory.classList.add("cat", "sale");