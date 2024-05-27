import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormProject from "../../components/admin/FormProject";
import { useParams } from "react-router-dom";
import { URL_PRODUCT_LIST } from "../../components/Untils";
import useAxios from "../../hooks/useAxios";

const EditProduct = () => {
  // Xac dinh dang chinh sua san pham nao thong qua id cua san pham
  const { id } = useParams();
  // console.log(id);

  // Lay thong tin san pham dang edit
  let URL_DETAIL = URL_PRODUCT_LIST + "/" + id;
  // console.log(URL_DETAIL);

  const { data, isLoading } = useAxios(URL_DETAIL);
  // console.log(data);

  if (isLoading) return <p>Loading...</p>;
  return (
    <Container>
      <Row>
        <Col sx={12} sm={12} md={12}>
          <h4 className="mb-4">Chỉnh sửa sản phẩm</h4>
          <FormProject dataEdit={data} URL_EDIT={URL_DETAIL} />
        </Col>
      </Row>
    </Container>
  );
};

export default EditProduct;
