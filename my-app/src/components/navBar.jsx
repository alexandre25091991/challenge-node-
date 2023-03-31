function NavBar ({image, imageSetter, incrementeur, setMyIncrementeur}){
    
    
    const handleClick = () => {
        setMyIncrementeur(incrementeur + 1)
        
        if(incrementeur >= image.length -1){
            alert('sorry bro')
            setMyIncrementeur(0)
        }
            
        
        
    }

    return (
        <>
    <nav className="nav">
        <button className="btnImg" onClick={handleClick}>Clique un peu</button>
    </nav>
    
    </>


    )
}


export default NavBar