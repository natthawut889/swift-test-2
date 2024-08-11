import React, { useState } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
// import { useTranslation } from 'react-i18next';
// import i18n from '@/app/i18n';

const LanguageSwitcher = () =>
{
    // const { t } = useTranslation('common');
    const [language, setLanguage] = useState('TH');

    const handleMenuClick = (e: any) =>
    {
        setLanguage(e.key);
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            {/* <Menu.Item key="en">{t('common:EN')}</Menu.Item>
            <Menu.Item key="th">{t('common:TH')}</Menu.Item> */}
            
            <Menu.Item key="en">{('common:EN')}</Menu.Item>
            <Menu.Item key="th">{('common:TH')}</Menu.Item>
        </Menu>
    );

    return (
        <div className="language-switcher">

            <Dropdown overlay={menu}>
                <Button>
                    {language === 'en' ? 'EN' : 'TH'} <DownOutlined />
                </Button>
            </Dropdown></div>
    );
};

export default LanguageSwitcher;
