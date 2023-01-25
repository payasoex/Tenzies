import React from "react";

export default function Time() {

    const [time, setTime] = React.useState({h:0, m:0, s:0});
    const [referenceTime, setReferenceTime] = React.useState(Date.now())

    console.log(referenceTime)

//    React.useEffect(
//     () => {
//         setTime(oldTime => )
//     }, []
//    )

    return (
        <h3>{`${time.h} : ${time.m} : ${time.s}`}</h3>
    )
};