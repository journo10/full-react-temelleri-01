import OneComment from "./OneComment";
import image1 from "./img/a.jpg";
import image2 from "./img/h.jpg";
import image3 from "./img/f.jpg";
import UserCard from "./UserCard";
import "./BlokPosts.css"

const App = () => {
  return (
    <div className="ui comments">
      <UserCard >
        <OneComment
          name="Ali"
          date={new Date().toLocaleTimeString()}
          description="Ben yakışıklı bir oyuncuyum."
          img={image1}
        />
      </UserCard>
      <UserCard>
        <OneComment
          name="Hazal"
          date={new Date().toLocaleTimeString()}
          description="Ben güzel bir oyuncuyum."
          img={image2}
        />
      </UserCard>
      <UserCard>
        <OneComment
          name="Feyyaz"
          date={new Date().toLocaleTimeString()}
          description="Ben komik bir oyuncuyum."
          img={image3}
        />
      </UserCard>
    </div>
  );
};

export default App;

//Props => Parent componentten child componente veri akışı sağlamak ve gelen veri ile child componenti özelleştirmektir...
//Burada Props olanlar name, date, description ve img
