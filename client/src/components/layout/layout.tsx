import React from 'react';
import {Layout as AntLayout} from "antd";
import styles from './layout.module.css';
import Header from "../header/header";

type Props = {
    children: React.ReactNode;
}

export const Layout = ({children}: Props) => {
    return (
        <div className={styles['layout']}>
            <Header/>
            <AntLayout.Content style={{ height: '100%'}}>
                {children}
            </AntLayout.Content>
        </div>
    );
}

export default Layout;