function ProfilePic() {
    const imgpath = './src/assets/anime.jpg';
    const handleClick = (e) => e.target.style.display = "none";//when you click it hides the image
    return(
    <img src = {imgpath} onClick = {(e) => handleClick(e)}>

    </img>)
}

export default ProfilePic
//1:35

//1:40