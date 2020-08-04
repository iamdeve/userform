import React, { Component } from 'react';
import { Input, Button, Col, Row, Form } from 'antd';
import './UserForm.css';
class S1UserForm extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		homeAddress: '',
		city: '',
		state: '',
		zipCode: '',
		phone: '',
	};

	inputFormHandler = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};
	getQuoteHandler = () => {
		console.log(this.state);
	};
	render() {
		return (
			<div className='container p-0'>
				<h1 className='text-center main-heading'>We Connect You With The Best Life Insurance</h1>
				<div className='main-content-inner-container mb-5'>
					<div className='text-center box-width'>
						<Form name='customized_form_controls'>
							<Row gutter={[16, 16]}>
								<Col className='gutter-row' span={12}>
									<div>
										<label>First Name</label>
									</div>
									<Form.Item name='firstName' style={{ width: '100%' }}>
										<Input
											name='firstName'
											value={this.state.firstName}
											onChange={this.inputFormHandler}
											type='text'
											size='large'
											style={{
												width: '100%',
											}}
										/>
									</Form.Item>
								</Col>
								<Col className='gutter-row' span={12}>
									<div>
										<label>Last Name</label>
									</div>
									<Form.Item name='lastName' style={{ width: '100%' }}>
										<Input
											value={this.state.lastName}
											onChange={this.inputFormHandler}
											type='text'
											name='lastName'
											size='large'
											style={{
												width: '100%',
											}}
										/>
									</Form.Item>
								</Col>
							</Row>

							<Row gutter={[16, 16]}>
								<Col style={{ width: '100%' }}>
									<div>
										<label>Email</label>
									</div>
									<Form.Item name='email' style={{ width: '100%' }}>
										<Input
											name='email'
											value={this.state.email}
											onChange={this.inputFormHandler}
											type='email'
											size='large'
											style={{
												width: '100%',
											}}
										/>
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={[16, 16]}>
								<Col style={{ width: '100%' }}>
									<div>
										<label>Home Address</label>
									</div>
									<Form.Item name='homeAddress' style={{ width: '100%' }}>
										<Input
											name='homeAddress'
											value={this.state.homeAddress}
											onChange={this.inputFormHandler}
											type='text'
											size='large'
											style={{
												width: '100%',
											}}
										/>
									</Form.Item>
								</Col>
							</Row>

							<Row gutter={[16, 16]}>
								<Col span={8}>
									<div>
										<label>City</label>
									</div>
									<Form.Item name='city' style={{ width: '100%' }}>
										<Input
											name='city'
											value={this.state.city}
											onChange={this.inputFormHandler}
											type='text'
											size='large'
											style={{
												width: '100%',
											}}
										/>
									</Form.Item>
								</Col>
								<Col span={8}>
									<div>
										<label>State</label>
									</div>
									<Form.Item name='state' style={{ width: '100%' }}>
										<Input
											name='state'
											value={this.state.state}
											onChange={this.inputFormHandler}
											type='text'
											size='large'
											placeholder='e.g: AZ'
											style={{
												width: '100%',
											}}
										/>
									</Form.Item>
								</Col>
								<Col span={8}>
									<div>
										<label>Zip Code</label>
									</div>
									<Form.Item name='zipCode' style={{ width: '100%' }}>
										<Input
											name='zipCode'
											value={this.state.zipCode}
											onChange={this.inputFormHandler}
											type='text'
											size='large'
											style={{
												width: '100%',
											}}
										/>
									</Form.Item>
								</Col>
							</Row>

							<Row gutter={[16, 16]}>
								<Col style={{ width: '100%' }}>
									<div>
										<label>Phone</label>
									</div>
									<Form.Item name='phone' style={{ width: '100%' }}>
										<Input
											name='phone'
											value={this.state.phone}
											onChange={this.inputFormHandler}
											type='text'
											size='large'
											style={{
												width: '100%',
											}}
										/>
									</Form.Item>
								</Col>
							</Row>

							<Form.Item style={{ width: '100%' }}>
								<Button type='primary' onClick={this.getQuoteHandler} style={{ width: '100%' }} size={'large'}>
									<h4 style={{ display: 'inline', color: 'white', fontWeight: '400' }}>Get My Quote</h4>
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

export default S1UserForm;
