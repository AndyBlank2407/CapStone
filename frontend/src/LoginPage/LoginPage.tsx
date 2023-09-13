import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

type Props = {
    setUser : (user:string) => void
}

export default function LoginPage(props:Props){

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");


    const nav = useNavigate();


    function onChangeUsername(event:ChangeEvent<HTMLInputElement>){
    setUsername(event.target.value);
    }

    function onChangePassword(event:ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value);
    }


    function login(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        axios.post("/api/users/login", undefined, {auth:{username,password}})
            .then((response) => props.setUser(response.data))
            .then(() => nav("/defineGoal"))
    }

    //Kein Unterscheid zweischen Button und Submitbutton, nur Submit-Button innerhalb des form-tags funktioniert
    //auch beim Enter drücken. Standardfunktion, wenn kein Attr ausgewählt, von Button ist auch ein Submit
    //man brauch dann aber ein Form zum Zuhören

    return(
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={login}>
            <input type={"text"} placeholder={"please enter your username"}
            onChange={onChangeUsername} required={true}/>
            <input type={"text"} placeholder={"please enter your password"}
                   onChange={onChangePassword} required={true}/>
            <button>LOGIN</button>
            </form>
            <Link to={"/register"}>sign up</Link>

        </div>

    )


}