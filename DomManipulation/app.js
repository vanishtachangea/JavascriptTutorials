const text = document.querySelector('.title');
const changeColour = document.querySelector('.changeColour');

changeColour.addEventListener('click', function(){
    text.classList.toggle('change');
});
const userList = document.querySelectorAll('.nameList li');
for(user of userList)
{
    user.addEventListener('click', function()
    {
        console.log(this);
        this.style.color ="red";
    });
}

const listInput =document.querySelector(".list-input");
const addListButton = document.querySelector(".AddListButton");
const ulElement = document.querySelector('.nameList');
addListButton.addEventListener('click', function()
{
    //create a li out of thin air
    const newLi = document.createElement('LI');
    const liContent = document.createTextNode(listInput.value);
    console.log(listInput.value);
    //Add the input value inside the new li
    newLi.appendChild(liContent);
    //Add the li to the userlist
    ulElement.appendChild(newLi);
});
