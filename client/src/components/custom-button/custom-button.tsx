import React from 'react';
import {Button, Form} from 'antd';
import styles from './custom-button.module.css'

type Props = {
    children: React.ReactNode;
    htmlType?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: () => void;
    type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
    danger?: boolean;
    loading?: boolean;
    shape?: "default" | "circle" | "round" | undefined;
    icon?: React.ReactNode;
    ghost?: boolean;
}

function CustomButton({children, htmlType = 'button', type, danger, loading, shape, icon, onClick, ghost}: Props) {
    return (
        <Form.Item>
            <Button className={styles['custom-button']}
                htmlType={htmlType}
                type={type}
                danger={danger}
                loading={loading}
                shape={shape}
                icon={icon}
                onClick={onClick}
                ghost={ghost}
            >{children}</Button>
        </Form.Item>
    );
}

export default CustomButton;