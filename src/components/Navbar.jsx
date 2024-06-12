import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

export function AppNavbar() {
  const navigate = useNavigate();
  return (
    <Navbar className=" justify-content-end ">
      <Form inline>
        <Row>
          <Col xs="auto" className="px-5">
            <Button
              onClick={() => navigate("/admin")}
              variant="outline-light px-4"
            >
              Admin
            </Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}
