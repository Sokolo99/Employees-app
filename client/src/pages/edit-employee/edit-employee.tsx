import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useEditEmployeeMutation, useGetEmployeeQuery} from "../../app/services/employees";
import {Row} from "antd";
import EmployeeForm from "../../components/employee-form/employee-form";
import {Employee} from "@prisma/client";
import {Paths} from "../../paths";
import {isErrorWithMessage} from "../../utils/is-error-with-message";
import Layout from "../../components/layout/layout";

function EditEmployee() {
    const navigate = useNavigate();
    const params = useParams<{ id: string }>();
    const [error, setError] = useState('');
    const {data, isLoading} = useGetEmployeeQuery(params.id || '');
    const [editEmployee] = useEditEmployeeMutation();

    if (isLoading) {
        return <span>Загрузка...</span>
    }

    const handleEditUser = async (employee: Employee) => {
        try {
            const editedEmployee = {
                ...data,
                ...employee
            };

            await editEmployee(editedEmployee).unwrap();

            navigate(`${Paths.status}/updated`);
        } catch (error) {
            const maybeError = isErrorWithMessage(error)

            if (maybeError) {
                setError(error.data.message);
            } else {
                setError('Неизвестная ошибка')
            }
        }
    }

    return (
        <Layout>
            <Row align="middle" justify="center">
                <EmployeeForm
                    title='Редактировать сотрудника'
                    btnText='Редактировать'
                    error={error}
                    employee={data}
                    onFinish={handleEditUser}
                />
            </Row>
        </Layout>
    );
}

export default EditEmployee;