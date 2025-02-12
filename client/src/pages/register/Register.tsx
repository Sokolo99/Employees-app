import React from 'react';
import {Card, Form, Row, Space, Typography} from "antd";
import CustomInput from "../../components/custom-input/custom-input";
import PasswordInput from "../../components/password-input/password-input";
import CustomButton from "../../components/custom-button/custom-button";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";
import Layout from "../../components/layout/layout";

function Register() {
    return (
        <Layout>
            <Row align={"middle"} justify={"center"}>
                <Card title='Зарегистрируйтесь' style={{width: '600px'}}>
                    <Form onFinish={() => null}>
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
                            Уже зарегистрированы? <Link to={ Paths.login }>Войдите</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    );
}

export default Register;