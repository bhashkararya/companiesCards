const Card = (props) => {
    return (
        <div   >

            <div className="card">
                <div className="top">
                    <img src={props.image} alt="" />
                    <button>Save</button>
                </div>

                <div className="center">
                    <h2>{props.name} <span>{props.datePosted}</span></h2>
                    <h3>{props.post}</h3>
                    <div>
                        <h4>{props.tag1}</h4>
                        <h4>{props.tag2}</h4>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <h3>{props.pay}</h3>
                        <p>{props.location}</p>
                    </div>
                    <button>Apply Now</button>
                </div>
            </div>

        </div>

    )
}

export default Card;