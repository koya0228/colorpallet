import { useEffect, useState } from 'react';
import ColorCard from './ColorCard';

import '../css/colorCardPallet.css';

function ColorCardPallet({ palletId }) {
  const [palletName, setPalletName] = useState();
  const [colorCardList, setColorCardList] = useState([]);

  useEffect(() => {
    if (palletId) {
      const tempPalletData = window.electron.palletsStore.get(
        `pallets.${palletId}`,
      );
      setPalletName(tempPalletData.name);

      const colorsData = tempPalletData.colors;
      let colorsDataKeys = [];
      if (colorsData) {
        colorsDataKeys = Object.keys(colorsData);
      }

      let colorsDataNum = 0;
      if (colorsData) {
        colorsDataNum = colorsDataKeys.length;
      }

      const tempColorCardList = [];
      for (let i = 0; i < colorsDataNum; i += 1) {
        tempColorCardList.push(
          <ColorCard colorInfo={colorsData[colorsDataKeys[i]]} />,
        );
      }
      setColorCardList(tempColorCardList);
    }
  }, [palletId]);

  return (
    <div className="bl_colorPallet">
      <p className="bl_colorPallet_ttl">{palletName}</p>
      <button type="button" className="bl_colorPallet_newColor js_addNewColor">
        add new color
      </button>
      <div className="bl_colorPallet_body">{colorCardList}</div>
    </div>
  );
}

export default ColorCardPallet;
