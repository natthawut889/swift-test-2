import { Input } from "antd";
import { useState } from "react";

const formatThaiID = (value: any) =>
{
    // Remove all non-digit characters
    const cleanValue = value.replace(/\D/g, '');

    // Format the cleaned value according to the pattern #-####-#####-##-#
    const formattedValue = cleanValue.replace(
        /(\d{1})(\d{4})(\d{5})(\d{2})(\d{1})/,
        '$1-$2-$3-$4-$5'
    );

    return formattedValue;
};

const InputIdCardField = (props: any) =>
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
        const newValue = e.target.value.replace(/\D/g, '');
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
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            {label} &nbsp;
                <Input
                    value={value.part1}
                    onChange={(e) => handleChange(e, 'part1')}
                    placeholder="0"
                    maxLength={1}
                    style={{ width: '150px' }}
                    name={name}
                />
                <div style={{ margin: '0 5px' }}>-</div>
                <Input
                    value={value.part2}
                    onChange={(e) => handleChange(e, 'part2')}
                    placeholder="0000"
                    maxLength={4}
                    style={{ width: '200px' }}
                    name={name}
                />
                <div style={{ margin: '0 5px' }}>-</div>
                <Input
                    value={value.part3}
                    onChange={(e) => handleChange(e, 'part3')}
                    placeholder="00000"
                    maxLength={5}
                    style={{ width: '200px' }}
                    name={name}
                />
                <div style={{ margin: '0 5px' }}>-</div>
                <Input
                    value={value.part4}
                    onChange={(e) => handleChange(e, 'part4')}
                    placeholder="00"
                    maxLength={2}
                    style={{ width: '170px' }}
                    name={name}
                />
                <div style={{ margin: '0 5px' }}>-</div>
                <Input
                    value={value.part5}
                    onChange={(e) => handleChange(e, 'part5')}
                    placeholder="0"
                    maxLength={1}
                    style={{ width: '150px' }}
                    name={name}
                />
            </div>
        </>
    );
};

export default InputIdCardField;