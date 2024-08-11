import { Radio, Select, Space } from 'antd';
import React from 'react';

function InputRadioField(props: any)
{

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
        <div className='label' style={{ color: 'red' }}>
          * &nbsp;
        </div>
      ) : null}
      <div className='label'>

        {label} &nbsp;
      </div>
      <Radio.Group name={name} defaultValue={null}>
        <Radio value={1}>Male</Radio>
        <Radio value={2}>Female</Radio>
        <Radio value={3}>Unsex</Radio>
      </Radio.Group>
    </Space.Compact>
  );
}

export default InputRadioField;
