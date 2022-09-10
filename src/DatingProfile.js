function DatingProfile (props) {
    return (
        <div>
            <img src={props.img} alt="photo" width="200px"/>
            <h1>{props.name}</h1>
            <p>{props.age} years old</p>
            <p>{props.description}</p>
       </div>
    )
}

export default DatingProfile;