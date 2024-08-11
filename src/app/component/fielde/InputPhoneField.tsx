import { Input, Select, Space } from 'antd';
import React, { useState } from 'react';

function InputPhoneField(props: any)
{

    const [value, setValue] = useState({
        part1: '',
        part2: '',
        part3: '',
        part4: '',
        part5: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, part: 'part1' | 'part2' | 'part3' | 'part4' | 'part5') =>
    {
        let newValue = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        newValue = newValue.replace(/^0+/, ''); // Remove leading zeros
        setValue((prev) => ({ ...prev, [part]: newValue }));
    };

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
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Select style={{ width: width }} defaultValue={defaultValue} options={data} fieldNames={name} onChange={onChange} id={id} />
                <div style={{ margin: '0 5px' }}>-</div>
                <Input
                    value={value.part2}
                    onChange={(e) => handleChange(e, 'part2')}
                    placeholder="000000000"
                    maxLength={9}
                    style={{ width: '250px' }}
                    name={name}
                />
            </div>
        </Space.Compact>
    );
}

export default InputPhoneField;
