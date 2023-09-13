import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {subGoal, YourGoal} from "./App.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import './UpdateProgressPage.css';

type userGoals = {
    id: string,
    yourGoals: YourGoal[]

}

type yourGoal = {
    id: string,
    description: string,
    subGoals: subGoal[]

}

type subGoal = {
    event: string,
    time: number,
    timeGoal: number
}

type Props = {
    goal1: YourGoal,
    goal2: YourGoal,
    goal3: YourGoal,
    goal4: YourGoal
}


export default function (props: Props) {

    const [yourGoals, setYourGoals] = useState<yourGoal[] | undefined>(undefined)
    const [counterSubGoal11, setCountSubGoal11] = useState(0);
    const [counterSubGoal12, setCountSubGoal12] = useState(0);
    const [counterSubGoal13, setCountSubGoal13] = useState(0);


    const hoursInvestedString = "Hours invested so far:";
    const hoursToReachSubGoalString = "Hours left to complete the subGoal:"

    useEffect(() => {
        axios({
            method: 'get',
            url: '/api/bestmi/getAllGoals'
        }).then(function (response) {
            console.log("Response status", response.status);
            console.log("Response body", response.data.yourGoals); // Ganzer Response body is bis data
            setYourGoals(response.data.yourGoals);


        });
    }, []);


    let timeGoalUpdSubGoal11 = 0;
    let timeGoalUpdSubGoal12 = 0;
    let timeGoalUpdSubGoal13 = 0;
    if (yourGoals) {
        timeGoalUpdSubGoal11 = yourGoals[0].subGoals[0].timeGoal;
        timeGoalUpdSubGoal12 = yourGoals[0].subGoals[1].timeGoal;
        timeGoalUpdSubGoal13 = yourGoals[0].subGoals[2].timeGoal;
    }


    return (
        yourGoals === undefined ? <div>Loading.....!</div> : (

            < div className={"container"}>
                < h1>
                    Was hast du heute gemacht?
                </h1>
                <h3>Update über die Buttons deinen Stunden-Progress für deine Ziele!</h3>
                <div className={"allGoals"}>
                    <div className={"goalDesc"}>
                        {yourGoals[0].description}

                        <div className={"subGoals"}>
                            <div className={"subGoalDesc"}>

                                {yourGoals[0].subGoals[0].event}:

                            </div>
                            <div>
                                {hoursToReachSubGoalString}
                                <span id="totalClicks">
                                {timeGoalUpdSubGoal11 = timeGoalUpdSubGoal11 - counterSubGoal11}
                            </span> <a>Stunden</a>
                            </div>

                            <div>
                                {hoursInvestedString}
                                <button onClick={() => {
                                    if (counterSubGoal11 > 0) {
                                        setCountSubGoal11(counterSubGoal11 - 1)
                                    }

                                }}>-
                                </button>
                                <span id="totalClicks">
                                {(counterSubGoal11 - 1) + 1}
                            </span> <a>Stunden</a>
                                <button onClick={() => {
                                    if (timeGoalUpdSubGoal11 > 0) {
                                        setCountSubGoal11(counterSubGoal11 + 1)
                                    }
                                }}>+
                                </button>
                            </div>
                        </div>

                        <div className={"subGoals"}>
                            <div className={"subGoalDesc"}>

                                {yourGoals[0].subGoals[1].event}:

                            </div>
                            <div>
                                {hoursToReachSubGoalString}
                                <span id="totalClicks">
                                {timeGoalUpdSubGoal12 = timeGoalUpdSubGoal12 - counterSubGoal12}
                            </span> <a>Stunden</a>
                            </div>

                            <div>
                                {hoursInvestedString}
                                <button onClick={() => {
                                    if (counterSubGoal12 > 0) {
                                        setCountSubGoal12(counterSubGoal12 - 1)
                                    }

                                }}>-
                                </button>
                                <span id="totalClicks">
                                {(counterSubGoal12 - 1) + 1}
                            </span> <a>Stunden</a>
                                <button onClick={() => {
                                    if (timeGoalUpdSubGoal12 > 0) {
                                        setCountSubGoal12(counterSubGoal12 + 1)
                                    }
                                }}>+
                                </button>
                            </div>
                        </div>

                        <div className={"subGoals"}>
                            <div className={"subGoalDesc"}>

                                {yourGoals[0].subGoals[2].event}:

                            </div>
                            <div>
                                {hoursToReachSubGoalString}
                                <span id="totalClicks">
                                {timeGoalUpdSubGoal13 = timeGoalUpdSubGoal13 - counterSubGoal13}
                            </span> <a>Stunden</a>
                            </div>

                            <div>
                                {hoursInvestedString}
                                <button onClick={() => {
                                    if (counterSubGoal13 > 0) {
                                        setCountSubGoal13(counterSubGoal13 - 1)
                                    }

                                }}>-
                                </button>
                                <span id="totalClicks">
                                {(counterSubGoal13 - 1) + 1}
                            </span> <a>Stunden</a>
                                <button onClick={() => {
                                    if (timeGoalUpdSubGoal13 > 0) {
                                        setCountSubGoal13(counterSubGoal13 + 1)
                                    }
                                }}>+
                                </button>
                            </div>
                        </div>







                    </div>
                </div>


            </div>


        ))
}