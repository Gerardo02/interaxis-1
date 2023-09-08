import { useEffect, useState } from 'react'
import { Form, Button, Input, Row, Col, Select } from 'antd'
import { useWatch, useForm } from 'antd/es/form/Form'


const Formulario = () =>{

    const [enableInputs, setEnableInputs] = useState(true)
    const [form] = useForm()
    const codigoPostal = useWatch("codigoPostal", form)

    useEffect(() => {
        if(codigoPostal != "") setEnableInputs(false)
        else setEnableInputs(true)
    
    }, [codigoPostal])

    return (
    <>
        <Form initialValues={{ codigoPostal: "" }} form={form} onFinish={(value) => console.log(value)}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={8}>
                    <Form.Item
                        name="codigoPostal"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Codigo postal es requerido"
                            },
                        ]}>
                        
                        <Input placeholder='Codigo Postal'  />
                    </Form.Item>
                    
                </Col>
                <Col span={8}>
                    <Form.Item 
                        name="estado"
                        hasFeedback
                        rules={[
                            {
                                required: false,
                            },
                        ]}>
                        <Input placeholder='Estado' disabled={enableInputs} />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item 
                        name="municipio"
                        hasFeedback
                        rules={[
                            {
                                required:false
                            },
                        ]}>
                        <Input placeholder='Municipio' disabled={enableInputs} />
                    </Form.Item>
                </Col>
            </Row>
                
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={8}>
                    <Form.Item 
                        name="colonia"
                        hasFeedback
                        rules={[
                            {
                                required: false,
                            },
                        ]}>
                        <Select placeholder='Colonia'>
                            <Select.Option value="Puente Real">
                                Puente Real
                            </Select.Option>

                            <Select.Option value="Prados de la laguna">
                                Prados de la laguna
                            </Select.Option>
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item 
                        name="calle"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Calle requerida"
                            },
                        ]}>
                        <Input placeholder='Calle' />
                    </Form.Item>
                </Col>

                <Col span={4}>
                    <Form.Item 
                        name="numeroExterior"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Numero exterior requerido"
                            },
                        ]}>
                        <Input placeholder='Numero Exterior' />
                    </Form.Item>
                </Col>

                <Col span={4}>
                    <Form.Item 
                        name="numeroInterior"
                        hasFeedback
                        rules={[
                            {
                                required: false,
                            },
                        ]}>
                        <Input placeholder='Numero Interior' />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={8}>
                    <Form.Item 
                        name="referencias"
                        hasFeedback
                        rules={[
                            {
                                required: false,
                            },
                        ]}>
                        <Input placeholder='Referencias' />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={4} offset={16}>
                    <Form.Item 
                        name="cancelar"
                        hasFeedback
                        >
                        <Button block>
                            Cancelar
                        </Button>
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item 
                        name="agregar"
                        hasFeedback
                        >
                        <Button block type='primary' htmlType='submit'>
                            Agregar
                        </Button>
                    </Form.Item>
                </Col>
            </Row>

        </Form>
    </>)
}

export default Formulario