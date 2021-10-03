import Button from './Button';

function Header() {
  return (
    <div className="flex">
      <div>
        <Button name="Logo" />
      </div>
      <div className="flex">
        <Button name="Home" />
        <Button name="About" />
        <Button name="Contact" />
      </div>
    </div>
  );
}

export default Header;
