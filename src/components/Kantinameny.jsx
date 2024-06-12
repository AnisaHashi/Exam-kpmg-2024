import { Card, CardBody, CardText, CardTitle, Col, Row } from "react-bootstrap";

export const KantinaMenyCard = (props) => {
  const lunch = props.kantinameny
    .filter((menu) => menu.category.toLowerCase() === "Lunch".toLowerCase())
    .map((m) => m.description)
    .map((item) => item.split(","))
    .flat();
  const dinner = props.kantinameny
    .filter((menu) => menu.category.toLowerCase() === "Dinner".toLowerCase())
    .map((m) => m.description)
    .map((item) => item.split(","))
    .flat();
  const drinks = props.kantinameny
    .filter((menu) => menu.category.toLowerCase() === "Drinks".toLowerCase())
    .map((m) => m.description)
    .map((item) => item.split(","))
    .flat();

  const data = [
    {
      id: 1,
      title: "Lunch",
      menus: lunch,
    },
    {
      id: 2,
      title: "Dinner",
      menus: dinner,
    },
    {
      id: 3,
      title: "Drinks",
      menus: drinks,
    },
  ];

  const getImageSrc = (title) => {
    if (title === "Lunch") {
      return "/lunch-placeholder.png";
    }
    if (title === "Dinner") return "/Spaghetti-placeholder.png";

    if (title === "Drinks") return "/Coffe-placeholder.png";

    return "";
  };

  return (
    <Row className="justify-content-center mt-2">
      <Col xs="12" className="text-center mb-2 ">
        <h1 className="font-weight-bold" style={{ fontSize: "40px" }}></h1>
      </Col>

      <Col className="d-flex flex-1 ">
        {data.map((current) => {
          return (
            <Card className="m-2 w-1/3" style={{ backgroundColor: "#E6EFF8" }}>
              <Card.Title tag="h5" className="text-center mt-2">
                {current.title}
              </Card.Title>
              <hr className="mx-5" />

              <CardBody>
                <CardText>
                  <ul>
                    {current.menus?.map((menu) => {
                      return <li>{menu} </li>;
                    })}
                  </ul>
                </CardText>
                <Card.Img
                  className="p-4"
                  variant="bottom"
                  src={getImageSrc(current.title)}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    marginTop: "auto",
                  }}
                />
              </CardBody>
            </Card>
          );
        })}
      </Col>
    </Row>
  );
};
