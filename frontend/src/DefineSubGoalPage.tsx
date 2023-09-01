import {TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
//import axios from "axios";
import {subGoal, User, yourGoal} from "./App.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";

type Props = {
    goal1: yourGoal | undefined,
    goal2: yourGoal | undefined,
    goal3: yourGoal | undefined,
    goal4: yourGoal | undefined,

    setGoal1: (goal1: yourGoal) => void;
    setGoal2: (goal2: yourGoal) => void;
    setGoal3: (goal3: yourGoal) => void;
    setGoal4: (goal4: yourGoal) => void;

    setUser: (user: User) => void;
    user: User|undefined;
}

export default function (props: Props) {

    const [subGoal11, setSubGoal11] = useState<subGoal>({event: undefined, timeGoal: undefined, time: undefined});
    const [subGoal12, setSubGoal12] = useState<subGoal>({event: undefined, timeGoal: undefined, time: undefined});
    const [subGoal13, setSubGoal13] = useState<subGoal>({event: undefined, timeGoal: undefined, time: undefined});
    const [subGoal21, setSubGoal21] = useState<subGoal>({event: undefined, timeGoal: undefined, time: undefined});
    const [subGoal22, setSubGoal22] = useState<subGoal>({event: undefined, timeGoal: undefined, time: undefined});
    const [subGoal23, setSubGoal23] = useState<subGoal>({event: undefined, timeGoal: undefined, time: undefined});
    const [subGoal31, setSubGoal31] = useState<subGoal>({event: undefined, timeGoal: undefined, time: undefined});
    const [subGoal32, setSubGoal32] = useState<subGoal>({event: undefined, timeGoal: undefined, time: undefined});
    const [subGoal33, setSubGoal33] = useState<subGoal>({event: undefined, timeGoal: undefined, time: undefined});
    const [subGoal41, setSubGoal41] = useState<subGoal>({event: undefined, timeGoal: undefined, time: undefined});
    const [subGoal42, setSubGoal42] = useState<subGoal>({event: undefined, timeGoal: undefined, time: undefined});
    const [subGoal43, setSubGoal43] = useState<subGoal>({event: undefined, timeGoal: undefined, time: undefined});
    //const [user, setUser] = useState<User>({yourGoals: []});

    const placeholderTime = "time needed in hours";
    const placeholderSubGoals = "define a sub goal";
    const nav = useNavigate();

    //const goals:string[];

    function onChangeSub11(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal11({event: event.target.value, time: undefined, timeGoal: subGoal11?.timeGoal});
    }

    function onChangeTime11(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal11({event: subGoal11?.event, time: undefined, timeGoal: Number(event.target.value)});
    }

    function onChangeSub12(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal12({event: event.target.value, time: undefined, timeGoal: subGoal12?.timeGoal});
    }

    function onChangeTime12(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal12({event: subGoal12?.event, time: undefined, timeGoal: Number(event.target.value)});
    }

    function onChangeSub13(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal13({event: event.target.value, time: undefined, timeGoal: subGoal13?.timeGoal});
    }

    function onChangeTime13(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal13({event: subGoal13?.event, time: undefined, timeGoal: Number(event.target.value)});
    }

    function onChangeSub21(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal21({event: event.target.value, time: undefined, timeGoal: subGoal21?.timeGoal});
    }

    function onChangeTime21(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal21({event: subGoal21?.event, time: undefined, timeGoal: Number(event.target.value)});
    }

    function onChangeSub22(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal22({event: event.target.value, time: undefined, timeGoal: subGoal22?.timeGoal});
    }

    function onChangeTime22(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal22({event: subGoal22?.event, time: undefined, timeGoal: Number(event.target.value)});
    }

    function onChangeSub23(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal23({event: event.target.value, time: undefined, timeGoal: subGoal23?.timeGoal});
    }

    function onChangeTime23(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal23({event: subGoal23?.event, time: undefined, timeGoal: Number(event.target.value)});
    }

    function onChangeSub31(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal31({event: event.target.value, time: undefined, timeGoal: subGoal31?.timeGoal});
    }

    function onChangeTime31(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal31({event: subGoal31?.event, time: undefined, timeGoal: Number(event.target.value)});
    }

    function onChangeSub32(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal32({event: event.target.value, time: undefined, timeGoal: subGoal32?.timeGoal});
    }

    function onChangeTime32(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal32({event: subGoal32?.event, time: undefined, timeGoal: Number(event.target.value)});
    }

    function onChangeSub33(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal33({event: event.target.value, time: undefined, timeGoal: subGoal33?.timeGoal});
    }

    function onChangeTime33(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal33({event: subGoal33?.event, time: undefined, timeGoal: Number(event.target.value)});
    }

    function onChangeSub41(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal41({event: event.target.value, time: undefined, timeGoal: subGoal41?.timeGoal});
    }

    function onChangeTime41(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal41({event: subGoal41?.event, time: undefined, timeGoal: Number(event.target.value)});
    }

    function onChangeSub42(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal42({event: event.target.value, time: undefined, timeGoal: subGoal42?.timeGoal});
    }

    function onChangeTime42(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal42({event: subGoal42?.event, time: undefined, timeGoal: Number(event.target.value)});
    }

    function onChangeSub43(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal43({event: event.target.value, time: undefined, timeGoal: subGoal43?.timeGoal});
    }

    function onChangeTime43(event: ChangeEvent<HTMLInputElement>) {
        setSubGoal43({event: subGoal43?.event, time: undefined, timeGoal: Number(event.target.value)});
    }

    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        props.setGoal1({
            id: undefined,
            description: props.goal1?.description,
            subGoals: [subGoal11, subGoal12, subGoal13]
        });
        props.setGoal2({
            id: undefined,
            description: props.goal1?.description,
            subGoals: [subGoal21, subGoal22, subGoal23]
        });
        props.setGoal3({
            id: undefined,
            description: props.goal1?.description,
            subGoals: [subGoal31, subGoal32, subGoal33]
        });
        props.setGoal4({
            id: undefined,
            description: props.goal1?.description,
            subGoals: [subGoal41, subGoal42, subGoal43]
        });



        if((props.goal1 && props.goal2 && props.goal3 && props.goal4)){
           props.setUser({yourGoals: [props.goal1, props.goal2, props.goal3, props.goal4]})
        }

        const user1:User|undefined = props.user;




        axios({
            method: 'post',
            url: '/api/bestmi/postUser',
            data: {

            user1
            }
        }).then(() => {
            nav("/updateProgress");
        });


      //  nav("/updateProgress");
    }



    return (

        <div>
            <h1>Wie erreichst du deine Ziele?</h1>
            <form onSubmit={submit}>
                <div className={"container"}>
                    <div className={"goals goal1"}>
                        <h3>
                            {props.goal1?.description}
                        </h3>
                        <div className={"subgoals"}>
                            <div className={"subgoal1"}>
                                <TextField placeholder={placeholderSubGoals} variant={"standard"}
                                           color={"primary"} onChange={onChangeSub11} required={true}></TextField>
                                <TextField placeholder={placeholderTime} variant={"standard"}
                                           color={"primary"} onChange={onChangeTime11} required={true}></TextField>
                            </div>
                            <div className={"subgoal2"}>
                                <TextField placeholder={placeholderSubGoals} variant={"standard"}
                                           color={"primary"} onChange={onChangeSub12} required={true}></TextField>
                                <TextField placeholder={placeholderTime} variant={"standard"}
                                           color={"primary"} onChange={onChangeTime12} required={true}></TextField>
                            </div>
                            <div className={"subgoal3"}>
                                <TextField placeholder={placeholderSubGoals} variant={"standard"}
                                           color={"primary"} onChange={onChangeSub13} required={true}></TextField>
                                <TextField placeholder={placeholderTime} variant={"standard"}
                                           color={"primary"} onChange={onChangeTime13} required={true}></TextField>
                            </div>
                        </div>
                    </div>
                    <div className={"goals goal2"}>
                        <h3>
                            {props.goal2?.description}
                        </h3>
                        <div className={"subgoals"}>
                            <div className={"subgoal1"}>
                                <TextField placeholder={placeholderSubGoals} variant={"standard"}
                                           color={"primary"} onChange={onChangeSub21} required={true}></TextField>
                                <TextField placeholder={placeholderTime} variant={"standard"}
                                           color={"primary"} onChange={onChangeTime21} required={true}></TextField>
                            </div>
                            <div className={"subgoal2"}>
                                <TextField placeholder={placeholderSubGoals} variant={"standard"}
                                           color={"primary"} onChange={onChangeSub22} required={true}></TextField>
                                <TextField placeholder={placeholderTime} variant={"standard"}
                                           color={"primary"} onChange={onChangeTime22} required={true}></TextField>
                            </div>
                            <div className={"subgoal3"}>
                                <TextField placeholder={placeholderSubGoals} variant={"standard"}
                                           color={"primary"} onChange={onChangeSub23} required={true}></TextField>
                                <TextField placeholder={placeholderTime} variant={"standard"}
                                           color={"primary"} onChange={onChangeTime23} required={true}></TextField>
                            </div>
                        </div>
                    </div>
                    <div className={"goals goal3"}>
                        <h3>
                            {props.goal3?.description}
                        </h3>
                        <div className={"subgoals"}>
                            <div className={"subgoal1"}>
                                <TextField placeholder={placeholderSubGoals} variant={"standard"}
                                           color={"primary"} onChange={onChangeSub31} required={true}></TextField>
                                <TextField placeholder={placeholderTime} variant={"standard"}
                                           color={"primary"} onChange={onChangeTime31} required={true}></TextField>
                            </div>
                            <div className={"subgoal2"}>
                                <TextField placeholder={placeholderSubGoals} variant={"standard"}
                                           color={"primary"} onChange={onChangeSub32} required={true}></TextField>
                                <TextField placeholder={placeholderTime} variant={"standard"}
                                           color={"primary"} onChange={onChangeTime32} required={true}></TextField>
                            </div>
                            <div className={"subgoal3"}>
                                <TextField placeholder={placeholderSubGoals} variant={"standard"}
                                           color={"primary"} onChange={onChangeSub33} required={true}></TextField>
                                <TextField placeholder={placeholderTime} variant={"standard"}
                                           color={"primary"} onChange={onChangeTime33} required={true}></TextField>
                            </div>
                        </div>
                    </div>
                    <div className={"goals goal4"}>
                        <h3>
                            {props.goal4?.description}
                        </h3>
                        <div className={"subgoals"}>
                            <div className={"subgoal1"}>
                                <TextField placeholder={placeholderSubGoals} variant={"standard"}
                                           color={"primary"} onChange={onChangeSub41} required={true}></TextField>
                                <TextField placeholder={placeholderTime} variant={"standard"}
                                           color={"primary"} onChange={onChangeTime41} required={true}></TextField>
                            </div>
                            <div className={"subgoal2"}>
                                <TextField placeholder={placeholderSubGoals} variant={"standard"}
                                           color={"primary"} onChange={onChangeSub42} required={true}></TextField>
                                <TextField placeholder={placeholderTime} variant={"standard"}
                                           color={"primary"} onChange={onChangeTime42} required={true}></TextField>
                            </div>
                            <div className={"subgoal3"}>
                                <TextField placeholder={placeholderSubGoals} variant={"standard"}
                                           color={"primary"} onChange={onChangeSub43} required={true}></TextField>
                                <TextField placeholder={placeholderTime} variant={"standard"}
                                           color={"primary"} onChange={onChangeTime43} required={true}></TextField>
                            </div>
                        </div>
                    </div>
                </div>

                <button className={"save-sub-goals"}>Save sub-goals</button>
            </form>
        </div>

    );
}