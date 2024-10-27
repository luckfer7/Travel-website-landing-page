import './App.css';
import Category from './Components/Category';
import CategorySection from './Components/CategorySection';
import ContainerCategories from './Components/ContainerCategories';
import Section from './Components/FirstSection/FirstSection';
import Header from './Components/Header/Header'
import MainTitle from './Components/MainTitle';
import MinorTitle from './Components/MinorTitle';
import SecondSection from './Components/SecondSection';

function App() {

  return (
    <>
      <Section>
        <Header />
        <SecondSection />
      </Section>
      <Section>
        <CategorySection>
          <MinorTitle>CATEGORY</MinorTitle>
          <MainTitle>We Offer Best Services</MainTitle>
          <ContainerCategories>
            <Category></Category>
          </ContainerCategories>
        </CategorySection>
      </Section>
    </>
  )
}

export default App
