import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";

const AddMemberModal = ({ isOpen, closeModal, memberData, refresh }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(memberData || { username: "", name: "", mobile: "" });
  }, [memberData]);

  const addNewMember = () => {
    form.validateFields().then((values) => {
      const allMembers = JSON.parse(localStorage.getItem("all-members") || "[]");
      const exists = allMembers.some((m) => m.username === values.username);

      if (exists && (!memberData || values.username !== memberData.username)) {
        message.error("Username already exists");
        return;
      }

      if (memberData) {
        // Update existing
        const updated = allMembers.map((m) => (m.username === memberData.username ? values : m));
        localStorage.setItem("all-members", JSON.stringify(updated));
      } else {
        // Add new
        localStorage.setItem("all-members", JSON.stringify([...allMembers, values]));
      }

      message.success("Member saved successfully");
      refresh();
      closeModal();
      form.resetFields();
    });
  };

  return (
    <Modal open={isOpen} onCancel={closeModal} onOk={addNewMember} title="Add / Edit Member">
      <Form layout="vertical" form={form}>
        <Form.Item label="Username" name="username" rules={[{ required: true, message: "Username is required" }]}> 
          <Input placeholder="Enter Username" />
        </Form.Item>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: "Member name is required" }]}> 
          <Input placeholder="Enter Member Name" />
        </Form.Item>
        <Form.Item label="Mobile" name="mobile" rules={[{ required: true, message: "Mobile number is required" }]}> 
          <Input placeholder="Enter Mobile Number" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddMemberModal;