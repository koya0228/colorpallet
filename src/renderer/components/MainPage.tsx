import { useState } from 'react';
import 'destyle.css';

import SideMenu from './SideMenu';
import ColorCardPallet from './ColorCardPallet';

import '../css/main.css';

function MainPage() {
  const [palletId, setPalletId] = useState(null);
  return (
    <div className="ly_main">
      <div className="ly_leftContainer">
        <SideMenu setPalletId={setPalletId} />
      </div>
      <div className="ly_rightContainer">
        <ColorCardPallet palletId={palletId} />
      </div>
    </div>
  );
}

export default MainPage;
