import React from 'react';
import {Employee} from "@prisma/client";
import {Card, Form, Space} from "antd";
import CustomInput from "../custom-input/custom-input";
import ErrorMessage from "../error-message/error-message";
import CustomButton from "../custom-button/custom-button";

type Props<T> = {
    onFinish: (value: T) => void;
    btnText: string;
    title: string;
    error?: string;
    employee?: T;
}

function EmployeeForm({onFinish, title, btnText, error, employee}: Props<Employee>) {
    return (
        <Card title={title} style={{width: '500px'}}>
            <Form name='employee-form' onFinish={onFinish} initialValues={employee}>
                <CustomInput type='text' name='firstName' placeholder='Имя'/>
                <CustomInput type='text' name='lastName' placeholder='Фамилия'/>
                <CustomInput type='number' name='age' placeholder='Возраст'/>
                <CustomInput type='text' name='adress' placeholder='Адрес'/>
                <Space>
                    <ErrorMessage message={error}/>
                    <CustomButton htmlType={'submit'}>
                        {btnText}
                    </CustomButton>
                </Space>
            </Form>
        </Card>
    );
}

export default EmployeeForm;