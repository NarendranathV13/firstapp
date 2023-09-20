import '../assets/styles/style.css';
import { useState, createContext, useContext } from "react";
const UserContext = createContext();
function Contexthook() {
  const [user, setUser] = useState("Context hook");

  return (
    <UserContext.Provider value={user}>
        <h1 class="text-center">Context Hook</h1>
        <p class="text-center text-bg-dark p-3 rounded-bottom-3 ">Passing props through nested components</p>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1 class="mt-4 mb-3">Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1 class="mt-4 mb-3">Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1 class="mt-4 mb-3">Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1 class="mt-4 mb-3">Component 5</h1>
      <h2>{`Welcome to  ${user} again!`}</h2>
    </>
  );
}
export default Contexthook
