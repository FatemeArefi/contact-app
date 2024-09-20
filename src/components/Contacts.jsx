import { useState } from "react"

import ListOfContacts from "./ListOfContacts"; 

const inputs = [
  { type:"text" , name:"name" , placeholder:"Name"},
  { type:"text" , name :"lastName" , placeholder:"Last Name"},
  { type:"email" , name :"email" , placeholder:"Email"},
  { type:"number" , name :"phone" , placeholder:"Phone"},
];
function Contacts() {
    const [alert,setAlert] = useState(""); 
  const [contacts,setContacts]=useState([]);
    const [contact,setContact]=useState({
        name:"",
        lastName:"",
        email:"",
        phone:"",
    });
    
    const chHandler = (event) => {
        const name =event.target.name;
        const value =event.target.value;
        setContacts((contact) => ({...contact,[name]:value}));
    }; 
    const addHandler = () => {
    //    contacts.push(contact);
if(
   !contact.name ||
   !contact.lastName || 
   !contact.email || 
   !contact.phone
  ) {
setAlert("Please Enter Valid Data! ");
  return;
}else{setAlert("");}
setContacts((contacts) => [...contacts,contact]);
setContact({
    name:"",
    lastName:"",
    email:"",
    phone:"",
});};
  return (
    <div>
      <div>
        {inputs.map((input,index) => (
          <input
          key={index}
           type={input.type}
          placeholder={input.placeholder}
         name={input.name} 
         value={contacts[input.name]}
         onChange={chHandler}
         />
        ))}
      
        <button onClick={addHandler}>Add Contact</button>
      </div>
   <div>{alert && <p>{alert}</p>}</div>
       <ListOfContacts contacts={contacts}/>
    </div>
  );
}
export default Contacts;
