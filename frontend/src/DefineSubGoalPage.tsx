

type Props = {
    goal1:string,
    goal2:string,
    goal3:string,
    goal4:string
}

export default function (props:Props){



    return(
        <div>
            <h1>Wie erreichst du deine Ziele?</h1>
            <div>
                <div>
                <h1>
                    {props.goal1}
                </h1>
                </div>
                <h1>
                    {props.goal2}
                </h1>
                <h1>
                    {props.goal3}
                </h1>
                <h1>
                    {props.goal4}
                </h1>
            </div>
        </div>

    );
}