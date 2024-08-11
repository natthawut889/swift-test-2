import { Input, Select, Space } from 'antd';
import React from 'react';

function InputField(props: any) {

  const {
    name,
    id,
    defaultValue,
    data,
    label,
    isRequired = false,
    onChange,
    width
  } = props;

  return (
    <Space.Compact>
      {isRequired ? (
          <div className='label'style={{ color: 'red'}}>
            * &nbsp;
          </div>
        ) : null}
        <div className='label'>

      {label} &nbsp;
        </div>
        <Input rootClassName={name} defaultValue={defaultValue}  style={{ width: width }} onChange={onChange} />
    </Space.Compact>
  );
}

export default InputField;
