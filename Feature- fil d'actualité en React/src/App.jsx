import "./App.css";
import ActuCards from "./components/actuCards";
import "./style.scss";

function App() {
  //state

  //tableau
  const actuList = [
    {
      id: "1",
      title: "Exploration Technologies Corporation Technologies ",
      link: "https://fr.wikipedia.org/wiki/SpaceX#:~:text=La%20soci%C3%A9t%C3%A9%20SpaceX%20con%C3%A7oit%2C%20construit,n'est%20plus%20en%20service.",
      date: "25/09/1992",
      imageSrc: "https://i.postimg.cc/wBsDCc5w/th.jpg",
    },
    {
      id: "2",
      title: "Exploration Technologies Corporation Technologies",
      link: "https://fr.wikipedia.org/wiki/National_Aeronautics_and_Space_Administration",
      date: "25/09/1991",
      imageSrc: "https://i.postimg.cc/wBsDCc5w/th.jpg",
    },
    {
      id: "3",
      title: "Exploration Technologies Corporation Technologies",
      link: "https://fr.wikipedia.org/wiki/Ariane_5",
      date: "25/09/1993",
      imageSrc: "https://i.postimg.cc/wBsDCc5w/th.jpg",
    },
  ];

  return (
    <>
      <div className="test">
        {actuList.map((actu) => (
          <ActuCards
            id={actu.id}
            title={actu.title}
            link={actu.link}
            date={actu.date}
            imageSrc={actu.imageSrc}
          />
        ))}
      </div>
    </>
  );
}

export default App;
