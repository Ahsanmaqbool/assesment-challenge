import React, { useState } from "react";
import "./model.css";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import Button from "../button/Button";

const ProductModal = ({
  open,
  setOpen,
  setProductDetails,
  productDetails,
  handleSubmit,
}) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!productDetails.title) {
      newErrors.title = "Title is required";
    }
    if (!productDetails.image) {
      newErrors.image = "Image is required";
    }
    if (!productDetails.price) {
      newErrors.price = "Price is required";
    } else if (isNaN(productDetails.price)) {
      newErrors.price = "Price must be a number";
    } else if (Number(productDetails.price) <= 0) {
      newErrors.price = "Price must be greater than 0";
    }
    if (!productDetails.description) {
      newErrors.description = "Description is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      handleSubmit(e);
    }
  };

  return (
    <div className="modal">
      <Modal
        isOpen={open}
        ariaHideApp={false}
        className="reactModalContent"
        overlayClassName="reactModalOverlay"
      >
        <div className="modalContentHelper">
          <div className="modalClose" onClick={() => setOpen(false)}>
            <FaTimes />
          </div>
          <form className="form" onSubmit={handleFormSubmit}>
            <span className="label">Product title: *</span>
            <input
              placeholder="Title"
              name="title"
              className="input"
              onChange={handleChange}
            />
            {errors.title && <span className="error">{errors.title}</span>}
            <span className="label">Image: *</span>
            <input
              name="image"
              className="input"
              onChange={handleChange}
              type="file"
            />
            {errors.image && <span className="error">{errors.image}</span>}
            <span className="label">Product price: *</span>
            <input
              placeholder="Price"
              name="price"
              className="input"
              onChange={handleChange}
            />
            {errors.price && <span className="error">{errors.price}</span>}
            <span className="label">Product description: *</span>
            <textarea
              placeholder="Start typing product description here"
              className="textarea"
              name="description"
              onChange={handleChange}
            />
            {errors.description && (
              <span className="error">{errors.description}</span>
            )}
            <Button>Add a product</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ProductModal;
