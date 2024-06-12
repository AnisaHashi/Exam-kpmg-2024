import { Card, Col, Container, Row } from 'react-bootstrap';
import { Steps } from '../components/Stepper';
import { useEffect, useState } from 'react';
import { Dagensagenda } from '../components/Dagensagenda';
import { Reminder } from '../components/Remninder';
import { KantinaMenyCard } from '../components/Kantinameny';

import { BildegalleriCard } from '../components/Bildegelleri';
import { getDailyAgenda } from '../api/dailyAgenda';
import { getReminders } from '../api/reminders';
import { getKantinameny } from '../api/kantinaMeny';

import './InfoDashboard.css';
import { getPhoto } from '../api/photo';
import { getBirthday } from '../api/birthday';
import { AppNavbar } from '../components/Navbar';

export function InfoDashboard() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [dailyAgenda, setDailyAgenda] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [kantinameny, setKantinamenys] = useState([]);
  const [photo, setPhotos] = useState([]);
  const [birthdays, setBirthdays] = useState([]);

  useEffect(() => {
    getDailyAgenda().then((data) => {
      setDailyAgenda(data);
    });
  }, []);

  useEffect(() => {
    getReminders().then((data) => setReminders(data));
  }, []);
  useEffect(() => {
    getBirthday().then((data) => setBirthdays(data));
  }, []);

  useEffect(() => {
    getKantinameny().then((data) => setKantinamenys(data));
  }, []);

  useEffect(() => {
    getPhoto().then((data) => setPhotos(data));
  }, []);

  const handleStepChange = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const getTitle = () => {
    switch (activeIndex) {
      case 0:
        return "Today's Agenda";
      case 1:
        return 'Reminders';
      case 2:
        return 'Canteen Menu';
      case 3:
        return 'Photo Gellery';
      case 4:
        return 'Departure Times';

      default:
        return '';
    }
  };

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return <Dagensagenda dailyAgenda={dailyAgenda} />;

      case 1:
        return <Reminder reminders={reminders} birthdays={birthdays} />;

      case 2:
        return <KantinaMenyCard kantinameny={kantinameny} />;

      case 3:
        return photo.length > 0 ? <BildegalleriCard photo={photo} /> : null;

      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container d-flex flex-column " position="relative">
      <AppNavbar />
      <Container>
        <Row>
          <Col md={3}>
            <Card className="mt-4">
              <Card.Body>
                <Card.Title>
                  <h1 className="text-center">Dashboard</h1>
                </Card.Title>
                <hr style={{ border: 'px solid blue' }} />
                <Steps onChange={handleStepChange} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={7}>
            <h1 className="mt-3 "> {getTitle()}</h1>
            <Card className="mt-4 " style={{ height: '750px' }}>
              <Card.Body>
                <Card.Title></Card.Title>
                {renderContent()}
              </Card.Body>
            </Card>
          </Col>

          <Col md={2} className="">
            <Card className="border-2 mt-4" style={{ height: '92px' }}>
              <Card.Body style={{ height: '92px' }}>
                <Card.Title>Current Time</Card.Title>
                <Card.Text>11:30</Card.Text>
              </Card.Body>
            </Card>

            <Card
              className="mt-4 mx-auto border-2" /* style={{ width: "193px", height: "92px" }} */
            >
              <Card.Body style={{ height: '381px' }}>
                <Card.Title>Current Weather</Card.Title>
                <Card.Text>29°C</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
