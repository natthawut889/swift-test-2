import React, { useState } from 'react';
import { Layout } from 'antd';
import LanguageSwitcher from './LanguageSwitch';

const { Header } = Layout;

export interface AppBarProps
{
    titleName: React.ReactNode;
}

const AppBar = (props: AppBarProps) =>
{
    const { titleName } = props;

    return (
        <Header className="app-bar">
            <div className="left-content">
                <h1>
                    {titleName}
                </h1>
            </div>
            <div className="right-content">
                <LanguageSwitcher />
            </div>
        </Header>
    );
};

export default AppBar;