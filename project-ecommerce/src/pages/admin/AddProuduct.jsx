import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormProject from "../../components/admin/FormProject";

const AddProuduct = () => {
  return (
    <Container>
      <Row>
        <Col sx={12} sm={12} md={12}>
          <h1 className="mb-4">Thêm mới sản phẩm</h1>
          <FormProject />
        </Col>
      </Row>
    </Container>
  );
};

export default AddProuduct;
