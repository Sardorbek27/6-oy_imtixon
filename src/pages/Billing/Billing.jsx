import React from "react";

const Billing = () => {
  return <div>Billing</div>;
};

export default Billing;


// import { message, Table, Button, Modal, Form, Input, Upload } from "antd";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { MdEdit, MdDelete } from "react-icons/md";
// import style from "./Cities.module.css";
// import { CiSearch } from "react-icons/ci";

// const Cities = () => {
//   const [cities, setCities] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [visible, setVisible] = useState(false);
//   const [form] = Form.useForm();
//   const [selectedCity, setSelectedCity] = useState(null);
//   const urlimage =
//     "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";

//   const columns = [
//     {
//       title: "ID",
//       dataIndex: "number",
//       key: "number",
//     },
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Subject",
//       dataIndex: "text",
//       key: "text",
//     },
//     {
//       title: "Images",
//       dataIndex: "images",
//       key: "images",
//     },
//     {
//       title: "Action",
//       dataIndex: "action",
//       key: "action",
//     },
//   ];
//   const dataSourse = cities.map((item, index) => ({
//     key: item.id,
//     number: index + 1,
//     name: item.name,
//     text: item.text,
//     images: (
//       <img style={{ width: "100px", height: '50px' }} src={`${urlimage}${item.image_src}`} />
//     ),
//     action: (
//       <>
//         <span style={{ marginRight: "20px" }}>
//           <Button style={{background: 'rgb(228, 244, 255)'}}   onClick={() => handleEdit(item)}>
//             <MdEdit style={{color: 'blue', fontSize: '18px', textAlign: 'center', }}/>
//           </Button>
//         </span>
//         <span>
//           <Button style={{background: 'rgb(255, 233, 235)'}} onClick={() => handleDelete(item.id)}>
//             <MdDelete style={{color: 'red', fontSize: '18px'}}/>
//           </Button>
//         </span>
//       </>
//     ),
//   }));
  
//   const getData = () => {
//     setLoading(true);
//     axios
//       .get("https://autoapi.dezinfeksiyatashkent.uz/api/cities")
//       .then((response) => {
//         setCities(response.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error getting cities.", error);
//         message.error("Error getting cities.");
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleEdit = (item) => {
//     const imageUrl = `${urlimage}${item.image_src}`;
//     setSelectedCity({
//       name: item.name,
//       text: item.text,
//       images: imageUrl,
//     });

//     setVisible(true);
//     form.setFieldsValue(item);
//   };

//   const handleDelete = (id) => {
//     const authToken = localStorage.getItem("access_token");
//     const config = {
//       headers: { Authorization: `Bearer ${authToken}` },
//     };
//     Modal.confirm({
//       title: "Do you want to delete this city?",
//       onOk() {
//         axios
//           .delete(
//             `https://autoapi.dezinfeksiyatashkent.uz/api/cities/${id}`,
//             config
//           )
//           .then(() => {
//             message.success("City deleted successfully");
//             getData();
//           })
//           .catch((error) => {
//             console.error("Error deleting city.", error);
//             message.error("Error deleting city.");
//           });
//       },
//     });
//   };

//   const handleAdd = () => {
//     setSelectedCity(null);
//     setVisible(true);
//     form.resetFields();
//   };

//   const handleOk = () => {
//     const authToken = localStorage.getItem("access_token");
//     form.validateFields().then((values) => {
//       const formData = new FormData();
//       formData.append("name", values.name);
//       formData.append("name", values.name);
//       formData.append("name", values.name);
//       formData.append("text", values.text);
//       if (values.images && values.images.length > 0) {
//         values.images.forEach((image) => {
//           if (image && image.originFileObj) {
//             formData.append("images", image.originFileObj, image.name);
//           }
//         });
//       }
//       const url = selectedCity
//         ? `https://autoapi.dezinfeksiyatashkent.uz/api/cities/${selectedCity.id}`
//         : "https://autoapi.dezinfeksiyatashkent.uz/api/cities";
//       const method = selectedCity ? "PUT" : "POST";

//       axios({
//         url,
//         method,
//         data: formData,
//         headers: { Authorization: `Bearer ${authToken}` },
//       })
//         .then(() => {
//           message.success(
//             selectedCity
//               ? "City updated successfully"
//               : "City added successfully"
//           );
//           setVisible(false);
//           form.resetFields();
//           getData();
//         })
//         .catch((error) => {
//           console.error("Error adding/updating city.", error);
//           message.error("Error adding/updating city.");
//         });
//     });
//   };

//   const handleCancel = () => {
//     setVisible(false);
//     form.resetFields();
//   };
//   const beforeUpload = (file) => {
//     const extension = file.name.split(".").pop().toLowerCase();
//     const isJpgorPng =
//       extension === "jpeg" || extension === "jpg" || extension === "png";
//     if (!isJpgorPng) {
//       message.error("Rasm yuklang");
//     }
//     return isJpgorPng;
//   };

//   const normFile = (e) => {
//     if (Array.isArray(e)) {
//       return e;
//     }
//     return e && e.fileList;
//   };

//   return (
//     <div className={style["add-container"]}>
//       <div style={{ overflowX: "auto", display: 'flex', flexDirection: 'column', gap: '20px'}}>
//         <div className="add_button" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
//           <p>Teachers</p>
//           <Button
//             type="primary"
//             className={style["add-btn"]}
//             onClick={handleAdd}
//             style={{ margin: 0 }}
//           >
//             Add City
//           </Button>
//         </div>

//         <div style={{position: 'relative'}}>
//           <CiSearch style={{position:'absolute', color:'gray', top: '13px', left:'7px', zIndex:'100'}}/>
//           <Input style={{padding: '10px 29px'}} placeholder="Search for a student by name or email" />
//         </div>

//         <Table
//           columns={columns}
//           loading={loading}
//           rowKey="id"
//           dataSource={dataSourse}
//         />
//       </div>
//       <Modal
//         title={selectedCity ? "Edit City" : "Add City"}
//         open={visible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <Form form={form} layout="vertical">
//           <Form.Item
//             name="name"
//             label="Name"
//             rules={[{ required: true, message: "Please enter the name" }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="text"
//             label="Text"
//             rules={[{ required: true, message: "Please enter the text" }]}
//           >
//             <Input.TextArea rows={4} />
//           </Form.Item>
//           <Form.Item
//             label="Upload Image"
//             name="images"
//             valuePropName="fileList"
//             getValueFromEvent={normFile}
//             rules={[{ required: true, message: "Please upload an image" }]}
//           >
//             <Upload
//               customRequest={({ onSuccess }) => {
//                 onSuccess("ok");
//               }}
//               beforeUpload={beforeUpload}
//               listType="picture-card"
//             >
//               <div>
//                 <div style={{ marginTop: 8 }}>Upload</div>
//               </div>
//             </Upload>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default Cities;

