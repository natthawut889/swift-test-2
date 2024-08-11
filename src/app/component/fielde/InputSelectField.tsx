import { Select, Space } from 'antd';
import React from 'react';

function InputSelectField(props: any) {

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
        <Select style={{ width: width }} defaultValue={defaultValue} options={data} fieldNames={name} onChange={onChange} id={id} />
    </Space.Compact>
  );
}

export default InputSelectField;
