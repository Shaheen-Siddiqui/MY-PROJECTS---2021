   //  topics covering
//     using filter here to filter the name user is asking
//     and includes too
//     using tolowercase()
//     desturcturizing an object

function getInputData(){
    const input1=document.getElementById("input1")
    search=input1.value;
    showListOfData(search)
}

var employeesList=[
    {
        name:"shikha rawat",
        id:1,
        state:"Andhra Pradesh",
        city:"Bangalore",
        level:1
    },
    {
        name:"Rohit roy",
        id:2, state:"Delhi",
        city:"Utter pradesh",level:1
    },
    {
        name:"Abhishek yadav",
        id:3, state:"Mumbai",
        city:"Muzafferpur",level:2
    }
]


function showListOfData(search){
    let newTagTr=""
    const listOfData= document.getElementById("listOfData")
    const input1=document.getElementById("input1")
    document.getElementById("listOfData").style.width = "80%"
    document.getElementById("listOfData").style.height = "200px"
    document.getElementById("listOfData").style.border = "2px solid black"
    listOfData.style.fontWeight="bold"
    listOfData.style.fontSize="20px"

    newTagTr+= `
                <tr align='center'class="table-header">
                    <td>Name</td>
                    <td>State</td>
                    <td>City</td>
                    <td>See Salary</td>
                </tr>
             `
    employeesList.filter((element,index) => {
        const { name } = element; // desturcturizing an object
        if (name.toLowerCase().includes(search.toLowerCase())){
            const name=element.name;
            newTagTr+= `
                <tr align='center'class="table-body">
                    <td>${element.name}</td>
                    <td>${element.state}</td>
                    <td>${element.city}</td>
                    <td>
                        <button class='button' onclick="showSalary(${element.level})">Show Salary</button>
                    </td>
                </tr>
             `
             return element;
        }
        else{
            return element;
        }
        });
    listOfData.innerHTML=newTagTr
    input1.value="";
    const title=document.getElementById("title")
    // title.innerHTML=`These many ${search}'s are there in the company`
    title.innerHTML=`Searched results`
}

// create an arrow function
const showSalary = (level) => {
    switch (level){
        case 1:
            alert(`His salry is 1 lakh per annum`);
            break;
        case 2:
            alert(`His salry is 2 lakh per annum`);
            break;
    }

}