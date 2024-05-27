import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { URL_PRODUCT_LIST } from "../Untils";
import { Image } from "react-bootstrap";

const FormProject = ({ detail = null, urlEdit = null }) => {
  // console.log(detail);
  const detailTitle = detail ? detail.title : "";
  const detailCategory = detail ? detail.category : "";
  const detailImage = detail ? detail.image : "";
  const deltailPrice = detail ? detail.price : "";
  const deltailContent = detail ? detail.content : "";

  // console.log(detailTitle);
  // Khai bao react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      title: detailTitle,
      category: detailCategory,
      image: detailImage,
      price: deltailPrice,
      content: deltailContent,
    },
  });

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const imageDynamic = watch("image");

  const onSubmit = async (data) => {
    if (!detail) {
      // Logic them moi 1 san pham
      try {
        setIsLoading(true);
        const response = await axios.post(
          URL_PRODUCT_LIST, //api url
          data //du lieu gui di
        );

        if (response) {
          setIsLoading(false);
          // Chuyen huong ve trang listing
          navigate("/dashboad/product");
        }
      } catch (error) {
        alert("Them that bai");
        console.log(error);
      }
    } else {
      // Logic chinh sua 1 san pham
      try {
        setIsLoading(true);
        const response = await axios.put(
          urlEdit, //api url
          data //du lieu gui di
        );

        if (response) {
          setIsLoading(false);
          // Chuyen huong ve trang listing
          navigate("/dashboad/product");
        }
      } catch (error) {
        alert("chinh sua that bai");
        console.log(error);
      }
    }
  };

  const nameButton = detail ? "Sua san pham" : "Them san pham";
  const statusLoading = detail ? "Cap nhap san pham" : "Them moi san pham";
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Tên *: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập vào sản phẩm của bạn"
          {...register("title", { required: true })}
        />

        <Form.Text className="text-muted">
          {errors.title && "Ten khong duoc de trong!"}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Danh mục: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập vào danh mục sản phẩm của bạn"
          {...register("category")}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Hình ảnh *: </Form.Label>
        {imageDynamic && (
          <Image
            src={imageDynamic}
            width={80}
            rounded
            className="mb-2 d-block"
          />
        )}

        <Form.Control
          type="text"
          placeholder="Nhập vào ảnh của bạn"
          {...register("image", { required: true })}
        />

        <Form.Text className="text-muted">
          {errors.image && "Hinh anh khong duoc de trong!"}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Giá *: </Form.Label>
        <Form.Control
          type="number"
          placeholder="Nhập vào giá sản phẩm của bạn"
          {...register("price", { required: true })}
        />

        <Form.Text className="text-muted">
          {errors.price && "Gia khong duoc de trong!"}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mô tả: </Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          placeholder="Nhập vào mô tả sản phẩm"
          {...register("content")}
        />
      </Form.Group>
      {isLoading === true ? (
        <Button variant="primary mb-4" type="submit" disabled>
          {statusLoading}
        </Button>
      ) : (
        <Button variant="primary mb-4" type="submit">
          {nameButton}
        </Button>
      )}
    </Form>
  );
};

export default FormProject;

// B1: Lay toan bo thong tin user nhap form
// B2: Gui len Database thong qua API voi axios POST

// note:
// Voi cach binh thuong, khi lam viec form -> can luu lai gia tri cua user nhap vaof form -> co bao nhieu truong nhap lieu -> co bay nhieu state -> 100 truong nhap lieu -> ?
// React hook form -> co che lu het truong nhap lieu vao object cho minh su dung.
// onSubmit -> function xu ly logic sau khi nguoi dung bam submit
// data -> co san trong react hook form -> tao ra state tu dong luu thong tin user nhap sau khi khai bao voi register

// register -> khai cac truong du lieu trong from voi react hook form -> React hook form tu dong tao ra cac state tuong ung de luu tru gia tri nguoi dung nhap vao
// handleSubmit -> Luc nguoi bam submit -> gui du lieu len server
// watch -> kiem trang thai cua nguoi nhap -> onchange()
//formState: { errors } -> validate du lieu dau vao -> thong bao loi neu nguoi dung k tuan thu

// axios
// Du lieu gui di phai trung voi cac truong o trong database (key) va se co dang nhu nay
/*
    {
      "title": "product 12",
      "category": "Quần",
      "image": "https://theme.hstatic.net/200000690725/1001078549/14/home_category_2_img.jpg?v=363",
      "price": 2000000,
      "content": "Thong tin chi tiet san pham"
    }
*/
