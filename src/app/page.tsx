'use client'
import { useState } from "react";
import GradientBackground from "./component/GradientBackground";
import AppBar from "./component/AppBar";
import BoxWrapperPageContent from "./component/BoxWrapperPageContent";
import { Button, Checkbox, Col, Flex, Form, Popconfirm, Row, Table, TableProps } from "antd";
import InputSelectField from "./component/fielde/InputSelectField";
import InputField from "./component/fielde/InputField";
import InputDatePickerField from "./component/fielde/InputDatePickerField";
import InputIdCardField from "./component/fielde/InputIdCardField";
import InputRadioField from "./component/fielde/InputRadioField";
import InputPhoneField from "./component/fielde/InputPhoneField";
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// import { useTranslation } from "next-i18next";

type TablePagination<T extends object> = NonNullable<Exclude<TableProps<T>['pagination'], boolean>>;
type TablePaginationPosition = NonNullable<TablePagination<any>['position']>[number];

const optionPhone = [
  {
    value: '0',
    label: '+66',
  },
  {
    value: '1',
    label: '+697',
  },
  {
    value: '2',
    label: '+698',
  }
];

const optionNationality = [
  {
    value: 'ไทย',
    label: 'ไทย',
  },
  {
    value: 'ลาว',
    label: 'ลาว',
  }
];

const optionPrefix = [
  {
    value: 'นาย',
    label: 'นาย',
  },
  {
    value: 'นาง',
    label: 'นาง',
  },
  {
    value: 'นางสาว',
    label: 'นางสาว',
  }
];

interface DataType
{
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default function Home()
{

  // const { t } = useTranslation('common')
  
  const [checkedList, setCheckedList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const options = [
    { label: 'Delete All', value: '1' },
    // { label: 'Option 2', value: '2' },
    // { label: 'Option 3', value: '3' }
  ];

  const [dataSource2, setDataSource] = useState<DataType[]>([
    {
      key: '0',
      name: 'Edward King 0',
      age: 32,
      address: 'London, Park Lane no. 0',
    },
    {
      key: '1',
      name: 'Edward King 1',
      age: 35,
      address: 'London, Park Lane no. 1',
    },
  ]);

  const handleDelete = (key: React.Key) =>
  {
    const newData = dataSource2.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name', sorter: (a: any, b: any) => a.age - b.age },
    { title: 'Gender', dataIndex: 'age', key: 'age', sorter: (a: any, b: any) => a.age - b.age },
    { title: 'Mobile Phone', dataIndex: 'address', key: 'address', sorter: (a: any, b: any) => a.age - b.age },
    { title: 'Nationality', dataIndex: 'address', key: 'address', sorter: (a: any, b: any) => a.age - b.age },
    {
      title: 'MANAGE', dataIndex: 'address', key: 'address', render: (_: any, record: any) =>
        dataSource2.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: any) =>
    {
      setSelectedRowKeys(selectedRowKeys);
      setCheckedList(selectedRowKeys);
    },
  };

  const handleCheckboxGroupChange = (value: any) =>
  {
    setCheckedList(value);
    setSelectedRowKeys(value);
  };

  const start = () =>
  {
    setLoading(true);
    // Perform the delete operation here
    // ...
    setLoading(false);
  };

  const [top, setTop] = useState<TablePaginationPosition>('topRight');

  return (
    <>
      <GradientBackground>
        {/* <AppBar titleName={('common:Form & Table')} /> */}
        <AppBar titleName={('common:form_table')} />
        <BoxWrapperPageContent>
          <Form
            layout="vertical"
            onFinish={(values: any) => console.log(values)}
          >
            <Row gutter={16} style={{ marginBottom: '20px' }}>
              <Col span={4}>
                <InputSelectField name={'title'} label={"Title :"} isRequired data={optionPrefix} width={'120px'} />
              </Col>
              <Col span={10}>
                <InputField name={'firsName'} label={"Firstname :"} isRequired width={'350px'} />
              </Col>
              <Col span={10}>
                <InputField name={'lastName'} label={"Lastname :"} isRequired width={'350px'} />
              </Col>
            </Row>

            <Row gutter={16} style={{ marginBottom: '20px' }}>
              <Col span={6}>
                <InputDatePickerField name={'birthday'} label={"Birthday :"} isRequired width={'180px'} />
              </Col>
              <Col span={10}>
                <InputSelectField name={'nationality'} label={"Nationality :"} isRequired data={optionNationality} width={'400px'} />
              </Col>
            </Row>

            <Row gutter={16} style={{ marginBottom: '20px' }}>
              <Col span={24}>
                <InputIdCardField name={'citizenId'} label={'CitizenID :'} />
              </Col>
            </Row>

            <Row gutter={16} style={{ marginBottom: '20px' }}>
              <Col span={24}>
                <InputRadioField name={'sex'} label={'Gender :'} isRequired defaultValue={null} />
              </Col>
            </Row>

            <Row gutter={16} style={{ marginBottom: '20px' }}>
              <Col span={24}>
                <InputPhoneField name={'mobilePhone'} label={"Mobile Phone :"} isRequired data={optionPhone} width={'200px'} />
              </Col>
            </Row>

            <Row gutter={16} style={{ marginBottom: '20px' }}>
              <Col span={24}>
                <InputField name={'passportNo'} label={"Passport No :"} width={'350px'} />
              </Col>
            </Row>
            <Row gutter={16} style={{ marginBottom: '20px' }}>
              <Col span={12}>
                <InputField name={'expectedSalary'} label={"Expected Salary :"} width={'330px'} />
              </Col>
              <Col span={6}>
                <Button>RESET</Button>
              </Col>
              <Col span={6}>
                <Button htmlType="submit">SUBMIT</Button>
              </Col>
            </Row>
          </Form>
        </BoxWrapperPageContent>
        <div className="box-table">
          <Flex gap="middle" vertical>
            <Flex align="center" gap="middle">
              <Checkbox.Group
                value={checkedList}
                options={options}
                onChange={handleCheckboxGroupChange}
              />
              <Button onClick={start} loading={loading}>
                DELETE
              </Button>
            </Flex>
            <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource2} pagination={{
              position: [top], itemRender: (current: any, type: string, originalElement: any) => 
              {
                if (type === 'prev') {
                  return <a>PREV</a>;
                }
                if (type === 'next') {
                  return <a>NEXT</a>;
                }
                return originalElement;
              }
            }} />
          </Flex>
        </div>

      </GradientBackground>
    </>
  );
}

// export async function getStaticProps({ locale }: any) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, [
//         'common',
//         'footer',
//       ])),
//     },
//   }
// }
