import { DatePicker, Input, Select, Space } from 'antd';
import React from 'react';

function InputDatePickerField(props: any) {

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
        
    <DatePicker name={name} defaultValue={defaultValue} onChange={onChange} style={{ width: width }} />
    </Space.Compact>
  );
}

export default InputDatePickerField;
