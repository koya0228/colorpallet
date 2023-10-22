import { useRef, useState } from 'react';

import '../css/sideMenu.css';

function SideMenu({ setPalletId }) {
  const palletNameInputRef = useRef(null);

  const createNewPalletFormBtn = (
    <button type="button" onClick={createNewPalletForm}>
      add new pallet
    </button>
  );

  const [addPalletForm, setAddPalletForm] = useState<object>(
    createNewPalletFormBtn,
  );

  function createNewPalletForm() {
    setAddPalletForm(
      <>
        <input
          className="bl_sideMenu_addPallet_input"
          type="text"
          ref={palletNameInputRef}
        />
        <button type="button" onClick={addNewPallet}>
          add
        </button>
      </>,
    );
  }

  function addNewPallet() {
    const palletsData = window.electron.palletsStore.get('pallets');
    const palletsDataKeys = Object.keys(palletsData);
    const palletsDataLastNum = Number(
      palletsDataKeys[palletsDataKeys.length - 1],
    );

    if (palletNameInputRef.current) {
      window.electron.palletsStore.set(`pallets.${palletsDataLastNum + 1}`, {
        name: palletNameInputRef.current.value,
        colors: {},
      });
    }
    setAddPalletForm(createNewPalletFormBtn);
    setPalletId(palletsDataLastNum + 1);
  }

  const palletNameListElements = [];
  const palletsData = window.electron.palletsStore.get('pallets');
  const palletsDataKeys = Object.keys(palletsData);

  let palletDataNum = 0;
  if (palletsData) {
    palletDataNum = palletsDataKeys.length;
  }

  for (let i = 0; i < palletDataNum; i += 1) {
    const palletData = palletsData[palletsDataKeys[i]];
    const palletNameListItem = (
      <button type="button" onClick={() => setPalletId(palletsDataKeys[i])}>
        <p>{palletData.name}</p>
      </button>
    );
    palletNameListElements.push(palletNameListItem);
  }

  return (
    <div className="bl_sideMenu">
      <div className="bl_sideMenu_header">三 header</div>
      <div className="bl_sideMenu_main">{palletNameListElements}</div>
      <div className="bl_sideMenu_footer">
        <div className="bl_sideMenu_addPallet_form">{addPalletForm}</div>
        <p>s setting</p>
      </div>
    </div>
  );
}

export default SideMenu;
