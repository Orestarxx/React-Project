import React, {useState} from 'react';
import {ChevronClose as Icon} from "react-icons-animated";

import css from './controlerStyle.module.css'

const UserControler = () => {
  const [closed,setClosed] =  useState(true)
    return (
        < div className={css.dropDawn}>
             <button className={css.dropDownButton} onClick={() => setClosed(!closed)}>
                 <span>Join</span>
                 <Icon closed={!closed}/>
             </button>
            <div className={}></div>
        </div>
    );
};

export {UserControler};