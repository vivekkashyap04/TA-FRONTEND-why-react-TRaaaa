import Button from './Button';
function Footer() {
  return (
    <div className="flex">
      <h2>2020, ALl right reserved</h2>
      <div className="flex">
        <Button name="F" />
        <Button name="T" />
        <Button name="I" />
      </div>
    </div>
  );
}

export default Footer;