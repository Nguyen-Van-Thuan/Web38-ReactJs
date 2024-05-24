import React from "react";
import FormProject from "../../components/admin/FormProject";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { URL_PRODUCT_LIST } from "../../components/Untils";

const EditProduct = () => {
  // Chức năng edit
  const { id } = useParams();
  // console.log(id);

  // Lấy dữ liệu dựa trên edit product
  const urlEdit = `${URL_PRODUCT_LIST}/${id}`;
  // console.log(urlEdit);
  const { data, isLoading } = useAxios(urlEdit);

  // console.log(data);
  if(isLoading) return <p>Loading...</p>
  return (
    <Container fluid>
      <Row>
        <Col sx={12} sm={12} md={12}>
          <h2 className="mb-4">Chỉnh sửa sản phẩm</h2>
          <FormProject detail={data} urlEdit={urlEdit}/>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProduct;
