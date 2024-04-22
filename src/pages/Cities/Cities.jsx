import React, { useState, useEffect } from "react";
import { message, Table, Button, Modal, Form, Input, Upload } from "antd";
import { MdEdit, MdDelete } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import style from "./Cities.module.css";

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchText, setSearchText] = useState("");

  // Load cities from localStorage on component mount
  useEffect(() => {
    const savedCities = JSON.parse(localStorage.getItem("cities")) || [];
    setCities(savedCities);
  }, []);

  // Filtered cities based on search text
  const filteredCities = cities.filter(
    (city) =>
      city.name.toLowerCase().includes(searchText.toLowerCase()) ||
      city.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {record.images && (
            <img
              src={record.images}
              alt="City"
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                marginRight: 10,
              }}
            />
          )}
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
      render: (text) => <span>{text}</span>, // Display class as plain text
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <>
          <Button
            style={{
              background: "rgb(228, 244, 255)",
              marginRight: 10,
            }}
            onClick={() => handleEdit(record)}
          >
            <MdEdit style={{ color: "blue", fontSize: 18 }} />
          </Button>
          <Button
            style={{ background: "rgb(255, 233, 235)" }}
            onClick={() => handleDelete(record.id)}
          >
            <MdDelete style={{ color: "red", fontSize: 18 }} />
          </Button>
        </>
      ),
    },
  ];

  const handleEdit = (item) => {
    setSelectedCity(item);
    setOpen(true);
    form.setFieldsValue(item);
  };

  const handleDelete = (id) => {
    const updatedCities = cities.filter((city) => city.id !== id);
    setCities(updatedCities);
    saveCitiesToLocalStorage(updatedCities);
    message.success("Teacher deleted successfully");
  };

  const handleAdd = () => {
    setSelectedCity(null);
    setOpen(true);
    form.resetFields();
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const updatedCities = selectedCity
          ? cities.map((city) =>
              city.id === selectedCity.id ? { ...city, ...values } : city
            )
          : [...cities, { id: Date.now(), ...values }];

        setCities(updatedCities);
        saveCitiesToLocalStorage(updatedCities);
        message.success(
          selectedCity ? "Teacher updated successfully" : "Teacher added successfully"
        );
        setOpen(false);
      })
      .catch((error) => {
        console.error("Validation failed:", error);
      });
  };

  const handleCancel = () => {
    setOpen(false);
    form.resetFields();
  };

  const handleImageUpload = (file) => {
    if (file && file.originFileObj) {
      const imageUrl = URL.createObjectURL(file.originFileObj);
      form.setFieldsValue({ images: imageUrl });
    }
    return false;
  };

  const saveCitiesToLocalStorage = (citiesData) => {
    localStorage.setItem("cities", JSON.stringify(citiesData));
  };

  return (
    <div className={style["add-container"]}>
      <div style={{ overflowX: "auto", display: 'flex', flexDirection: 'column', gap: 15 }}>
        <div
          className="add_button"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{color: 'black', fontWeight: 700}}>Teachers</p>
          <Button
            type="primary"
            className={style["add-btn"]}
            onClick={handleAdd}
            style={{ margin: 0 }}
          >
            Add Teachers
          </Button>
        </div>
        <div style={{ position: "relative", marginTop: 10 }}>
          <CiSearch
            style={{ position: "absolute", color: "gray", top: 14, left: 7, zIndex: 100 }}
          />
          <Input
            style={{ padding: "10px 29px" }}
            placeholder="Search for a teacher by name or email"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <Table columns={columns} loading={loading} dataSource={filteredCities} rowKey="id" />
      </div>

      <Modal
        title={selectedCity ? "Edit Teacher" : "Add Teacher"}
        visible={open}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter the name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="subject"
            label="Subject"
            rules={[{ required: true, message: "Please enter the subject" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="class"
            label="Class"
            rules={[{ required: true, message: "Please enter the class" }]}
          >
             <Input />
            {/* <span className="plain-text">{form.getFieldValue("class")}</span> */}
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter the email" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please enter the gender" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Upload Image"
            name="images"
            valuePropName="fileList"
            getValueFromEvent={(fileList) =>
              fileList && fileList.length > 0 ? fileList[0] : null
            }
            rules={[{ required: false, message: "Please upload an image" }]}
          >
            <Upload
              beforeUpload={() => false}
              maxCount={1}
              accept="image/*"
              onChange={handleImageUpload}
            >
              <Button>Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Cities;
