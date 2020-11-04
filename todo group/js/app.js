/* Select DOM */
const taskList = document.querySelector('.task-list');
const inputTitle = document.querySelector('#title-submit');
const inputText = document.querySelector('#text-submit');
const btn = document.querySelector('.add-btn');
const form = document.querySelector('.submit-form'); 


/* Add eventlistener */
btn.addEventListener('click', showPopUp);
form.addEventListener('submit', addTask);
taskList.addEventListener('click', modifyTask);


/* Calling functions */
DatesAdd()



/* Functions */

function showPopUp(e){
    const popUp = document.querySelector('.submit-form-popup');
    popUp.style.display = 'flex';

    const mainContainer = document.querySelector('.main-container')
    mainContainer.style.opacity = '.2'
}


function addTask(e){
    console.log('working')
    e.preventDefault();

    if(inputTitle.value == '' && inputText.value == ''){
        alert('text du måste')
    } else {

        const htmlCode = `
        <li class="task-item">
            <div class="task-item-content">
                <h3 class="task-title">${inputTitle.value}</h3>
                <p class="task-text">${inputText.value}</p>
                <span class="task-time"></span>
            </div>
            <div class="icons">
                <figure class="check-icon">
                    <i class="fas fa-check"></i>
                </figure>
                <figure class="cancel-icon">
                    <i class="fas fa-times"></i>
                </figure>
            </div>
        </li>`;

        taskList.innerHTML += htmlCode;

        const popUp = document.querySelector('.submit-form-popup');
        popUp.style.display = 'none';

        const mainContainer = document.querySelector('.main-container')
        mainContainer.style.opacity = '1'

        inputTitle.value = '';
        inputText.value = '';
    }
}


function DatesAdd(){
    const d = new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    document.querySelector("#month").innerHTML = months[d.getMonth()];

    const y = new Date();
    document.querySelector('.year').innerHTML = d.getFullYear();

    const r = new Date();
    document.querySelector('.date').innerHTML = d.getDate();

    const e = new Date ();
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    document.querySelector('.day').innerHTML = days[e.getDay()-1];

    const time = document.lastModified;
    document.querySelector('.task-time').innerHTML = time;
}


function modifyTask(e){
    
    if(e.target.classList.contains('fa-check')){
        e.target.parentElement.parentElement.parentElement.classList.toggle('done')
    }

    if(e.target.classList.contains('fa-times')){
        const iDforLi = e.target.parentElement.parentElement.parentElement;
        taskList.removeChild(iDforLi);
    }


}






