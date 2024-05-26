import styled from 'styled-components';
import { useTextBook } from '../context/CurrentBookContext';
import { useEffect } from 'react';

const MainSection = styled.iframe`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3rem;
  width: 100%;
`;

const MainSectionCenterArea = styled.div`
  width: 100%;
  margin: 3rem 8rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MainSectionCenterAreaHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 2rem;
`;

const CurrentChapter = styled.p`
  font-size: 1.8rem;
  font-family: EB Garamond;
`;
const SubHeading = styled.h2`
  font-family: EB Garamond;
  font-weight: bold;
  font-size: 2.8rem;
`;

const MainSectionCenterAreaContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Paragraph = styled.p`
  text-align: justify;
  font-size: 1.4rem;
`;

function BookDetailMain() {
  const { currentText } = useTextBook();
  const { url } = currentText;

  useEffect(() => {
    const loadGoogleBooksApi = () => {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/books/jsapi.js';
      script.onload = initializeGoogleBooksViewer;
      document.body.appendChild(script);
    };

    const initializeGoogleBooksViewer = () => {
      if (window.google) {
        window.google.books.load();
        window.google.books.setOnLoadCallback(() => {
          const viewer = new window.google.books.DefaultViewer(
            document.getElementById('viewerCanvas')
          );
          viewer.load('qPqzUxfo9KcC');
        });
      }
    };

    loadGoogleBooksApi();
  }, []);

  console.log(url);
  return (
    <>
      {url ? (
        <div id="viewerCanvas" style={{ width: '100%', height: '800px' }}></div>
      ) : (
        <MainSection>
          <MainSectionCenterArea>
            <MainSectionCenterAreaHeading id="displaySection">
              <CurrentChapter>Chapter 1</CurrentChapter>
              <SubHeading>What is Virology?</SubHeading>
            </MainSectionCenterAreaHeading>
            <MainSectionCenterAreaContent>
              <Paragraph>
                Defending against future pandemics requires vaccine platforms
                that protect across a range of related pathogens. Nanoscale
                patterning can be used to address this issue. Here, we produce
                quartets of linked receptor-binding domains (RBDs) from a panel
                of SARS-like betacoronaviruses, coupled to a computationally
                designed nanocage through SpyTag/SpyCatcher links. These Quartet
                Nanocages, possessing a branched morphology, induce a high level
                of neutralizing antibodies against several different
                coronaviruses, including against viruses not represented in the
                vaccine. Equivalent antibody responses are raised to RBDs close
                to the nanocage or at the tips of the nanoparticle’s branches.
                In animals primed with SARS-CoV-2 Spike, boost immunizations
                with Quartet Nanocages increase the strength and breadth of an
                otherwise narrow immune response. A Quartet Nanocage including
                the Omicron XBB.1.5 ‘Kraken’ RBD induced antibodies with binding
                to a broad range of sarbecoviruses, as well as neutralizing
                activity against this variant of concern. Quartet nanocages are
                a nanomedicine approach with potential to confer heterotypic
                protection against emergent zoonotic pathogens and facilitate
                proactive pandemic protection.
              </Paragraph>
              <br />
              <Paragraph>
                Only some antigens are shown in the schematic for clarity. b,
                Phylogenetic tree of sarbecoviruses used in this study, based on
                RBD sequence. c, Genetic organization of the multiviral
                Quartet-SpyTag, indicating the viral origin of RBDs, N-linked
                glycosylation sites and tag location. d, Analysis of
                Quartet-SpyTag with SDS–PAGE/Coomassie staining, with or without
                PNGase F deglycosylation. A representative gel from two
                independent experiments. Molecular weight markers are in kDa. e,
                Coupling of RBD Quartet to SpyCatcher003-mi3 Nanocage at
                different molar Nanocage:antigen ratios, analysed by
                SDS–PAGE/Coomassie. A representative gel from two independent
                experiments. Molecular weight markers are in kDa.
              </Paragraph>
            </MainSectionCenterAreaContent>
          </MainSectionCenterArea>
        </MainSection>
      )}
    </>
  );
}

export default BookDetailMain;
