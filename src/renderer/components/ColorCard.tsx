import '../css/colorCard.css';

function ColorCard({ colorInfo }) {
  return (
    <div className="bl_colorCard_wrapper">
      <div className="bl_colorCard">
        <div className="bl_colorCard_colorView">
          <span
            className="bl_colorCard_colorView_inner"
            style={{ background: colorInfo.color }}
          />
        </div>
        <div className="bl_colorCard_body">
          <p className="bl_colorCard_ttl">{colorInfo.name}</p>
          <p className="bl_colorCard_colorcode">{colorInfo.color}</p>
        </div>
      </div>
    </div>
  );
}

export default ColorCard;
