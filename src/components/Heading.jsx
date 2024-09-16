function Heading(props){
    const { titleContent, userName} = props;
    return <h2> {props.titleContent}{props.userName}</h2>;
  }
  export default Heading;