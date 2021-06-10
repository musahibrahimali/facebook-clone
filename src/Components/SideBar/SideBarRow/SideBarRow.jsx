import React from 'react';
import { Avatar } from '@material-ui/core';
import './SideBarRow.css';

function SideBarRow(props) {
    const { src, Icon, title } = props;
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <h4>{title}</h4>
        </div>
    );
}

export default SideBarRow;
