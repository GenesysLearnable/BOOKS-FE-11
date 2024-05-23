import styled from "styled-components";
import book1 from "../../Images/book1.png";
import img1 from "../../Images/Icons/pic1.png";
import img2 from "../../Images/Icons/pic2.png";
import img3 from "../../Images/Icons/pic3.png";
import img4 from "../../Images/Icons/pic4.png";
import count from "../../Images/Icons/count.png";
import filterbutton from "../../Images/Icons/filter-button.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
  padding: 2rem 2rem 4rem 2rem;
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  line-height: 2;
  gap: 1rem;
  flex-basis: 50%;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
`;

const ImgBook = styled.img`
  width: 26rem;
  height: 28rem;
`;
const P = styled.p`
  font-size: 1.2rem;
`;

const DetailContainer = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
  font-size: 1.4rem;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
`;

const BtnImgContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
`;

const Button = styled.button`
  border: ${(props) => (props.variance ? ".1rem solid #003B00" : "none")};
  background: ${(props) => (props.variance ? "#E6F0E6" : "transparent")};
  border-bottom: ${(props) => props.farRight && ".1rem solid #549D54"};
  padding: ${(props) => props.variance && "0.8rem 4rem"};
  font-size: ${(props) => props.variance && "1rem"};
  border-radius: ${(props) => props.variance && ".3rem"};
  color: ${(props) => (props.farRight ? "#549D54" : "#003B00")};
  cursor: pointer;
`;

const Images = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 10rem;
  margin-left: -0.7rem;
`;
const CountContainer = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #f4f4f6;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -0.7rem;
  padding: 1rem;
`;
function Community1() {
  return (
    <Container id="section3">
      <Heading>
        <h3>Community</h3>
        <button className="category-filter">
          <img src={filterbutton} alt="icon" className="filter-icon" /> Filter
        </button>
      </Heading>

      <InfoContainer>
        <Info>
          <ImgBook src={book1} alt="book cover" />

          <DetailContainer>
            <div>
              <Title>Chem205 Student</Title>
              <P>
                The CHEM 205 student is a tight knit community dedicated to
                supporting student enroll in CHEM 205, an introductory course in
                organic chemistry
              </P>
            </div>
            <BtnImgContainer>
              <Button variance="true">Join</Button>
              <Images>
                <Img src={img1} alt="img-1" />
                <Img src={img2} alt="img-2" />
                <Img src={img3} alt="img-3" />
                <Img src={img4} alt="img-4" />
                <CountContainer>
                  <img src={count} alt="count" counts="true" />
                </CountContainer>
              </Images>
            </BtnImgContainer>
          </DetailContainer>
        </Info>
        <Info>
          <ImgBook src={book1} alt="book cover" />

          <DetailContainer>
            <div>
              <Title>Chem 205 Student</Title>
              <P>
                The CHEM 205 student is a tight knit community dedicated to
                supporting student enroll in CHEM 205, an introductory course in
                organic chemistry
              </P>
            </div>
            <BtnImgContainer>
              <Button variance="true">Join</Button>
              <Images>
                <Img src={img1} alt="img-1" />
                <Img src={img2} alt="img-2" />
                <Img src={img3} alt="img-3" />
                <Img src={img4} alt="img-4" />
                <CountContainer>
                  <img src={count} alt="count" counts="true" />
                </CountContainer>
              </Images>
            </BtnImgContainer>
          </DetailContainer>
        </Info>
      </InfoContainer>
    </Container>
  );
}

export default Community1;
