import './CloseImage.css'; 

export function CloseImage(props) {
  return (
    <section className="close_image">
      <img src={props.src} alt="" />
    </section>
  );
}
