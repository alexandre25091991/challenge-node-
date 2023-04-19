function actuCards(props) {
  return (
    <>
    <div className="actu-container">
      <a
        href={props.link}
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.title}
      </a>
      <h3 className="date"> {props.date}</h3>
      <img
        src={props.imageSrc}
        alt="image"
        className="image"
        //width="100%"
        //height="100%"
      />
    </div>
    </>
  );
}

export default actuCards;
