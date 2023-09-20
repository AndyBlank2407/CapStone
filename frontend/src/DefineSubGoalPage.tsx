import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
//import axios from "axios";
import {subGoal, User, YourGoal} from "./App.tsx";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import './DefineSubGoalPage.css';
import axios from "axios";

type Props = {
    goal1: YourGoal,
    goal2: YourGoal,
    goal3: YourGoal,
    goal4: YourGoal,

    setGoal1: (goal1: YourGoal) => void;
    setGoal2: (goal2: YourGoal) => void;
    setGoal3: (goal3: YourGoal) => void;
    setGoal4: (goal4: YourGoal) => void;

    setUserProfile: (user: User) => void;
    userProfile: User;
}


export default function (props: Props) {

    const [subGoal11, setSubGoal11] = useState<subGoal>({event: "", timeGoal: 0, timeGoalStat: 0, time: 0});
    const [subGoal12, setSubGoal12] = useState<subGoal>({event: "", timeGoal: 0, timeGoalStat: 0, time: 0});
    const [subGoal13, setSubGoal13] = useState<subGoal>({event: "", timeGoal: 0, timeGoalStat: 0, time: 0});
    const [subGoal21, setSubGoal21] = useState<subGoal>({event: "", timeGoal: 0, timeGoalStat: 0, time: 0});
    const [subGoal22, setSubGoal22] = useState<subGoal>({event: "", timeGoal: 0, timeGoalStat: 0, time: 0});
    const [subGoal23, setSubGoal23] = useState<subGoal>({event: "", timeGoal: 0, timeGoalStat: 0, time: 0});
    const [subGoal31, setSubGoal31] = useState<subGoal>({event: "", timeGoal: 0, timeGoalStat: 0, time: 0});
    const [subGoal32, setSubGoal32] = useState<subGoal>({event: "", timeGoal: 0, timeGoalStat: 0, time: 0});
    const [subGoal33, setSubGoal33] = useState<subGoal>({event: "", timeGoal: 0, timeGoalStat: 0, time: 0});
    const [subGoal41, setSubGoal41] = useState<subGoal>({event: "", timeGoal: 0, timeGoalStat: 0, time: 0});
    const [subGoal42, setSubGoal42] = useState<subGoal>({event: "", timeGoal: 0, timeGoalStat: 0, time: 0});
    const [subGoal43, setSubGoal43] = useState<subGoal>({event: "", timeGoal: 0, timeGoalStat: 0, time: 0});
    //const [user, setUser] = useState<User>({yourGoals: []});

    const placeholderTime = "time needed in hours";
    const placeholderSubGoals = "define a sub goal";
    const nav = useNavigate();

    //const goals:string[];

    function onChangeSub11(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal11({
            event: event.target.value,
            time: 0,
            timeGoal: subGoal11?.timeGoal,
            timeGoalStat: subGoal11?.timeGoal
        });
    }

    function onChangeTime11(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal11({
            event: subGoal11?.event,
            time: 0,
            timeGoal: Number(event.target.value),
            timeGoalStat: Number(event.target.value)
        });
    }

    function onChangeSub12(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal12({
            event: event.target.value,
            time: 0,
            timeGoal: subGoal12?.timeGoal,
            timeGoalStat: subGoal12?.timeGoal
        });
    }

    function onChangeTime12(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal12({
            event: subGoal12?.event,
            time: 0,
            timeGoal: Number(event.target.value),
            timeGoalStat: Number(event.target.value)
        });
    }

    function onChangeSub13(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal13({
            event: event.target.value,
            time: 0,
            timeGoal: subGoal13?.timeGoal,
            timeGoalStat: subGoal13?.timeGoal
        });
    }

    function onChangeTime13(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal13({
            event: subGoal13?.event,
            time: 0,
            timeGoal: Number(event.target.value),
            timeGoalStat: Number(event.target.value)
        });
    }

    function onChangeSub21(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal21({
            event: event.target.value,
            time: 0,
            timeGoal: subGoal21?.timeGoal,
            timeGoalStat: subGoal21?.timeGoal
        });
    }

    function onChangeTime21(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal21({
            event: subGoal21?.event,
            time: 0,
            timeGoal: Number(event.target.value),
            timeGoalStat: Number(event.target.value)
        });
    }

    function onChangeSub22(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal22({
            event: event.target.value,
            time: 0,
            timeGoal: subGoal22?.timeGoal,
            timeGoalStat: subGoal22?.timeGoal
        });
    }

    function onChangeTime22(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal22({
            event: subGoal22?.event,
            time: 0,
            timeGoal: Number(event.target.value),
            timeGoalStat: Number(event.target.value)
        });
    }

    function onChangeSub23(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal23({
            event: event.target.value,
            time: 0,
            timeGoal: subGoal23?.timeGoal,
            timeGoalStat: subGoal23?.timeGoal
        });
    }

    function onChangeTime23(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal23({
            event: subGoal23?.event,
            time: 0,
            timeGoal: Number(event.target.value),
            timeGoalStat: Number(event.target.value)
        });
    }

    function onChangeSub31(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal31({
            event: event.target.value,
            time: 0,
            timeGoal: subGoal31?.timeGoal,
            timeGoalStat: subGoal31?.timeGoal
        });
    }

    function onChangeTime31(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal31({
            event: subGoal31?.event,
            time: 0,
            timeGoal: Number(event.target.value),
            timeGoalStat: Number(event.target.value)
        });
    }

    function onChangeSub32(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal32({
            event: event.target.value,
            time: 0,
            timeGoal: subGoal32?.timeGoal,
            timeGoalStat: subGoal32?.timeGoal
        });
    }

    function onChangeTime32(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal32({
            event: subGoal32?.event,
            time: 0,
            timeGoal: Number(event.target.value),
            timeGoalStat: Number(event.target.value)
        });
    }

    function onChangeSub33(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal33({
            event: event.target.value,
            time: 0,
            timeGoal: subGoal33?.timeGoal,
            timeGoalStat: subGoal33?.timeGoal
        });
    }

    function onChangeTime33(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal33({
            event: subGoal33?.event,
            time: 0,
            timeGoal: Number(event.target.value),
            timeGoalStat: Number(event.target.value)
        });
    }

    function onChangeSub41(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal41({
            event: event.target.value,
            time: 0,
            timeGoal: subGoal41?.timeGoal,
            timeGoalStat: subGoal41?.timeGoal
        });
    }

    function onChangeTime41(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal41({
            event: subGoal41?.event,
            time: 0,
            timeGoal: Number(event.target.value),
            timeGoalStat: Number(event.target.value)
        });
    }

    function onChangeSub42(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal42({
            event: event.target.value,
            time: 0,
            timeGoal: subGoal42?.timeGoal,
            timeGoalStat: subGoal42?.timeGoal
        });
    }

    function onChangeTime42(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal42({
            event: subGoal42?.event,
            time: 0,
            timeGoal: Number(event.target.value),
            timeGoalStat: Number(event.target.value)
        });
    }

    function onChangeSub43(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal43({
            event: event.target.value,
            time: 0,
            timeGoal: subGoal43?.timeGoal,
            timeGoalStat: subGoal43?.timeGoal
        });
    }

    function onChangeTime43(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal43({
            event: subGoal43?.event,
            time: 0,
            timeGoal: Number(event.target.value),
            timeGoalStat: Number(event.target.value)
        });
    }

    useEffect(() => {
            if (props.goal1?.subGoals[0] && props.goal2?.subGoals[0] && props.goal3?.subGoals[0] && props.goal4?.subGoals[0]
                && props.goal1 && props.goal2 && props.goal3 && props.goal4) {
                console.log("Hallo, bin im IF");
                //props.setUserProfile({yourGoals: [props.goal1, props.goal2, props.goal3, props.goal4]})
                //const user1: User = props.userProfile;

                const listOfGoals: YourGoal[] = [props.goal1, props.goal2, props.goal3, props.goal4];
                console.log(listOfGoals[0]);


                axios({
                    method: 'post',
                    url: '/api/bestmi/postUser',
                    data: {

                        "yourGoals": listOfGoals


                    }
                }).then(() => {
                        nav("/updateProgress");
                    }
                );
                console.log(JSON.stringify(listOfGoals));
            }

        }
        ,
        [props.goal1, props.goal2, props.goal3, props.goal4]
    )


    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        props.setGoal1({
            id: "",
            description: props.goal1.description,
            subGoals: [subGoal11, subGoal12, subGoal13]
        });
        props.setGoal2({
            id: "",
            description: props.goal2.description,
            subGoals: [subGoal21, subGoal22, subGoal23]
        });
        props.setGoal3({
            id: "",
            description: props.goal3.description,
            subGoals: [subGoal31, subGoal32, subGoal33]
        });
        props.setGoal4({
            id: "",
            description: props.goal4.description,
            subGoals: [subGoal41, subGoal42, subGoal43]
        });


        //  nav("/updateProgress");
    }

    function cancel() {
        nav("/defineGoal");
    }


    return (


        <div>

            <div className={"imageContainer"}>
                <img src={"./triangle_logo.png"} alt={"here the logo should be"}/>
                <img src={"./triangle_logo.png"} alt={"here the logo should be"}/>
            </div>

            <div className={'container'}>


                <h1>What sub goals are necessary to reach your actual goals?</h1>
                <form onSubmit={submit}>
                    <div className={"allGoals"}>
                        <div className={"goal"}>
                            <h3>
                                {props.goal1?.description}
                            </h3>
                            <div className={"subgoal"}>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderSubGoals}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeSub11} required={true}></TextField>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderTime}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeTime11} required={true}></TextField>
                            </div>
                            <div className={"subgoal"}>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderSubGoals}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeSub12} required={true}></TextField>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderTime}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeTime12} required={true}></TextField>
                            </div>
                            <div className={"subgoal"}>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderSubGoals}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeSub13} required={true}></TextField>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderTime}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeTime13} required={true}></TextField>
                            </div>
                        </div>
                        <div className={"goal"}>
                            <h3>
                                {props.goal2?.description}
                            </h3>

                            <div className={"subgoal"}>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderSubGoals}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeSub21} required={true}></TextField>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderTime}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeTime21} required={true}></TextField>
                            </div>
                            <div className={"subgoal"}>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderSubGoals}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeSub22} required={true}></TextField>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderTime}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeTime22} required={true}></TextField>
                            </div>
                            <div className={"subgoal"}>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderSubGoals}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeSub23} required={true}></TextField>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderTime}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeTime23} required={true}></TextField>

                            </div>
                        </div>
                        <div className={"goal"}>
                            <h3>
                                {props.goal3?.description}
                            </h3>

                            <div className={"subgoal"}>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderSubGoals}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeSub31} required={true}></TextField>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderTime}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeTime31} required={true}></TextField>
                            </div>
                            <div className={"subgoal"}>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderSubGoals}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeSub32} required={true}></TextField>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderTime}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeTime32} required={true}></TextField>
                            </div>
                            <div className={"subgoal"}>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderSubGoals}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeSub33} required={true}></TextField>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderTime}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeTime33} required={true}></TextField>
                            </div>

                        </div>
                        <div className={"goal"}>
                            <h3>
                                {props.goal4?.description}
                            </h3>

                            <div className={"subgoal"}>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderSubGoals}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeSub41} required={true}></TextField>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderTime}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeTime41} required={true}></TextField>
                            </div>
                            <div className={"subgoal"}>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderSubGoals}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeSub42} required={true}></TextField>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderTime}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeTime42} required={true}></TextField>
                            </div>
                            <div className={"subgoal"}>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderSubGoals}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeSub43} required={true}></TextField>
                                <TextField style={{margin: 10}} className={"textSub"} placeholder={placeholderTime}
                                           variant={"standard"}
                                           color={"primary"} onChange={onChangeTime43} required={true}></TextField>
                            </div>
                        </div>
                    </div>


                    <div className={"buttons"}>
                        <Button type={"submit"} onClick={cancel}>Cancel</Button>
                        <Button type={"submit"}>Save sub-goals</Button>
                    </div>

                </form>
            </div>
        </div>

    );
}