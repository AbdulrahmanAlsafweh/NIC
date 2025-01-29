import React, { useState } from "react";
import { Button, Drawer, Modal, Form, Input, message, Select } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';  


export default function Navbar() {
  const [visible, setVisible] = useState(false); // State to control Drawer visibility
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control Modal visibility

  // Show Drawer
  const showDrawer = () => {
    setVisible(true);
  };

  // Close Drawer
  const onClose = () => {
    setVisible(false);
  };

  // Show Modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Close Modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // defining option
  const { Option } = Select;

  // Handle form submission
  const onFinish = (values) => {
    // emailjs
    //   .send(
    //     "your_service_id", // Replace with your EmailJS service ID
    //     "your_template_id", // Replace with your EmailJS template ID
    //     values,
    //     "your_user_id" // Replace with your EmailJS user ID
    //   )
    //   .then(
    //     () => {
    //       message.success("Email sent successfully!");
    //       setIsModalVisible(false); // Close the modal after success
    //     },
    //     (error) => {
    //       console.error(error);
    //       message.error("Failed to send email.");
    //     }
    //   );
  };

  function sendRequest(values) {
    console.log(values);
    handleCancel();
  }
  return (
    <div className="flex items-center justify-between md:py-5 md:px-5 shadow-sm shadow-gray-300">
      {/* Logo */}
      <div className="md:w-auto w-[50%]">
        <Link to="/">
          <img
            src="/Assets/Images/Logo.png"
            alt="Logo"
            className="w-full md:w-[200px] h-auto"
          />
        </Link>
      </div>

      {/* Navigation Links (Desktop view) */}
      <div className="hidden md:flex">
        <ul className="font-Secondary flex flex-row gap-5">
          <li>
            <Link to="/it-support">IT Support & Maintenance</Link>
          </li>
          <li>
            <a href="">Online & Hosting Services</a>
          </li>
          <li>
            <a href="">Advisory and Technology Strategy</a>
          </li>
        </ul>
      </div>

      {/* Button Section */}
      <div className="hidden md:flex items-center justify-center md:gap-5 space-x-4">
        <div>
          <a href="">
            <button className="bg-blackk hover:bg-secondary hover:text-blackk transition-all text-secondary rounded-3xl md:px-4 md:py-2 flex items-center justify-center sm:px-2 sm:py-1 font-Secondary">
              <p>Contact Us</p>
            </button>
          </a>
        </div>
        <div>
          <button
            onClick={showModal}
            className="bg-secondary hover:bg-blackk hover:text-secondary transition-all text-blackk rounded-3xl md:px-4 md:py-2 flex items-center justify-center sm:px-2 sm:py-1 font-Secondary"
          >
            <p>Free Consultation</p>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Button */}
      <div className="md:hidden flex items-center">
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
          className="text-black"
        />
      </div>

      {/* Drawer Component for Mobile View */}
      <Drawer
        title="Navigation Menu"
        placement="right"
        onClose={onClose}
        open={visible}
        width={250}
      >
        <ul className="font-Secondary flex flex-col gap-4">
          <li>
            <a href="">IT Support & Maintenance</a>
          </li>
          <li>
            <a href="">Online & Hosting Services</a>
          </li>
          <li>
            <a href="">Advisory and Technology Strategy</a>
          </li>
          <li>
            <button className="bg-secondary text-white px-4 py-2 rounded-md">
              Contact Us
            </button>
          </li>
          <li>
            <button
              onClick={showModal}
              className="bg-black text-white px-4 py-2 rounded-md"
            >
              Free Consultation
            </button>
          </li>
        </ul>
      </Drawer>

      {/* Modal for Free Consultation Form */}
      <Modal
        title="Free Consultation Request"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={(values) => {
            sendRequest(values);
          }}
        >
          {/* Form container */}
          <div className="grid grid-cols-2 gap-2">
            {/* Full name */}
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                { required: true, message: "Please enter your full name" },
              ]}
            >
              <Input />
            </Form.Item>
            {/* Email */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input />
            </Form.Item>

            {/* Consult type */}
            <Form.Item
              name="consultType"
              label=" Service Type"
              rules={[
                { required: true, message: "Please choose a service type" },
              ]}
            >
              <Select
                placeholder="Select a service"
                allowClear
                dropdownRender={(menu) => (
                  <div className="max-w-full">{menu}</div>
                )}
              >
                <Option value="IT Support & Maintenance">
                  IT Support & Maintenance
                </Option>
                <Option value="Online & Hosting Services">
                  Online & Hosting Services
                </Option>
                <Option value="Advisory and Technology Strategy">
                  Advisory and Technology Strategy
                </Option>
              </Select>
            </Form.Item>

            {/* Phone number */}
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please enter your phone number",
                },
                {
                  pattern: /^[0-9]{8}$/,
                  message: "Phone number must be 8 digits",
                },
              ]}
            >
              <Input
                addonBefore={<span>+961</span>}
                placeholder="Enter your phone number"
                maxLength={8}
              />
            </Form.Item>
          </div>

          {/* Message section */}
          <Form.Item label="Message" name="message">
            <Input.TextArea />
          </Form.Item>

          {/* Submit button */}
          <Form.Item className="flex justify-end">
            <Button
              type="primary"
              htmlType="submit"
              className="
              md:px-5 md:py-3 rounded-3xl 
              !bg-secondary !text-blackk hover:!bg-blackk hover:!text-secondary"
            >
              Send Consult
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
