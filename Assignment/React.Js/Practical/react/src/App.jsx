import React from "react";
import Hello from "./Hello";
import WelcomeComponent from "./WelcomeComponent";
import Greeting from "./Greeting";
import { ClassComponent } from "./ClassComponent";
import UserCard from "./UserCard";
import Counter from "./Counter";
import ClickButton from "./ClickButton";
import DynamicForm from "./DynamicForm";
import AuthButton from "./AuthButton";
import VoteEligibility from "./VoteEligibility";
import FruitList from "./Fruitlist";
import UserList from "./UserList";
import UserForm from "./UserForm";
import ValidatedUserForm from "./ValidatedUserForm";
import FetchData from "./FetchData";
import DataFetcher from "./DataFetcher";





function App() {
  return (
    <>
   
   <Hello/>
   <WelcomeComponent/>
   <Greeting />
   <ClassComponent />
   <UserCard name="Poonam" age="22" location="Ahmedabad"/>
   <Counter />
   <ClickButton />
   <DynamicForm />
   <AuthButton />
   <VoteEligibility />
   <FruitList/>
   <UserList />
   <UserForm />
   <ValidatedUserForm />
   <FetchData />
   <DataFetcher />
  

   
  
    </>
  );
}

export default App;