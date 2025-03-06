import React,{useState} from "react";
import Layout from "../components/Layout/Layout";
import {  Form, Modal,Input,Select} from 'antd';

const HomePage = () => {
  const [showModel,setShowModel]=useState(false)

  //form handling
  const handleSubmit=(values)=>{
    console.log(values);
    
  }



  return (
    <Layout>
      <div className="filters">
        <div>range filters</div>
        <div>
          <button className="btn btn-primary" onClick={()=>setShowModel(true)}>Add New</button>
        </div>
      </div>
      <div className="content"></div>
      <Modal title="Add Transection" open={showModel} onCancel={()=>setShowModel(false)} footer={false}>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Amount"name="amount">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Type"name="type">
            <Select>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Category"name="category">
            <Select>
              <Select.Option value="salary">Salary</Select.Option>
              <Select.Option value="tip">Tip</Select.Option>
              <Select.Option value="project">Project</Select.Option>
              <Select.Option value="food">Food</Select.Option>
              <Select.Option value="movie">Movie</Select.Option>
              <Select.Option value="bills">Bills</Select.Option>
              <Select.Option value="fee">Fee</Select.Option>
              <Select.Option value="tax">Tax</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Date" name="date" >
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Refrence" name="refrence" >
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Description" name="description" >
            <Input type="text" />
          </Form.Item>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">{" "}SAVE</button>
          </div>
        </Form>

      </Modal>
    </Layout>
  );
};

export default HomePage;
