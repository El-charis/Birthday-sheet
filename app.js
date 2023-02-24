
const submit=document.querySelector('form')
const inputName=document.querySelector('#name')
const Phonename=document.querySelector('#phone-number')
const tablebody=document.querySelector('tbody')
const container=document.querySelector('.clear')
const input=document.querySelector('.form-control')

loadallEventlisteners()

function loadallEventlisteners(){
    document.addEventListener('DOMContentLoaded', getDetails)
    ///load birthday
     document.addEventListener('DOMContentLoaded', theBirthday)
    // //add task
    submit.addEventListener('submit', AddDetails)
    ///remove tasks
    tablebody.addEventListener('click', removeTask)
    ///
    container.addEventListener('click', clearTable)
  
    
}
function getDetails(){
   
let details;


if(localStorage.getItem('details')===null){
    details=[]

}
else{
    details=JSON.parse(localStorage.getItem('details'))
}


details.forEach(function(detail){
    
    const rowNO=document.createElement('tr')
    
    ///append th to tr
   const Friendname=document.createElement('td')
   Friendname.className='friendname'
   //append name entry to th
   Friendname.appendChild(document.createTextNode(detail))
   //create td for phone
   const birthday=document.createElement('td')
   birthday.className='thebirthday'
// //    //append Phone entry to phone
   
    // birthday.appendChild(document.createTextNode(birthdays))
   
   
   const Sn=document.createElement('th')
   Sn.appendChild(document.createTextNode(`⦿`))
   
   
   rowNO.append(Sn, Friendname,birthday )
   rowNO.className='mybirthdayrow'

   tablebody.append(rowNO)
   tablebody.className='maintable'
   /// create delete lin tag
//    const deleteItem=document.createElement('a')
//    ///create font awesome icon
//    deleteItem.innerHTML='<i class=" fa fa-trash"></i>'
//    ///add left-margin
//    deleteItem.className='float-left'

//    birthday.appendChild(deleteItem)

 

    
})

}


    
function AddDetails(e){
    if(inputName.value==='' || Phonename.value===''){
        alertfunction("fill in empty field")
    }
     else{
        ///create row elemment
        
    
    
     const rowNO=document.createElement('tr')
    
     ///append th to tr
    const Friendname=document.createElement('td')
    //append name entry to th
    Friendname.appendChild(document.createTextNode(inputName.value))
    //create td for phone
    
    const obirthday=document.createElement('td')
    obirthday.append('')
    const birthday=document.createElement('td')
    //append Phone entry to phone
    
    birthday.appendChild(document.createTextNode(Phonename.value))
    
    const Sn=document.createElement('th')
    Sn.appendChild(document.createTextNode(`⦿`))
    
    
    rowNO.append(Sn, Friendname, obirthday ,birthday )

    tablebody.append(rowNO)
    
    /// create delete lin tag
    const deleteItem=document.createElement('a')
    ///create font awesome icon
    deleteItem.innerHTML='<i class=" fa fa-trash"></i>'
    ///add left-margin
    deleteItem.className='float-left'
  

    birthday.appendChild(deleteItem)

    //store Details
    StoreDetailsName(inputName.value)
    storetheBirthday(Phonename.value)
  
    
    input.value.style.display='none'
     e.preventDefault()
     
     
     }
     }
     ///store details

     function StoreDetailsName(detail){
        let details;
        if(localStorage.getItem('details')===null){
            details=[]
        }
        else{
            details=JSON.parse(localStorage.getItem('details'))
        }
        details.push(detail)
        localStorage.setItem('details', JSON.stringify(details))
        
     }
     ///store birthday
     function storetheBirthday(birthday){
        let birthdays;
        if(localStorage.getItem('birthdays')===null){
            birthdays=[]
        }
        else{
            birthdays=JSON.parse(localStorage.getItem('birthdays'))
        }
        birthdays.push(birthday)
        localStorage.setItem('birthdays', JSON.stringify(birthdays))
        
     }

     //store reload
     function theBirthday(birthday){
        let birthdays
        
        if(localStorage.getItem('birthdays')===null){
            birthdays=[]}
        else{
            birthdays=JSON.parse(localStorage.getItem('birthdays'))
        }
        
       birthdays.forEach(function(birthday){
        const mytablerow=document.querySelector(".thebirthday")
        const therow=document.querySelector('.mybirthdayrow')
        const thetable=document.querySelector('.maintable')
        const mybirthday=document.createElement('td');
    //append Phone entry to phone
    
    mybirthday.append(document.createTextNode(birthday))
    // mytablerow.appendChild(mybirthday)
    /// create delete lin tag
   const deleteItem=document.createElement('a')
   ///create font awesome icon
   deleteItem.innerHTML='<i class=" fa fa-trash"></i>'
   ///add left-margin
   deleteItem.className='float-left'

   mybirthday.appendChild(deleteItem)
   mybirthday.style.transform=''

   therow.append(mybirthday)
   thetable.append(therow)

    
    
        
       })
        }
     
     ///remove task

    function removeTask(e){

        if(e.target.classList.contains('fa-trash')){
            if(confirm('Are you sure')){
                e.target.parentElement.parentElement.parentElement.remove()
                
                ///remove task
                removenamefromLS(e.target.parentElement.parentElement.parentElement);removefromLS(e.target.parentElement.parentElement)
                
            }
          
        }
        
        
    }     
    function removefromLS(Birthdaydate){
        let birthdays;

        let actualbirthday=Birthdaydate.textContent

        // let num =actualbirthday.split(/(\d+)/)
        console.log(Birthdaydate.textContent)
       
     if(localStorage.getItem('birthdays')===null){
        birthdays=[]
     }
     else{
        birthdays=JSON.parse(localStorage.getItem('birthdays'))
    }
     birthdays.forEach(function(birthday, index){
         if(Birthdaydate.textContent===birthday){
             birthdays.splice(index, 1)
    }
    })
     localStorage.setItem('birthdays', JSON.stringify(birthdays))
     }
    function removenamefromLS(nameinLS){
        let details
        let textbe=nameinLS.textContent.split(/(\d+)/)
        if(localStorage.getItem('details')===null){
            details=[]
        }
        else{
            details= JSON.parse(localStorage.getItem('details'))
        }
        details.forEach(function(detail, index){
            if('⦿'+detail===textbe[0]){
                details.splice(index,1)
            }
            localStorage.setItem('details', JSON.stringify(details))
        })
    }

function clearTable(){
while(tablebody.firstChild){
    tablebody.firstChild.remove()
    
    
}
localStorage.clear()
}
