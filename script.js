let Tasks = JSON.parse(localStorage.getItem('data')) || [];
RenderData();
function RenderData(){
    let fullData ='';
    for( let i = 0 ; i <Tasks.length ; i++)
    {
        let todo = Tasks[i];
        let HTMLBODY = `
    <div class="elements">
        <div>
            ${todo.work}
        </div>
        <div>
            ${todo.date}
        </div>
        <div>
            <button
                class="css-delete"
                onclick="Tasks.splice(${i},1);
                RenderData();
                "
            >Delete</button>
        </div>
    </div>
    `;
    fullData += HTMLBODY;
    }
    document.querySelector('.js-entered-data').innerHTML = fullData;
}

function AddData(){
    let TextData = document.querySelector('.js-input');
    let DateData = document.querySelector('.js-date-input');
    if(TextData.value === '' || DateData.value === '')
    {
        alert(`Data missing!`);
        return;
    }
    Tasks.push(
        {
            work: TextData.value,
            date: DateData.value
        }
    );
    localStorage.setItem('data',JSON.stringify(Tasks));
    RenderData();
    document.querySelector('.js-input').value = '';
    document.querySelector('.js-date-input').value = '';
    
}

function DeleteData(){
    if (Tasks.length === 0)
    {
        alert(`There are no task in your list yet!`);
    }
    localStorage.removeItem('data');
    Tasks = [];
    RenderData();
}
