import {useEffect, useState} from "react";
import axios from "axios";
import './UpdateProgressPage.css';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import {subGoal} from "./App.tsx";


type yourGoal = {
    id: string,
    description: string,
    subGoals: subGoal[]

}


export default function () {

    const [yourGoals, setYourGoals] = useState<yourGoal[] | undefined>(undefined)
    const [counterSubGoal11, setCountSubGoal11] = useState(0);
    const [counterSubGoal12, setCountSubGoal12] = useState(0);
    const [counterSubGoal13, setCountSubGoal13] = useState(0);
    const [counterSubGoal21, setCountSubGoal21] = useState(0);
    const [counterSubGoal22, setCountSubGoal22] = useState(0);
    const [counterSubGoal23, setCountSubGoal23] = useState(0);
    const [counterSubGoal31, setCountSubGoal31] = useState(0);
    const [counterSubGoal32, setCountSubGoal32] = useState(0);
    const [counterSubGoal33, setCountSubGoal33] = useState(0);
    const [counterSubGoal41, setCountSubGoal41] = useState(0);
    const [counterSubGoal42, setCountSubGoal42] = useState(0);
    const [counterSubGoal43, setCountSubGoal43] = useState(0);


    const nav = useNavigate();

    const hoursInvestedString = "Hours invested so far: ";
    const hoursToReachSubGoalString = "Hours left to complete the subGoal: "

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
    let timeGoalUpdSubGoal21 = 0;
    let timeGoalUpdSubGoal22 = 0;
    let timeGoalUpdSubGoal23 = 0;
    let timeGoalUpdSubGoal31 = 0;
    let timeGoalUpdSubGoal32 = 0;
    let timeGoalUpdSubGoal33 = 0;
    let timeGoalUpdSubGoal41 = 0;
    let timeGoalUpdSubGoal42 = 0;
    let timeGoalUpdSubGoal43 = 0;


    if (yourGoals) {
        timeGoalUpdSubGoal11 = yourGoals[0].subGoals[0].timeGoal;
        timeGoalUpdSubGoal12 = yourGoals[0].subGoals[1].timeGoal;
        timeGoalUpdSubGoal13 = yourGoals[0].subGoals[2].timeGoal;
        timeGoalUpdSubGoal21 = yourGoals[1].subGoals[0].timeGoal;
        timeGoalUpdSubGoal22 = yourGoals[1].subGoals[1].timeGoal;
        timeGoalUpdSubGoal23 = yourGoals[1].subGoals[2].timeGoal;
        timeGoalUpdSubGoal31 = yourGoals[2].subGoals[0].timeGoal;
        timeGoalUpdSubGoal32 = yourGoals[2].subGoals[1].timeGoal;
        timeGoalUpdSubGoal33 = yourGoals[2].subGoals[2].timeGoal;
        timeGoalUpdSubGoal41 = yourGoals[3].subGoals[0].timeGoal;
        timeGoalUpdSubGoal42 = yourGoals[3].subGoals[1].timeGoal;
        timeGoalUpdSubGoal43 = yourGoals[3].subGoals[2].timeGoal;


    }


    function submit() {

        if (yourGoals) {
            yourGoals[0].subGoals[0].timeGoal = timeGoalUpdSubGoal11;
            yourGoals[0].subGoals[1].timeGoal = timeGoalUpdSubGoal12;
            yourGoals[0].subGoals[2].timeGoal = timeGoalUpdSubGoal13;
            yourGoals[0].subGoals[0].time = counterSubGoal11;
            yourGoals[0].subGoals[1].time = counterSubGoal12;
            yourGoals[0].subGoals[2].time = counterSubGoal13;
            yourGoals[1].subGoals[0].timeGoal = timeGoalUpdSubGoal21;
            yourGoals[1].subGoals[1].timeGoal = timeGoalUpdSubGoal22;
            yourGoals[1].subGoals[2].timeGoal = timeGoalUpdSubGoal23;
            yourGoals[1].subGoals[0].time = counterSubGoal21;
            yourGoals[1].subGoals[1].time = counterSubGoal22;
            yourGoals[1].subGoals[2].time = counterSubGoal23;
            yourGoals[2].subGoals[0].timeGoal = timeGoalUpdSubGoal31;
            yourGoals[2].subGoals[1].timeGoal = timeGoalUpdSubGoal32;
            yourGoals[2].subGoals[2].timeGoal = timeGoalUpdSubGoal33;
            yourGoals[2].subGoals[0].time = counterSubGoal31;
            yourGoals[2].subGoals[1].time = counterSubGoal32;
            yourGoals[2].subGoals[2].time = counterSubGoal33;
            yourGoals[3].subGoals[0].timeGoal = timeGoalUpdSubGoal41;
            yourGoals[3].subGoals[1].timeGoal = timeGoalUpdSubGoal42;
            yourGoals[3].subGoals[2].timeGoal = timeGoalUpdSubGoal43;
            yourGoals[3].subGoals[0].time = counterSubGoal41;
            yourGoals[3].subGoals[1].time = counterSubGoal42;
            yourGoals[3].subGoals[2].time = counterSubGoal43;
        }

        axios({
            method: 'put',
            url: '/api/bestmi/updateTime',
            data: {

                "yourGoals": yourGoals


            }
        }).then(() => {
                nav("/updatedGoals");
            }
        );
        console.log(JSON.stringify(yourGoals));
    }


    function cancel() {
        nav("/subGoals");

    }


    return (
        yourGoals === undefined ? <div>Loading.....!</div> : (

            <div>


                <div className={"imageContainer"}>
                    <img src={"./triangle_logo.png"} alt={"here the logo should be"}/>
                    <img src={"./triangle_logo.png"} alt={"here the logo should be"}/>
                </div>

                <div className={"container"}>


                    < h1>
                        How much were you progressing your goals today?
                    </h1>
                    <h3> Please update your goal progress in hours via the given buttons!</h3>
                    <div>
                        <h3 className={"headline-goal"}>{yourGoals[0].description}</h3>
                        <table id="customers">
                            <tr className={"background-color color-white"}>

                                <td className={"data-pad"}> {yourGoals[0].subGoals[0].event}:</td>
                                <td className={"data-pad"}>{hoursToReachSubGoalString}
                                    <span id="totalClicks">
                                {timeGoalUpdSubGoal11 = timeGoalUpdSubGoal11 - counterSubGoal11}
                                </span> <a> hours </a></td>
                                <td>{hoursInvestedString}
                                    <button onClick={() => {
                                        if (counterSubGoal11 > 0) {
                                            setCountSubGoal11(counterSubGoal11 - 1)
                                        }

                                    }}>-
                                    </button>
                                    <span id="totalClicks">

                                </span> <a> {(counterSubGoal11 - 1) + 1} hours </a>
                                    <button onClick={() => {
                                        if (timeGoalUpdSubGoal11 > 0) {
                                            setCountSubGoal11(counterSubGoal11 + 1)
                                        }
                                    }}>+
                                    </button>
                                </td>

                            </tr>

                            <tr>

                                <td> {yourGoals[0].subGoals[1].event}:</td>
                                <td>{hoursToReachSubGoalString}
                                    <span id="totalClicks">
                                {timeGoalUpdSubGoal12 = timeGoalUpdSubGoal12 - counterSubGoal12}
                                </span> <a>hours</a></td>
                                <td>{hoursInvestedString}
                                    <button onClick={() => {
                                        if (counterSubGoal12 > 0) {
                                            setCountSubGoal12(counterSubGoal12 - 1)
                                        }

                                    }}>-
                                    </button>
                                    <span id="totalClicks">

                                </span> <a>  {(counterSubGoal12 - 1) + 1} hours </a>
                                    <button onClick={() => {
                                        if (timeGoalUpdSubGoal12 > 0) {
                                            setCountSubGoal12(counterSubGoal12 + 1)
                                        }
                                    }}>+
                                    </button>
                                </td>

                            </tr>

                            <tr className={"background-color color-white"}>
                                <td> {yourGoals[0].subGoals[2].event}:</td>
                                <td>{hoursToReachSubGoalString}
                                    <span id="totalClicks">
                                {timeGoalUpdSubGoal13 = timeGoalUpdSubGoal13 - counterSubGoal13}
                                </span> <a>hours</a></td>
                                <td>{hoursInvestedString}
                                    <button onClick={() => {
                                        if (counterSubGoal13 > 0) {
                                            setCountSubGoal13(counterSubGoal13 - 1)
                                        }

                                    }}>-
                                    </button>
                                    <span id="totalClicks">

                                </span> <a>  {(counterSubGoal13 - 1) + 1} hours </a>
                                    <button onClick={() => {
                                        if (timeGoalUpdSubGoal13 > 0) {
                                            setCountSubGoal13(counterSubGoal13 + 1)
                                        }
                                    }}>+
                                    </button>
                                </td>
                            </tr>
                        </table>

                        <h3 className={"headline-goal"}>{yourGoals[1].description}</h3>
                        <table id="customers">
                            <tr className={"background-color color-white"}>
                                <td className={"data-pad"}> {yourGoals[1].subGoals[0].event}:</td>
                                <td className={"data-pad"}>{hoursToReachSubGoalString}
                                    <span id="totalClicks">
                                {timeGoalUpdSubGoal21 = timeGoalUpdSubGoal21 - counterSubGoal21}
                                </span> <a>hours</a></td>
                                <td>{hoursInvestedString}
                                    <button onClick={() => {
                                        if (counterSubGoal21 > 0) {
                                            setCountSubGoal21(counterSubGoal21 - 1)
                                        }

                                    }}>-
                                    </button>
                                    <span id="totalClicks">

                                </span> <a> {(counterSubGoal21 - 1) + 1} hours </a>
                                    <button onClick={() => {
                                        if (timeGoalUpdSubGoal21 > 0) {
                                            setCountSubGoal21(counterSubGoal21 + 1)
                                        }
                                    }}>+
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td> {yourGoals[1].subGoals[1].event}:</td>
                                <td>{hoursToReachSubGoalString}
                                    <span id="totalClicks">
                                {timeGoalUpdSubGoal22 = timeGoalUpdSubGoal22 - counterSubGoal22}
                                </span> <a>hours</a></td>
                                <td>{hoursInvestedString}
                                    <button onClick={() => {
                                        if (counterSubGoal22 > 0) {
                                            setCountSubGoal22(counterSubGoal22 - 1)
                                        }

                                    }}>-
                                    </button>
                                    <span id="totalClicks">

                                </span> <a>  {(counterSubGoal22 - 1) + 1} hours </a>
                                    <button onClick={() => {
                                        if (timeGoalUpdSubGoal22 > 0) {
                                            setCountSubGoal22(counterSubGoal22 + 1)
                                        }
                                    }}>+
                                    </button>
                                </td>
                            </tr>

                            <tr className={"background-color color-white"}>
                                <td> {yourGoals[1].subGoals[2].event}:</td>
                                <td>{hoursToReachSubGoalString}
                                    <span id="totalClicks">
                                {timeGoalUpdSubGoal23 = timeGoalUpdSubGoal23 - counterSubGoal23}
                                </span> <a>hours</a></td>
                                <td>{hoursInvestedString}
                                    <button onClick={() => {
                                        if (counterSubGoal23 > 0) {
                                            setCountSubGoal23(counterSubGoal23 - 1)
                                        }

                                    }}>-
                                    </button>
                                    <span id="totalClicks">

                                </span> <a>   {(counterSubGoal23 - 1) + 1} hours </a>
                                    <button onClick={() => {
                                        if (timeGoalUpdSubGoal23 > 0) {
                                            setCountSubGoal23(counterSubGoal23 + 1)
                                        }
                                    }}>+
                                    </button>
                                </td>
                            </tr>
                        </table>

                        <h3 className={"headline-goal"}>{yourGoals[2].description}</h3>
                        <table id="customers">
                            <tr className={"background-color color-white"}>
                                <td className={"data-pad"}> {yourGoals[2].subGoals[0].event}:</td>
                                <td className={"data-pad"}>{hoursToReachSubGoalString}
                                    <span id="totalClicks">
                                {timeGoalUpdSubGoal31 = timeGoalUpdSubGoal31 - counterSubGoal31}
                                </span> <a>hours</a></td>
                                <td>{hoursInvestedString}
                                    <button onClick={() => {
                                        if (counterSubGoal31 > 0) {
                                            setCountSubGoal31(counterSubGoal31 - 1)
                                        }

                                    }}>-
                                    </button>
                                    <span id="totalClicks">

                                </span> <a>  {(counterSubGoal31 - 1) + 1} hours </a>
                                    <button onClick={() => {
                                        if (timeGoalUpdSubGoal31 > 0) {
                                            setCountSubGoal31(counterSubGoal31 + 1)
                                        }
                                    }}>+
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td> {yourGoals[2].subGoals[1].event}:</td>
                                <td>{hoursToReachSubGoalString}
                                    <span id="totalClicks">
                                {timeGoalUpdSubGoal32 = timeGoalUpdSubGoal32 - counterSubGoal32}
                                </span> <a>hours</a></td>
                                <td>{hoursInvestedString}
                                    <button onClick={() => {
                                        if (counterSubGoal32 > 0) {
                                            setCountSubGoal32(counterSubGoal32 - 1)
                                        }

                                    }}>-
                                    </button>
                                    <span id="totalClicks">

                                </span> <a>  {(counterSubGoal32 - 1) + 1} hours </a>
                                    <button onClick={() => {
                                        if (timeGoalUpdSubGoal32 > 0) {
                                            setCountSubGoal32(counterSubGoal32 + 1)
                                        }
                                    }}>+
                                    </button>
                                </td>
                            </tr>

                            <tr className={"background-color color-white"}>
                                <td> {yourGoals[2].subGoals[2].event}:</td>
                                <td>{hoursToReachSubGoalString}
                                    <span id="totalClicks">
                                {timeGoalUpdSubGoal33 = timeGoalUpdSubGoal33 - counterSubGoal33}
                                </span> <a>hours</a></td>
                                <td>{hoursInvestedString}
                                    <button onClick={() => {
                                        if (counterSubGoal33 > 0) {
                                            setCountSubGoal33(counterSubGoal33 - 1)
                                        }

                                    }}>-
                                    </button>
                                    <span id="totalClicks">

                                </span> <a>  {(counterSubGoal33 - 1) + 1} hours </a>
                                    <button onClick={() => {
                                        if (timeGoalUpdSubGoal33 > 0) {
                                            setCountSubGoal33(counterSubGoal33 + 1)
                                        }
                                    }}>+
                                    </button>
                                </td>
                            </tr>
                        </table>

                        <h3 className={"headline-goal"}>{yourGoals[3].description}</h3>
                        <table id="customers">
                            <tr className={"background-color color-white"}>
                                <td className={"data-pad"}> {yourGoals[3].subGoals[0].event}:</td>
                                <td className={"data-pad"}>{hoursToReachSubGoalString}
                                    <span id="totalClicks">
                                {timeGoalUpdSubGoal41 = timeGoalUpdSubGoal41 - counterSubGoal41}
                                </span> <a>hours</a></td>
                                <td>{hoursInvestedString}
                                    <button onClick={() => {
                                        if (counterSubGoal41 > 0) {
                                            setCountSubGoal41(counterSubGoal41 - 1)
                                        }

                                    }}>-
                                    </button>
                                    <span id="totalClicks">

                                </span> <a>  {(counterSubGoal41 - 1) + 1} hours </a>
                                    <button onClick={() => {
                                        if (timeGoalUpdSubGoal41 > 0) {
                                            setCountSubGoal41(counterSubGoal41 + 1)
                                        }
                                    }}>+
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td> {yourGoals[3].subGoals[1].event}:</td>
                                <td>{hoursToReachSubGoalString}
                                    <span id="totalClicks">
                                {timeGoalUpdSubGoal42 = timeGoalUpdSubGoal42 - counterSubGoal42}
                                </span> <a>hours</a></td>
                                <td>{hoursInvestedString}
                                    <button onClick={() => {
                                        if (counterSubGoal42 > 0) {
                                            setCountSubGoal42(counterSubGoal42 - 1)
                                        }

                                    }}>-
                                    </button>
                                    <span id="totalClicks">

                                </span> <a> {(counterSubGoal42 - 1) + 1} hours </a>
                                    <button onClick={() => {
                                        if (timeGoalUpdSubGoal42 > 0) {
                                            setCountSubGoal42(counterSubGoal42 + 1)
                                        }
                                    }}>+
                                    </button>
                                </td>
                            </tr>

                            <tr className={"background-color color-white"}>
                                <td> {yourGoals[3].subGoals[2].event}:</td>
                                <td>{hoursToReachSubGoalString}
                                    <span id="totalClicks">
                                {timeGoalUpdSubGoal43 = timeGoalUpdSubGoal43 - counterSubGoal43}
                                </span> <a>hours</a></td>
                                <td>{hoursInvestedString}
                                    <button onClick={() => {
                                        if (counterSubGoal43 > 0) {
                                            setCountSubGoal43(counterSubGoal43 - 1)
                                        }

                                    }}>-
                                    </button>
                                    <span id="totalClicks">

                                </span> <a> {(counterSubGoal43 - 1) + 1} hours </a>
                                    <button onClick={() => {
                                        if (timeGoalUpdSubGoal43 > 0) {
                                            setCountSubGoal43(counterSubGoal43 + 1)
                                        }
                                    }}>+
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </div>


                    <div className={"allGoals"}>


                    </div>
                    <div className={"btn_update_progress"}>
                        <Button onClick={cancel}>Cancel</Button>
                        <Button type={"submit"} onClick={submit}>Save progress</Button>
                    </div>

                </div>
            </div>


        ))
}