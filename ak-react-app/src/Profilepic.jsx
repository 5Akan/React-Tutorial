function ProfilePic() {
    const imgpath = './src/assets/anime.jpg';
    const handleClick = (e) => e.target.style.display = "none";
    return(
    <img src = {imgpath} onClick = {(e) => handleClick(e)}>

    </img>)
}

export default ProfilePic