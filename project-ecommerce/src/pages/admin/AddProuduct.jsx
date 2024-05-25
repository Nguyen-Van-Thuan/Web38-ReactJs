import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormProject from "../../components/admin/FormProject";

const AddProuduct = () => {
  return (
    <Container fluid>
      <Row>
        <Col sx={12} sm={12} md={12}>
          <h2 className="mb-4">Thêm mới sản phẩm</h2>
          <FormProject />
        </Col>
      </Row>
    </Container>
  );
};

export default AddProuduct;
