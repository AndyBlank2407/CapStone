import './App.css'
import {Route, Routes} from "react-router-dom";
import DefineGoalPage from "./DefineGoalPage.tsx";
import {useState} from "react";
import DefineSubGoalPage from "./DefineSubGoalPage.tsx";
import RegisterPage from "./RegisterPage/RegisterPage.tsx";
import LoginPage from "./LoginPage/LoginPage.tsx";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute.tsx";
import UpdateProgressPage from "./UpdateProgressPage.tsx";


export type subGoal = {
    event: string,
    time: number|undefined,
    timeGoal: number

}

export type YourGoal = {
    id: string,
    description: string,
    subGoals: subGoal[]
}

export type User = {
    yourGoals: YourGoal[]

}

function App() {
    // const [count, setCount] = useState(0)
    const [goal1, setGoal1] = useState<YourGoal>({id: "", description: "", subGoals:[]});
    const [goal2, setGoal2] = useState<YourGoal>({id: "", description: "", subGoals:[]});
    const [goal3, setGoal3] = useState<YourGoal>({id: "", description: "", subGoals:[]});
    const [goal4, setGoal4] = useState<YourGoal>({id: "", description: "", subGoals:[]});
    const [userProfile, setUserProfile] = useState<User>({yourGoals: []});
    const [user, setUser] = useState("");
    //const[goals , setGoals] = useState<undefined|string>([]);

    console.log(userProfile);


    return (

        <Routes>
            <Route path={"/register"} element={<RegisterPage/>}/>
            <Route path={'/'} element={<LoginPage setUser={setUser}/>}/>

            <Route element={<ProtectedRoute user={user}/>}/>

            <Route path="/defineGoal" element={<DefineGoalPage setGoal1={setGoal1} setGoal2={setGoal2}
                                                     setGoal3={setGoal3} setGoal4={setGoal4}/>}/>
            <Route path={"/subgoals"}
                   element={<DefineSubGoalPage goal1={goal1} goal2={goal2} goal3={goal3} goal4={goal4}
                                               setGoal1={setGoal1} setGoal2={setGoal2} setGoal3={setGoal3}
                                               setGoal4={setGoal4} setUserProfile={setUserProfile} userProfile={userProfile}
                   />}/>

            <Route path={"/updateProgress"}
                   element={<UpdateProgressPage goal1={goal1} goal2={goal2} goal3={goal3} goal4={goal4}/>}/>
        </Routes>

    )
}

export default App
