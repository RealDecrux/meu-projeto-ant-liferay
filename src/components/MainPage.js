// src/components/MainPage.js  
import React, { useState } from 'react';  
import { Layout, Menu, Button, List, Row, Col, Form, Input, Select, Radio } from 'antd';  
import { UserAddOutlined } from '@ant-design/icons';  

import icone1 from './imagens/icone1.png';
import icone2 from './imagens/icone2.png';
import icone3 from './imagens/icone3.png';
import icone4 from './imagens/icone4.png';
import icone5 from './imagens/icone5.png';
import icone6 from './imagens/icone6.png';
import icone7 from './imagens/icone7.png';
import icone8 from './imagens/icone8.png';


const { Header, Sider, Content } = Layout;  
const { Option } = Select;  

const icones = [icone7];




const data = [  
    { name: "Daniel Alves da Silva", status: "Ativo", cargo: "Cargo 1", cpf: "000.000.000-00" },  
    { name: "Giselle Torres Lopes", status: "Inativo", cargo: "Cargo 2", cpf: "000.000.000-00" },  
    { name: "Ana Bispo dos Santos", status: "Ativo", cargo: "Cargo 3", cpf: "000.000.000-00" },  
    { name: "Regina Elisa Souza", status: "Ativo", cargo: "Cargo 3", cpf: "000.000.000-00" },  
];  

const MainPage = () => {  
    const [completedItems, setCompletedItems] = useState(Array(9).fill(false));  
    const [showForm, setShowForm] = useState(false);  
    const [showActive, setShowActive] = useState(false); // Estado para controlar o filtro "Ativos"  
    const [form] = Form.useForm();  

    const handleShowForm = () => {  
        setShowForm(true);  
    };  

    const handleSave = () => {  
        form.validateFields()  
            .then(values => {  
                console.log('Form Values:', values);  
                form.resetFields();  
                setShowForm(false);  
            })  
            .catch(info => {  
                console.log('Validate Failed:', info);  
            });  
    };  

    const handleNextStep = () => {  
        const allConditionsMet = true;  
        if (allConditionsMet) {  
            setCompletedItems(prev => prev.map(() => true));  
        }  
    };  

    // Filtra a lista de dados com base no estado showActive
    const filteredData = showActive ? data.filter(item => item.status === 'Ativo') : data;
    


    return (  
        <Layout style={{ minHeight: '300vh'}}>  
        
        <Sider   
            width={80}  
            style={{  
                backgroundColor: '#689cbc', // Cor de fundo do Sider  
                borderRight: '1px solid #689cbc', // Cor da borda  
                borderRadius: '0 35px 35px 0', // Arredondamento das bordas  
                height: '768px', // Ocupa toda a altura da tela  
                display: 'flex',  
                flexDirection: 'column',  
                justifyContent: 'space-between',  
            }}  
        >  
            <div   
                className="logo"   
                style={{  
                    textAlign: 'center',  
                    padding: '50px', // Ajuste de padding para harmonizar com o novo design  
                    fontSize: '14px',  
                    color: '#333',  
                }}  
            >  
                {/* Adicione logo aqui, se necessário */}  
            </div>  

            <Menu   
                mode="inline"  
                style={{
                    backgroundColor: 'transparent', // Torna o fundo do menu transparente  
                    borderRight: 'none', // Remove a borda direita  
                    width: '70px', // Largura desejada para o background
                    paddingTop: '20px',  // Distância superior do menu  
                    display: 'flex', // Faz o Menu ser um flex container  
                    flexDirection: 'column', // Organiza os itens em coluna  
                    alignItems: 'center', // Centraliza os itens horizontalmente  
                    gap: '30px', // Espaçamento entre os ícones  
                    borderLeft: '1px solid #689cbc', // Borda esquerda com 1px
                }} 
                selectedKeys={['1', '2', '3', '4', '5', '6']} // Itens selecionados  
            >  
                <Menu.Item key="1" icon={<img src={icone4} alt="Home" style={{ width: '25px', height: '25px' }} />} />  
                <Menu.Item key="2" icon={<img src={icone1} alt="Home" style={{ width: '25px', height: '25px' }} />} />  
                <Menu.Item key="3" icon={<img src={icone3} alt="Home" style={{ width: '25px', height: '25px' }} />} />  
                <Menu.Item key="4" icon={<img src={icone5} alt="Home" style={{ width: '25px', height: '25px' }} />} />  
                <Menu.Item key="5" icon={<img src={icone2} alt="Home" style={{ width: '25px', height: '25px' }} />} />  
                <Menu.Item key="6" icon={<img src={icone6} alt="Home" style={{ width: '25px', height: '25px' }} />} />  
            </Menu>

        </Sider>  


            <Layout>  
                <Header style={{
                    backgroundColor: '#ffffff', 
                    borderBottom: '1px solid #e0e0e0',
                    display: 'flex',
                    justifyContent: 'center',   // Centraliza horizontalmente
                    alignItems: 'center',       // Centraliza verticalmente
                    height: '100px',             // Ajusta a altura do header para algo mais compacto
                    marginBottom: '30px',       // Mantém o espaçamento abaixo do header
                    borderRadius: '10px',       // Diminui o tamanho das bordas
                    width: '98%',               // Ajusta a largura do header, para não ocupar toda a largura
                    margin: '0 auto'            // Centraliza o header horizontalmente
                }}>  
                    <Row justify="center" style={{ width: '100%', height: '7em' }}>
                        <Col>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    overflowX: 'auto',
                                    width: '100%',
                                    justifyContent: 'center',
                                    
                                }}
                            >
                                {[...Array(9)].map((_, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            margin: '15px 40px 40px',
                                        }}
                                    >
                                        {/* Usando o icone7 para todos os itens */}
                                        <img  
                                            src={icone7} // Usando o icone7 para todos os itens  
                                            alt={`icone${index + 1}`} // Usando template literal para a string de alt  
                                            style={{  
                                                width: '45px', // Ajuste de tamanho do ícone  
                                                height: '45px',  
                                                background: '#689cbc',  
                                                borderRadius: '25%', // Borda arredondada, pode-se usar '50%' para círculo perfeito  
                                                padding: '10px', // Espaçamento interno  
                                                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', // Sombras  
                                            }}  
                                        /> 
                                        {/* Ajustando a distância entre o ícone e o texto */}
                                        <div style={{ marginBlock: '-18px' }}>Item {index + 1}</div>
                                        {completedItems[index] && (
                                            <div style={{ height: '5px', color: 'black' }}>Concluído</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Header>  
                <Content style={{ padding: '20px' }}>  {/* Removendo a cor de fundo */}
                    <Row gutter={24}>
                    <Col span={8}>
                        <div style={{
                            backgroundColor: '#fff',
                            padding: '6px 0px 460px 30px',
                            borderRadius: '8px',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                        }}>
                            <h3>Descrição</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit suscipit porttitor. Suspendisse ex lorem, rhoncus nec ante eu, venenatis aliquam turpis. Nulla facilisi. Curabitur nec mattis dolor. Nulla finibus bibendum ligula tempus vehicula. Ut at tristique libero, nec efficitur dui. Aliquam erat volutpat. Fusce quam sem, tempus nec justo eget, luctus scelerisque velit. Nam sollicitudin purus urna, vitae ornare neque tincidunt vel. Proin ac lacinia erat, et commodo felis. Phasellus tempor tellus eu vulputate tempus.</p>

                            {/* Ícone adicionado abaixo do texto */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-start', // Alinha o ícone à esquerda
                                marginTop: '20px', // Espaçamento superior entre o texto e o ícone
                            }}>
                                <img src={icone8} alt="Home" style={{ width: '30%' }} />
                            </div>
                        </div>
                    </Col>
                        <Col span={16}>
                            <div style={{
                                padding: '80px',
                                background: '#ffffff',
                                borderRadius: '8px',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                            }}>
                                <h2 style={{ colorScheme:'#689cbc',arginBottom: '20px', color: '#1890ff' }}>Funcionário(s)</h2>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '20px'
                                }}>
                                    <Button onClick={handleShowForm} style={{ background: '#fffff', borderColor: '#689cbc' }}><UserAddOutlined style={{ background: '#fffff', borderColor: '#fffff' }}/> + Adicionar Funcionário</Button>
                                    <Button
                                        style={{ background: '#fffff', borderColor: '#fffff' }}
                                        onClick={() => setShowActive(prev => !prev)} // Alterna entre mostrar ou não os ativos
                                    >
                                        Ver apenas {showActive ? 'todos' : 'ativos'}
                                    </Button>
                                </div>
                                {showForm ? (
                                    <div style={{  
                                        marginTop: '20px',  
                                        padding: '2px',  
                                        borderRadius: '8px',  
                                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Sombra para dar profundidade  
                                        backgroundColor: '#f9f9f9' // Cor de fundo leve para destacar o cabeçalho  
                                    }}>
                                        <h3 style={{  
                                            backgroundColor: '#ffffff', // Fundo do título  
                                            color: '#689cbc', // Cor do texto  
                                            margin: '0', // Remove a margem padrão  
                                            padding: '10px 15px', // Espaçamento interno  
                                            borderRadius: '8px', // Bordas arredondadas do título  
                                            textAlign: 'center' // Alinha o texto ao centro  
                                        }}>  
                                            Adicionar Funcionário  
                                        </h3> 
                                        <Form form={form} layout="vertical" >
                                            <Form.Item label="O trabalhador está ativo ou inativo?" name="status" 
                                                                style={{ 
                                                                    border: '1px solid #689cbc',  // Cor da borda
                                                                    padding: '20px',  // Espaçamento interno
                                                                    borderRadius: '8px',  // Bordas arredondadas
                                                                    boxShadow: '0 1px 3px #689cbc',  // Sombra sutil para dar destaque
                                                                    marginBottom: '10px' // Espaçamento de 5px entre os formulários
                                                                    }}>
                                                <Radio.Group >
                                                    <Radio value="ativo">Ativo</Radio>
                                                    <Radio value="inativo">Inativo</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </Form>
                                        <Form form={form} layout="vertical" 
                                                                style={{ 
                                                                    border: '1px solid #689cbc',  // Cor da borda
                                                                    padding: '20px',  // Espaçamento interno
                                                                    borderRadius: '8px',  // Bordas arredondadas
                                                                    boxShadow: '0 1px 3px #689cbc',  // Sombra sutil para dar destaque
                                                                    marginBottom: '10px' // Espaçamento de 5px entre os formulários
                                                                    }}>
                                            <Form.Item label="Nome" name="name" rules={[{ required: true, message: 'Por favor, insira o nome!' }]}>
                                                <Input placeholder="Nome" />
                                            </Form.Item>
                                            <Form.Item label="Sexo" name="gender">
                                                <Radio.Group>
                                                    <Radio value="feminino">Feminino</Radio>
                                                    <Radio value="masculino">Masculino</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                            <Form.Item label="CPF" name="cpf" rules={[{ required: true, message: 'Por favor, insira o CPF!' }]}>
                                                <Input placeholder="000.000.000-00" />
                                            </Form.Item>
                                            <Form.Item label="Data de Nascimento" name="dateOfBirth">
                                                <Input placeholder="Data de Nascimento" />
                                            </Form.Item>
                                            <Form.Item label="RG" name="rg">
                                                <Input placeholder="RG" />
                                            </Form.Item>
                                            <Form.Item label="Cargo" name="cargo">
                                                <Input placeholder="Cargo" />
                                            </Form.Item>

                                        </Form>

                                        <Form form={form} layout="vertical" 
                                                            style={{ 
                                                                border: '1px solid #689cbc',  // Cor da borda
                                                                padding: '20px',  // Espaçamento interno
                                                                borderRadius: '8px',  // Bordas arredondadas
                                                                boxShadow: '0 1px 3px #689cbc',  // Sombra sutil para dar destaque
                                                                marginBottom: '10px' // Espaçamento de 5px entre os formulários
                                                                }}>
                                            <Form.Item label="Quais EPIs o trabalhador usa na atividade?">
                                                <Radio.Group>
                                                    <Radio value="naoEPI">O trabalhador não usa EPI.</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                            <Form.Item label="Selecione a atividade" name="atividade">
                                                <Select placeholder="Selecione a atividade" style={{ width: '100%' }}>
                                                    <Option value="atividade1">Atividade 1</Option>
                                                    <Option value="atividade2">Atividade 2</Option>
                                                    <Option value="atividade3">Atividade 3</Option>
                                                </Select>
                                            </Form.Item>
                                            <Form.Item label="Selecione o EPI" name="epi">
                                                <Select placeholder="Selecione o EPI" style={{ width: '100%' }}>
                                                    <Option value="epi1">Calçado de segurança</Option>
                                                    <Option value="epi2">Máscara de proteção</Option>
                                                </Select>
                                            </Form.Item>
                                            <Form.Item label="Informe o número do CA" name="caNumber">
                                                <Input placeholder="Número do CA" />
                                            </Form.Item>
                                        </Form>    

                                        <Form form={form} layout="vertical" 
                                                                style={{ 
                                                                    border: '1px solid #689cbc',  // Cor da borda
                                                                    padding: '20px',  // Espaçamento interno
                                                                    borderRadius: '8px',  // Bordas arredondadas
                                                                    boxShadow: '0 1px 3px #689cbc',  // Sombra sutil para dar destaque
                                                                    marginBottom: '10px' // Espaçamento de 5px entre os formulários
                                                                    }}>
                                            <Form.Item label="Adicione Atestado de Saúde (opcional)">
                                                <Input type="file" />
                                            </Form.Item>

                                        </Form>

                                        <Form form={form} layout="vertical"> 
                                            <Form.Item>
                                                <Button type="primary" onClick={handleSave}>Salvar</Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                ) : (
                                    <div style={{ marginTop: '20px' }}>
                                        <List
                                            bordered
                                            dataSource={data}
                                            renderItem={item => (
                                                <List.Item style={{
                                                    padding: '16px',
                                                    borderRadius: '8px',
                                                    backgroundColor: item.status === 'Ativo' ? '#eaf3f9' : '#f0f0f0',
                                                    marginBottom: '10px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}>
                                                    <div style={{ flexGrow: 1 }}>
                                                        <h3 style={{ margin: 0 }}>{item.name}</h3>
                                                        <div style={{ color: '#aaaaaa' }}>{item.cpf}</div>
                                                        <div style={{ marginTop: '8px' }}>
                                                            <span style={{
                                                                backgroundColor: item.status === 'Ativo' ? '#689cbc' : '#ccc',
                                                                color: '#fff',
                                                                borderRadius: '12px',
                                                                padding: '4px 12px',
                                                                marginRight: '8px'
                                                            }}>
                                                                {item.status}
                                                            </span>
                                                            <span style={{
                                                                backgroundColor: '#689cbc',
                                                                color: '#fff',
                                                                borderRadius: '12px',
                                                                padding: '4px 12px',
                                                            }}>
                                                                {item.cargo}
                                                            </span>
                                                            <span style={{
                                                                backgroundColor: item.status === '000.000.000-00' ? '#689cbc' : '#ccc',
                                                                color: '#fff',
                                                                borderRadius: '12px',
                                                                padding: '4px 12px',
                                                                marginRight: '8px'
                                                            }}>
                                                                {item.cpf}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <Button type="link" style={{ padding: 0 }}>...</Button>
                                                </List.Item>
                                            )}
                                        />
                                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                            <Button type="primary">A etapa está concluída? Sim</Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Content>

            </Layout>  
        </Layout>  
    );  
};  

export default MainPage;  

