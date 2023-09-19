import {useEffect, useState} from "react";
import {subGoal} from "./App.tsx";
import axios from "axios";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import './UpdatedGoalPage.css';


type yourGoal = {
    id: string,
    description: string,
    subGoals: subGoal[]

}
export default function () {

    const [yourGoals, setYourGoals] = useState<yourGoal[] | undefined>(undefined)

    const hoursInvestedString = "Hours invested so far:";
    const hoursToReachSubGoalString = "Hours left to complete the subGoal:"
    const nav = useNavigate();


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


    let progrSoll11;
    let progrIst11;
    let progrSoll12;
    let progrIst12;
    let progrSoll13;
    let progrIst13;

    if (yourGoals) {

        progrSoll11 = yourGoals[0].subGoals[0].timeGoal.toString();
        progrIst11 = yourGoals[0].subGoals[0].time.toString();
        progrSoll12 = yourGoals[0].subGoals[1].timeGoal.toString();
        progrIst12 = yourGoals[0].subGoals[1].time.toString();
        progrSoll13 = yourGoals[0].subGoals[2].timeGoal.toString();
        progrIst13 = yourGoals[0].subGoals[2].time.toString();

    }


    return (
        yourGoals === undefined ? <div>Loading.....!</div> : (

            <div className={"container"}>
                < h1>
                    Übersicht zu deinen Zielen!
                </h1>
                <h3 className={"headline-goal"}>{yourGoals[0].description}</h3>
                <table id="customers">
                    <tr className={"background-color color-white"}>
                        <td className={"data-pad"}>
                            {yourGoals[0].subGoals[0].event}:
                        </td>
                        <td className={"data-pad"}>
                            <label htmlFor="file">SubGoal-progress: {yourGoals[0].subGoals[0].time.toString()}h
                                recently invested</label>
                        </td>
                        <td className={"data-pad"}>
                            <progress id="file" color="#257dbe" max={yourGoals[0].subGoals[0].timeGoalStat.toString()}
                                      value={yourGoals[0].subGoals[0].time.toString()}></progress>
                            <label> {yourGoals[0].subGoals[0].timeGoal.toString()}h to go</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {yourGoals[0].subGoals[1].event}:
                        </td>
                        <td>
                            <label htmlFor="file">SubGoal-progress: {yourGoals[0].subGoals[1].time.toString()}h
                                recently invested</label>
                        </td>
                        <td>
                            <progress id="file" color="#257dbe" max={yourGoals[0].subGoals[1].timeGoalStat.toString()}
                                      value={yourGoals[0].subGoals[1].time.toString()}></progress>
                            <label> {yourGoals[0].subGoals[1].timeGoal.toString()}h to go</label>
                        </td>
                    </tr>
                    <tr className={"background-color color-white"}>
                        <td>
                            {yourGoals[0].subGoals[2].event}:
                        </td>
                        <td>
                            <label htmlFor="file">SubGoal-progress: {yourGoals[0].subGoals[2].time.toString()}h
                                recently invested</label>
                        </td>
                        <td>
                            <progress id="file" color="#257dbe" max={yourGoals[0].subGoals[2].timeGoalStat.toString()}
                                      value={yourGoals[0].subGoals[2].time.toString()}></progress>
                            <label> {yourGoals[0].subGoals[2].timeGoal.toString()}h to go</label>
                        </td>
                    </tr>


                </table>


                <h3 className={"headline-goal"}>{yourGoals[1].description}</h3>
                <table id="customers">
                    <tr className={"background-color color-white"}>
                        <td className={"data-pad"}>
                            {yourGoals[1].subGoals[0].event}:
                        </td>
                        <td className={"data-pad"}>
                            <label htmlFor="file">SubGoal-progress: {yourGoals[1].subGoals[0].time.toString()}h
                                recently invested</label>
                        </td>
                        <td className={"data-pad"}>
                            <progress id="file" color="#257dbe" max={yourGoals[1].subGoals[0].timeGoalStat.toString()}
                                      value={yourGoals[1].subGoals[0].time.toString()}></progress>
                            <label> {yourGoals[1].subGoals[0].timeGoal.toString()}h to go</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {yourGoals[1].subGoals[1].event}:
                        </td>
                        <td>
                            <label htmlFor="file">SubGoal-progress: {yourGoals[1].subGoals[1].time.toString()}h
                                recently invested</label>
                        </td>
                        <td>
                            <progress id="file" color="#257dbe" max={yourGoals[1].subGoals[1].timeGoalStat.toString()}
                                      value={yourGoals[1].subGoals[1].time.toString()}></progress>
                            <label> {yourGoals[1].subGoals[1].timeGoal.toString()}h to go</label>
                        </td>
                    </tr>
                    <tr className={"background-color color-white"}>
                        <td>
                            {yourGoals[1].subGoals[2].event}:
                        </td>
                        <td>
                            <label htmlFor="file">SubGoal-progress: {yourGoals[1].subGoals[2].time.toString()}h
                                recently invested</label>
                        </td>
                        <td>
                            <progress id="file" color="#257dbe" max={yourGoals[1].subGoals[2].timeGoalStat.toString()}
                                      value={yourGoals[1].subGoals[2].time.toString()}></progress>
                            <label> {yourGoals[1].subGoals[2].timeGoal.toString()}h to go</label>
                        </td>
                    </tr>


                </table>

                <h3 className={"headline-goal"}>{yourGoals[2].description}</h3>
                <table id="customers">
                    <tr className={"background-color color-white"}>
                        <td className={"data-pad"}>
                            {yourGoals[2].subGoals[0].event}:
                        </td>
                        <td className={"data-pad"}>
                            <label htmlFor="file">SubGoal-progress: {yourGoals[2].subGoals[0].time.toString()}h
                                recently invested</label>
                        </td>
                        <td className={"data-pad"}>
                            <progress id="file" color="#257dbe" max={yourGoals[2].subGoals[0].timeGoalStat.toString()}
                                      value={yourGoals[2].subGoals[0].time.toString()}></progress>
                            <label> {yourGoals[2].subGoals[0].timeGoal.toString()}h to go</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {yourGoals[2].subGoals[1].event}:
                        </td>
                        <td>
                            <label htmlFor="file">SubGoal-progress: {yourGoals[2].subGoals[1].time.toString()}h
                                recently invested</label>
                        </td>
                        <td>
                            <progress id="file" color="#257dbe" max={yourGoals[2].subGoals[1].timeGoalStat.toString()}
                                      value={yourGoals[2].subGoals[1].time.toString()}></progress>
                            <label> {yourGoals[2].subGoals[1].timeGoal.toString()}h to go</label>
                        </td>
                    </tr>
                    <tr className={"background-color color-white"}>
                        <td>
                            {yourGoals[2].subGoals[2].event}:
                        </td>
                        <td>
                            <label htmlFor="file">SubGoal-progress: {yourGoals[2].subGoals[2].time.toString()}h
                                recently invested</label>
                        </td>
                        <td>
                            <progress id="file" color="#257dbe" max={yourGoals[2].subGoals[2].timeGoalStat.toString()}
                                      value={yourGoals[2].subGoals[2].time.toString()}></progress>
                            <label> {yourGoals[2].subGoals[2].timeGoal.toString()}h to go</label>
                        </td>
                    </tr>


                </table>

                <h3 className={"headline-goal"}>{yourGoals[3].description}</h3>
                <table id="customers">
                    <tr className={"background-color color-white"}>
                        <td className={"data-pad"}>
                            {yourGoals[3].subGoals[0].event}:
                        </td>
                        <td className={"data-pad"}>
                            <label htmlFor="file">SubGoal-progress: {yourGoals[3].subGoals[0].time.toString()}h
                                recently invested</label>
                        </td>
                        <td className={"data-pad"}>
                            <progress id="file" color="#257dbe" max={yourGoals[3].subGoals[0].timeGoalStat.toString()}
                                      value={yourGoals[3].subGoals[0].time.toString()}></progress>
                            <label> {yourGoals[3].subGoals[0].timeGoal.toString()}h to go</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {yourGoals[3].subGoals[1].event}:
                        </td>
                        <td>
                            <label htmlFor="file">SubGoal-progress: {yourGoals[3].subGoals[1].time.toString()}h
                                recently invested</label>
                        </td>
                        <td>
                            <progress id="file" color="#257dbe" max={yourGoals[3].subGoals[1].timeGoalStat.toString()}
                                      value={yourGoals[3].subGoals[1].time.toString()}></progress>
                            <label> {yourGoals[3].subGoals[1].timeGoal.toString()}h to go</label>
                        </td>
                    </tr>
                    <tr className={"background-color color-white"}>
                        <td>
                            {yourGoals[3].subGoals[2].event}:
                        </td>
                        <td>
                            <label htmlFor="file">SubGoal-progress: {yourGoals[3].subGoals[2].time.toString()}h
                                recently invested</label>
                        </td>
                        <td>
                            <progress id="file" color="#257dbe" max={yourGoals[3].subGoals[2].timeGoalStat.toString()}
                                      value={yourGoals[3].subGoals[2].time.toString()}></progress>
                            <label> {yourGoals[3].subGoals[2].timeGoal.toString()}h to go</label>
                        </td>
                    </tr>


                </table>







                <div className={"btn_updated_page"}>

                    <Button onClick={() => nav("/updateProgress")}>Back to update Progress</Button>
                </div>

            </div>


        )

    )
}