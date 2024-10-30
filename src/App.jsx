import './App.css';
import BookingTripContainer from './Components/BookingTripContainer';
import Category from './Components/Categories/Category';
import CategoryFour from './Components/Categories/CategoryFour';
import CategoryThree from './Components/Categories/CategoryThree';
import CategoryTwo from './Components/Categories/CategoryTwo';
import CategorySection from './Components/CategorySection';
import ContainerCategories from './Components/ContainerCategories';
import Section from './Components/FirstSection/FirstSection';
import Header from './Components/Header/Header'
import ImageContainer from './Components/imageContainer';
import MainTitle from './Components/MainTitle';
import MinorTitle from './Components/MinorTitle';
import SecondSection from './Components/SecondSection';
import StyledSphericalContainer from './Components/SphericalContainer';


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
          <ContainerCategories showRectangle={true} >
            <Category />
            <CategoryTwo />
            <CategoryThree />
            <CategoryFour />
          </ContainerCategories>
        </CategorySection>
      </Section>
      <Section>
        <CategorySection>
          <MinorTitle>Top Selling</MinorTitle>
          <MainTitle>Top Destinations</MainTitle>
          <ContainerCategories >
            <StyledSphericalContainer />
          </ContainerCategories>
        </CategorySection>
      </Section>
      <Section>
        <CategorySection changeDirection={true}>
          <BookingTripContainer />
          <ImageContainer />
        </CategorySection>
      </Section>
    </>
  )
}

export default App
