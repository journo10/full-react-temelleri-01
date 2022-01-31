const OneComment = (props) => {
    //console.log(props)
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.img} alt="profile" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.description}</div>
      </div>
    </div>
  );
};
export default OneComment;
