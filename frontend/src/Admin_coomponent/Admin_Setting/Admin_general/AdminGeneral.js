import React,{useState} from 'react'
import './AdminGeneral.css'
import Noti from '../../../assets/NotificationRed.svg'
import AdminPermission from '../Admin_Permission/AdminPermission';
import AdNotification from '../Admin_Notification/AdNotification';
import AdGeneral from '../ADGeneral/AdGeneral';

export default function AdminGeneral() {
    
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  


  return (
    <>
    <div className="AdminGeneral">
        <div className="AD_GEN_head">
            <span>Setting</span>
  <img src={Noti} alt="" />
        </div>
        <div className="AD_GEN_bor">
            <div className="AD_gen_left">
                <div className="AD_button">
            <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          General
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
        Manage Permission
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
         Notification
        </button>
        </div>
            </div>
      <hr />
            <div className="AD_gen_right">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                <AdGeneral/>
                </div>
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                <AdminPermission/>
                </div>
                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                <AdNotification/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
