import React from 'react';
import {Alert} from "antd";

type Props = {
    message?: string;
}

function ErrorMessage({ message }: Props) {
    if(!message) {
        return null;
    }

    return <Alert message={message} type="error" />;
}

export default ErrorMessage;