

function UserCard(props) {
  //console.log(props)
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">Name:</div>
        <div className="description">{props.children}</div>
      </div>
      <div className="ui bottom button">
        <i className="add icon"></i>
        Ekle
      </div>
    </div>
  );
}
export default UserCard;
