import "./banner.scss";

const Banner = ({
  name,
  bg,
  color,
  url,
  price,
  items,
  title,
  desc,
  btnStyle,
}) => {
  let itemsData = items?.map((el) => <li key={el}>{el}</li>);
  return (
    <section className="banners container">
      <div style={{ background: bg, color: color }} className="banner">
        <h1 className="banner__name">{name}</h1>
        <ul className="banner__items">{itemsData}</ul>
        <img style={{display:url}} className="banner__img" src={url} alt="" />
        <div className="banner__info">
          <h2 className="banner__title">{title}</h2>
          <p className="banner__desc">{desc}</p>
          <button style={btnStyle}>Buy now</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
