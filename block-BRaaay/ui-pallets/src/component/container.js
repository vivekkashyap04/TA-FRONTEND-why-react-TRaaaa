function Conatiner(props) {
  return (
    <div>
      <div>{props.name}</div>
      <ul>
        {props.allColors.map((color, i) => (
          <li>
            <div style={{ backgroundColor: color }}></div>
            <span>{i === 0 ? i : i * 100}</span>
            <span>{color}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Conatiner;
