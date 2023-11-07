// This function should retrieve all the project objects from projects array.
// It should then traverse over the array to create individual cards displaying each project details.

function loadProjects() {
  //clear existing

  const projectContainer = document.getElementById('projects');   
  if(projects){
    // loop through projects
    projects.forEach((project, index) =>{
      // create div element
      const projectCard = document.createElement('div');
      projectCard.setAttribute('id', `div-${index+1}`);
    
      // create img element
      const cardImg = document.createElement('img');
      cardImg.setAttribute('id', `img-${index+1}`);
      cardImg.setAttribute('src', `${project.image}`);

      // create title of project element
      const cardTitle = document.createElement('h2');
      cardTitle.setAttribute('id', `project-${index+1}`);
      cardTitle.textContent = project.title;
  
      // create description of element
      const cardDesc = document.createElement('p');
      cardDesc.setAttribute('id', `description-${index+1}`);
      cardDesc.textContent = project.description;
 
      // create card 
      projectCard.appendChild(cardImg);
      projectCard.appendChild(cardTitle);
      projectCard.appendChild(cardDesc);
      projectContainer.appendChild(projectCard);
    })
  }
}


// This function should create a new project by retrieving details from the form.
// The project is then added to the projects array and displayed.

function saveNewProject() {

  // Write your code here
  // Get the new project details by using the DOM elements
  const projectTitle = document.getElementById('title').value
  const projectDesc = document.getElementById('desc').value
  const projectImg =  document.getElementById('image').value
  
  // Create a new project object
  const newProject = {
    "title": projectTitle,
    "description": projectDesc,
    "image": projectImg
  }

  console.log(newProject);
  // Add the new project object to the projects array 
  projects.push(newProject);

  console.log(projects);
  // Load the projects after adding the new project
  //loadProjects();

  // Clear the values of the New Project Details Form after adding the new project
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("image").value = "";
}
