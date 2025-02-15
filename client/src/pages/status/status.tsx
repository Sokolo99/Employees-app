import React from 'react';
import {Link, useParams} from "react-router-dom";
import {Button, Result, Row} from "antd";

const Statuses: Record<string, string> = {
    created: 'Пользователь успешно создан',
    updated: 'Пользователь успешно обновлен',
    deleted: 'Пользователь успешно удален'
}

function Status() {
    const {status} = useParams();

    return (
        <Row align={"middle"} justify={"center"} style={{width: '100%'}}>
            <Result
                status={status ? 'success' : 404}
                title={status ? Statuses[status] : 'Не найдено'}
                extra={
                    <Button key='dashboard'>
                        <Link to='/'>На главню</Link>
                    </Button>
                }
            />
        </Row>
    );
}

export default Status;