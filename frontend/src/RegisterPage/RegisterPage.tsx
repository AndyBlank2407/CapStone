import {ChangeEvent, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function RegisterPage() {

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const nav = useNavigate();

    function onChangeRegistrationName(event:ChangeEvent<HTMLInputElement>){
        setUsername(event.target.value);
    }

    function onChangeRegistrationPassword(event:ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value);
    }

    function register(){
        axios.post("/api/users", {username, password})
            .then(() => nav("/"));
    }



    return (
        <div>
            <form onSubmit={register}>
                <h1>
                    Register
                </h1>
                <input type={"text"} placeholder={"type in your name"} onChange={onChangeRegistrationName}
                required={true}/>
                <input type={"text"} placeholder={"setup a password"} onChange={onChangeRegistrationPassword}
                required={true}/>
                <button type={"submit"}>REGISTER</button>



            </form>
            <Link to={"/"}>sign in</Link>
        </div>
    )


}