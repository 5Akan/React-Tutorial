import ProfilePic from './assets/pro.png'

function Card(){
    return(
        <div className="card">
            <img src = {ProfilePic} alt="profile-picture" />
            <h2>Akanimoh</h2>
            <p>A student of computer Engineering and love anime</p>

        </div>
    )
}

export default Card