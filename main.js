showlist();
let addbutton = document.getElementById("submit");
addbutton.addEventListener("click" ,addbtn);
//user input the value and stores in localstorage
function addbtn(e){
    e.preventDefault();
    //console.log("hello");
    let inputval=document.getElementById('add');
    let todolist=localStorage.getItem('note');
    if(todolist==null)
    {
        todoobj=[];

    }
    else{
        todoobj=JSON.parse(todolist);
        

    }
    todoobj.push(inputval.value);
    localStorage.setItem("note",JSON.stringify(todoobj));
    inputval.value="";
    //console.log(todoobj)
    showlist();




}
//display the list  in the screen
function showlist(){
    let todolist=localStorage.getItem('note');
    if(todolist==null)
    {
        todoobj=[];

    }
    else{
        todoobj=JSON.parse(todolist);
        

    }
    let html='';
    let todoelem=document.getElementById("show");
    todoobj.forEach(function(element,index) {

        html +=
            //`<tr>
             //   <td>${index}</td>
               // <td>${element}</td>
            //</tr>`
            `<table style="border-collapse: collapse;
            text-align: center;
            width: 75%;
            margin: auto;">
            <tr>
                <th style=" border: 1px solid black;
                margin-top: 20px;"></th>
                <th></th>
            </tr>

            <tr>
                <td style="font-size: 22px;
                font-weight: bold;
                font-family: cursive;">${index+1}</td>
                <td>${element}</td>
                
            </tr>
            
            <button id="${index}"onclick ="deletenote(this.id)" class="delbtn">Delete</button>


        </table>`;

        
 
    });
    if(todoobj.length!=0)
    {    
        todoelem.innerHTML=html;
    }
    else{
        todoelem.innerHTML="<b>Nothing to show.Add your items</b>";
    } 
    
    
       
        
    
}
function deletenote(index){
    console.log("i am deleting",index)
    let todolist=localStorage.getItem('note');
    if(todolist==null)
    {
        todoobj=[];

    }
    else{
        todoobj=JSON.parse(todolist);
        

    }
    todoobj.splice(index,1);
    localStorage.setItem("note",JSON.stringify(todoobj));
    showlist();
}
    