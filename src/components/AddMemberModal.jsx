import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";

const AddMemberModal = ({ isOpen, closeModal, memberData, refresh }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(memberData || { username: "", name: "", mobile: "", profile: "" });
  }, [memberData]);



  const generateAvatar = (name = "") => {
    const parts = name.trim().split(" ");

    const initials =
      parts.length >= 2
        ? parts[0][0] + parts[1][0]
        : name[0] || "?";

    return {
      initials: initials.toUpperCase(),
      bgColor: "#f0f2f5"
    };
  };

  const addNewMember = () => {
    form.validateFields().then((values) => {
      if (!values.mobile) {
        values.mobile = "not provided"
      }
      // If name is empty, fall back to username
      const displayName = values.username;

      // Generate avatar
      values.profile = generateAvatar(displayName);
      // values.name = values.username
      console.log('values', values)
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
    <Modal open={isOpen} onCancel={closeModal} onOk={addNewMember} title="Add / Edit Member" okText="Add" cancelText='Discard' cancelButtonProps={{danger: true}} closable={{danger: true, }}>
      <Form layout="vertical" form={form}>
        <Form.Item label="Name" name="name" >
          <Input placeholder="Enter Member Name" />
        </Form.Item>
        <Form.Item label="Display Name" name="username" rules={[{ required: true, message: "Display name is required" }]}>
          <Input placeholder="Enter Display Name" />
        </Form.Item>
        {/* <Form.Item label="Name" name="name" rules={[{ required: true, message: "Member name is required" }]}>  */}
        <Form.Item label="Mobile" name="mobile">
          <Input placeholder="Enter Mobile Number" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddMemberModal;


