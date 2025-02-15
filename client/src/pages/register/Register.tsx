import React, {useState} from 'react';
import {Card, Form, Row, Space, Typography} from "antd";
import CustomInput from "../../components/custom-input/custom-input";
import PasswordInput from "../../components/password-input/password-input";
import CustomButton from "../../components/custom-button/custom-button";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../paths";
import Layout from "../../components/layout/layout";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/auth/authSlice";
import {useRegisterMutation} from "../../app/services/auth";
import {User} from "@prisma/client";
import {isErrorWithMessage} from "../../utils/is-error-with-message";
import ErrorMessage from "../../components/error-message/error-message";

type RegisterData = Omit<User, 'id'> & { confirmPassword: string };

function Register() {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [error, setError] = useState('');
    const [registerUser] = useRegisterMutation()

    const register = async (data: RegisterData) => {
        try {
            await registerUser(data).unwrap();

            navigate('/')
        } catch (error) {
            const maybeError = isErrorWithMessage(error)

            if (maybeError) {
                setError(error.data.message)
            } else {
                setError('Не известаня ошибка')
            }
        }
    }

    return (
        <Layout>
            <Row align={"middle"} justify={"center"}>
                <Card title='Зарегистрируйтесь' style={{width: '600px'}}>
                    <Form onFinish={register}>
                        <CustomInput name='name' placeholder='Name'/>
                        <CustomInput type='email' name='email' placeholder='Email'/>
                        <PasswordInput name='password' placeholder='Password'/>
                        <PasswordInput name='confirmPassword' placeholder='Repeat password'/>
                        <CustomButton type='primary' htmlType='submit'>
                            Зарегистрироваться
                        </CustomButton>
                    </Form>
                    <Space direction='vertical' size='large'>
                        <Typography.Text>
                            Уже зарегистрированы? <Link to={Paths.login}>Войдите</Link>
                        </Typography.Text>
                        <ErrorMessage message={error}/>
                    </Space>
                </Card>
            </Row>
        </Layout>
    );
}

export default Register;