import styled from 'styled-components';
import { HiDotsVertical } from 'react-icons/hi';

import book1 from '../../Images/book1.png';
import book2 from '../../Images/book2.png';
import book3 from '../../Images/book3.png';

const BioDataCon = styled.div`
  flex-basis: 40rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  padding: ${(props) => props.variance && '2rem'};
`;

const Title = styled.div`
  font-size: 1.2rem;
  color: #5c6066;
`;

const BioInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
`;

const EduDataCon = styled.div`
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 2rem 0 2rem;
  gap: 2rem;
  margin-right: 2rem;
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  border-bottom: 0.1rem solid #549d54;
  padding: 0.3rem 0;
  color: #549d54;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
`;

const HighlightsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Highlights = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
`;

const Details = styled.div`
  max-width: 60rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const ImgBook = styled.img`
  max-width: 8%;
  height: 7rem;
`;

const BookDetail = styled.div`
  max-width: 80%;
`;

const BtnCon = styled.div`
  margin-left: auto;
`;

function Section2() {
  return (
    <>
      <BioDataCon variance="true">
        <Title>About</Title>
        <BioInfo>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit, alias. Vel earum, magnam qui laboriosam, sed cum ex
            sapiente quia, ab veritatis
          </p>
          <Contacts>
            <Contact>
              <span>Email :</span> <span>Williams@gmail.com</span>
            </Contact>
            <Contact>
              <span>Phone Number :</span>
              <span> +234 7033881144</span>
            </Contact>
          </Contacts>
        </BioInfo>
      </BioDataCon>
      <EduDataCon>
        <Heading>
          <Title>Highlights</Title>
          <BtnCon>
            <Button farRight="true" variance="true">
              View all Highlights
            </Button>
          </BtnCon>
        </Heading>
        <HighlightsContainer>
          <Highlights>
            <Details>
              <ImgBook src={book1} alt="book-cover" />
              <BookDetail>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                quo eos reiciendis nobis expedita natus aut quae ullam aliquam
                omnis ad, error, sed similique perferendis temporibus cumque
                dolore?
              </BookDetail>
            </Details>
            <div>
              <HiDotsVertical />
            </div>
          </Highlights>
          <Highlights>
            <Details>
              <ImgBook src={book3} alt="book-cover" />
              <BookDetail>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                quo eos reiciendis nobis expedita natus aut quae ullam aliquam
                omnis ad, error, sed similique perferendis temporibus cumque
                dolore?
              </BookDetail>
            </Details>
            <div>
              <HiDotsVertical />
            </div>
          </Highlights>
          <Highlights>
            <Details>
              <ImgBook src={book2} alt="book-cover" />
              <BookDetail>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                quo eos reiciendis nobis expedita natus aut quae ullam aliquam
                omnis ad, error, sed similique perferendis temporibus cumque
                dolore?
              </BookDetail>
            </Details>
            <div>
              <HiDotsVertical />
            </div>
          </Highlights>
        </HighlightsContainer>
      </EduDataCon>
    </>
  );
}

export default Section2;
