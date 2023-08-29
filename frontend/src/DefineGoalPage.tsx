import './DefineGoalPage.css';
import {ChangeEvent} from "react";
import {useNavigate} from "react-router-dom";

type Props = {
    setGoal1:(goal1:string) => void;
    setGoal2:(goal2:string) => void;
    setGoal3:(goal3:string) => void;
    setGoal4:(goal4:string) => void;
}



export default function (props:Props) {
/*
    const[goal1, setGoal1] = useState("");
    const[goal2, setGoal2] = useState("");
    const[goal3, setGoal3] = useState("");
    const[goal4, setGoal4] = useState("");*/

    const nav = useNavigate();

   /* function submit(){
        nav("/subgoals");
    }*/

    function onChangeGoal1(event:ChangeEvent<HTMLInputElement>){
        props.setGoal1(event.target.value);
    }

    function onChangeGoal2(event:ChangeEvent<HTMLInputElement>){
        props.setGoal2(event.target.value);
    }

    function onChangeGoal3(event:ChangeEvent<HTMLInputElement>){
        props.setGoal3(event.target.value);
    }
    function onChangeGoal4(event:ChangeEvent<HTMLInputElement>){
        props.setGoal4(event.target.value);
    }

    return (
        <div>
            <div>
                <h1>Was willst du dieses Jahr erreichen?</h1>
            </div>
            <div>
                    <form onSubmit={()=>nav("/subgoals")} className={"container"}>
                        <div className={"item item1"}>
                        <label>Define goal #1</label>
                        <input id={"goal1"} type={"text"} placeholder={"Please enter a goal"}
                               onChange={onChangeGoal1} required={true}/>
                        </div>
                        <div className={"item item2"}>
                        <label>Define goal #2</label>
                        <input id={"goal2"} type={"text"} placeholder={"Please enter a goal"}
                               onChange={onChangeGoal2}/>
                        </div>
                        <div className={"item item3"}>
                        <label>Define goal #3</label>
                        <input id={"goal3"} type={"text"} placeholder={"Please enter a goal"}
                               onChange={onChangeGoal3}/>
                        </div>
                        <div className={"item item4"}>
                        <label>Define goal #4</label>
                        <input id={"goal4"} type={"text"} placeholder={"Please enter a goal"}
                               onChange={onChangeGoal4}/>
                        </div>
                        <div>
                            <button className={"Save-Goals"}>Save Goals</button>
                        </div>

                    </form>

            </div>

        </div>
    )
}