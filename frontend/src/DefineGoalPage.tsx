import './DefineGoalPage.css';
import {ChangeEvent} from "react";
import {useNavigate} from "react-router-dom";
import {YourGoal} from "./App.tsx";
import {Button} from "@mui/material";

type Props = {
    setGoal1:(goal1:YourGoal) => void;
    setGoal2:(goal2:YourGoal) => void;
    setGoal3:(goal3:YourGoal) => void;
    setGoal4:(goal4:YourGoal) => void;
}



export default function (props:Props) {


    const nav = useNavigate();

    function submit(){

        nav("/subgoals");

    }

    function onChangeGoal1(event:ChangeEvent<HTMLInputElement>){
        props.setGoal1({description: event.target.value, id: "", subGoals: []});
    }

    function onChangeGoal2(event:ChangeEvent<HTMLInputElement>){
        props.setGoal2({id: "", description: event.target.value, subGoals: []});
    }

    function onChangeGoal3(event:ChangeEvent<HTMLInputElement>){
        props.setGoal3({id: "", description: event.target.value, subGoals: []});
    }
    function onChangeGoal4(event:ChangeEvent<HTMLInputElement>){
        props.setGoal4({ id: "", description: event.target.value, subGoals: []});
    }

    return (

        <div >
            <div className={"imageContainer"}>
                <img src={"./triangle_logo.png"} alt={"here the logo should be"}/>
                <img src={"./triangle_logo.png"} alt={"here the logo should be"}/>
            </div>


            <div className={"container"}>

            <div>
                <h1 className={"headline"}>Welcome to BestMe!</h1>
                <h2 className={"headline"}>What goals do you want to reach?</h2>
            </div>
            <div className={"card"}>
                    <form onSubmit={submit} className={"form-div"}>
                        <div className={"goal-row"}>
                        <label className={"pad-right"}>Define goal #1</label>
                        <input id={"goal1"} type={"text"} placeholder={"Please enter a goal"}
                               onChange={onChangeGoal1} required={true}/>
                        </div>
                        <div className={"goal-row"}>
                        <label className={"pad-right"}>Define goal #2</label>
                        <input id={"goal2"} type={"text"} placeholder={"Please enter a goal"}
                               onChange={onChangeGoal2} required={true}/>
                        </div>
                        <div className={"goal-row"}>
                        <label className={"pad-right"}>Define goal #3</label>
                        <input id={"goal3"} type={"text"} placeholder={"Please enter a goal"}
                               onChange={onChangeGoal3} required={true}/>
                        </div>
                        <div className={"goal-row"}>
                        <label className={"pad-right"}>Define goal #4</label>
                        <input id={"goal4"} type={"text"} placeholder={"Please enter a goal"}
                               onChange={onChangeGoal4} required={true}/>
                        </div>
                        <div className={"btn-row"}>
                            <Button type={"submit"} onClick={submit}>Save goals</Button>
                        </div>

                    </form>

            </div>

        </div>

        </div>
    )
}