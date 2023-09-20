import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import './LoginPage.css';

type Props = {
    setUser: (user: string) => void
}

export default function LoginPage(props: Props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const nav = useNavigate();


    function onChangeUsername(event: ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }


    function login(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post("/api/users/login", undefined, {auth: {username, password}})
            .then((response) => props.setUser(response.data))
            .then(() => nav("/defineGoal"))
    }

    //Kein Unterscheid zweischen Button und Submitbutton, nur Submit-Button innerhalb des form-tags funktioniert
    //auch beim Enter drücken. Standardfunktion, wenn kein Attr ausgewählt, von Button ist auch ein Submit
    //man brauch dann aber ein Form zum Zuhören

    return (
        <div>

            <div className={"imageContainer"}>
                <img src={"./triangle_logo.png"} alt={"here the logo should be"}/>
                <img src={"./triangle_logo.png"} alt={"here the logo should be"}/>
            </div>

            <div className="wrapper">
                <div className="card1">
                    <form onSubmit={login} className={"login-container"}>
                        <div className={"login-header"}>
                            <h1>LOGIN</h1>
                        </div>
                        <div className={"login-input"}>
                            <div className={"input1"}>
                                <input type={"text"} id={username} placeholder={"Enter your username"} required={true}
                                       onChange={onChangeUsername} size={"30"}/>
                            </div>
                            <div className={"input2"}>
                                <input type={"password"} id={password} placeholder={"Enter your password"}
                                       required={true}
                                       onChange={onChangePassword} size={"30"}/>
                            </div>
                        </div>
                        <div className={"login-btn"}>
                            <button>LOGIN</button>
                        </div>
                    </form>
                    <Link className="direction-link" to={"/register"}>New here? REGISTER NOW</Link>
                </div>
            </div>
        </div>

    )


}