import '../styles/Main.scss';
import { Searchbar } from "./Searchbar";
import { Header } from "..components/Header";
import { CollectionContent } from "./CollectionContent";
import { Slidingmenu } from "./Slidingmenu";
import { AnimatedPage } from "../components/Animation";

export const Collections = (({
  isMenuOpen,
  setIsMenuOpen,
  setHeaderTitle,
  headerTitle
}) => {
  return (
    <div className={`main-container ${isMenuOpen ? 'menu-open' : ''}`}>
      <Slidingmenu 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen} 
        setHeaderTitle={setHeaderTitle}
      />
      <AnimatedPage>
        <div className={
          `collection-smaller-container main-content 
          ${isMenuOpen ? 'content-hidden' : ''}`
          }>
          <Header
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen} 
            headerTitle={headerTitle} 
            setHeaderTitle={setHeaderTitle}    
          />
          <div className='content-container'>
            <Searchbar/>
            <CollectionContent/>
          </div>
        </div>
      </AnimatedPage>
    </div>
  )
})