import back from "../../assets/icons/fi_arrow-left.svg";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

function BackButton() {
  const navigate = useNavigate();
  return (
    <Container>
      <Button onClick={() => navigate(-1)}>
        <img src={back} alt="" className="backButton" />
      </Button>
    </Container>
  );
}

export default BackButton;
