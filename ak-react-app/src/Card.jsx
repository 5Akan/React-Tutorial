import ProfilePic from './assets/pro.png'

function Card(){
    return(
        <div className="card">
            <img className = "card-img" src = {ProfilePic} alt="profile-picture" />
            <h2 className = "card-title">Akanimoh</h2>
            <p className = "card-text">A student of computer Engineering and loves anime</p>

        </div>
    )
}

export default Card