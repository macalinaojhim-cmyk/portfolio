export default function Marquee({ items }) {
  const renderGroup = (key) => (
    <div className="marquee-group" key={key}>
      {items.map((item, i) => (
        <span key={item + i}>
          {item}
          <span className="sep"> ✦ </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {renderGroup("a")}
        {renderGroup("b")}
      </div>
    </div>
  );
}
