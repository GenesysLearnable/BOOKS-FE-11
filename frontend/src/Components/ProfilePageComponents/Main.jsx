import styled from 'styled-components';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const SectionContainer = styled.div`
  flex-grow: 1;
  padding: 2rem 0 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border-left: 0.05rem solid #ced4da;
`;

const Section = styled.section`
  font-size: 1.4rem;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  gap: 2rem;
`;

function Main() {
  return (
    <SectionContainer>
      <Section>
        <Section1 />
      </Section>
      <Section>
        <Section2 />
      </Section>
      <Section>
        <Section3 />
      </Section>
      <Section></Section>
    </SectionContainer>
  );
}

export default Main;
