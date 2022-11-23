import "../styles/card.scss";

export function Card({ ...props }) {
  return (
    <a className="card">
      <img className="cropped" {...props} />
    </a>
  );
}
