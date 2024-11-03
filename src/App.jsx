import './App.css';
import BookingTripContainer from './Components/BookingTripContainer';
import Category from './Components/Categories/Category';
import CategoryFour from './Components/Categories/CategoryFour';
import CategoryThree from './Components/Categories/CategoryThree';
import CategoryTwo from './Components/Categories/CategoryTwo';
import CategorySection from './Components/CategorySection';
import CommentsContainer from './Components/CommentsContainer';
import ContainerCompanies from './Components/Companies';
import ContainerCategories from './Components/ContainerCategories';
import Footer from './Components/Footer';
import Header from './Components/Header/Header'
import ImageContainer from './Components/imageContainer';
import MainTitle from './Components/MainTitle';
import MinorTitle from './Components/MinorTitle';
import SecondSection from './Components/SecondSection';
import StyledSphericalContainer from './Components/SphericalContainer';
import Subscribe from './Components/Subscribe';


function App() {

  return (
    <>
      
        <Header />
        <SecondSection />
      
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
      
        <CategorySection>
          <MinorTitle>Top Selling</MinorTitle>
          <MainTitle>Top Destinations</MainTitle>
          <ContainerCategories >
            <StyledSphericalContainer />
          </ContainerCategories>
        </CategorySection>
      
        <CategorySection changeDirection={true}>
          <BookingTripContainer />
          <ImageContainer />
        </CategorySection>
  
        <CategorySection changeDirection={true}>
          <CommentsContainer />
        </CategorySection>
      
      
      <ContainerCompanies />
      
        <Subscribe />
    
      
      <Footer/>      
    </>
  )
}

export default App
