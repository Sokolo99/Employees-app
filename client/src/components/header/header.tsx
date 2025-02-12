import React from 'react';
import styles from './header.module.css';
import {Layout, Space, Typography} from "antd";
import CustomButton from "../custom-button/custom-button";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../paths";
import {LoginOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../../features/auth/authSlice";

export const Header = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogoutClick = () => {
        dispatch(logout());
        localStorage.removeItem("token");
        navigate('/login');
    }

    return (
        <Layout.Header className={styles['header']}>
            <Space>
                <TeamOutlined className={styles['teamIcon']}/>
                <Link to={Paths.home}>
                    <CustomButton type='text' ghost>
                        <Typography.Title level={1}>Сотрудники</Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
            {
                user ? (
                    <CustomButton type='text' ghost icon={<LoginOutlined/>} onClick={onLogoutClick}>
                        Выйти
                    </CustomButton>
                ) : (
                    <Space>
                        <Link to={Paths.register}>
                            <CustomButton type='text' ghost icon={<UserOutlined/>}>Зарегистрироваться</CustomButton>
                        </Link>
                        <Link to={Paths.login}>
                            <CustomButton type='text' ghost icon={<LoginOutlined/>}>Войти</CustomButton>
                        </Link>
                    </Space>
                )
            }
        </Layout.Header>
    );
}

export default Header;