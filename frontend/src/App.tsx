
import './App.css'
import {Route, Routes} from "react-router-dom";
import DefineGoalPage from "./DefineGoalPage.tsx";
import {useState} from "react";
import DefineSubGoalPage from "./DefineSubGoalPage.tsx";

function App() {
   // const [count, setCount] = useState(0)
    const[goal1, setGoal1] = useState("");
    const[goal2, setGoal2] = useState("");
    const[goal3, setGoal3] = useState("");
    const[goal4, setGoal4] = useState("");


    return (

            <Routes>
                <Route path="/" element={<DefineGoalPage setGoal1={setGoal1} setGoal2={setGoal2}
                setGoal3={setGoal3} setGoal4={setGoal4}/>}/>
                <Route path={"/subgoals"} element={<DefineSubGoalPage goal1={goal1} goal2={goal2} goal3={goal3} goal4={goal4}/>}/>
            </Routes>

    )
}

export default App
