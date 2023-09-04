  import React from "react";
  import "../styles/Main.scss";
  import { AnimatedPage } from "./Animation";
  import { TicketContent } from "./TicketContent";
  import { Slidingmenu } from "./Slidingmenu";

  export const Tickets = (({
    isMenuOpen,
    setIsMenuOpen,
    headerTitle,
    setHeaderTitle,
  }) => {
    return (
      
        <div className={`main-container ${isMenuOpen ? 'menu-open' : ''}`}>
          <Slidingmenu 
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen}
            setHeaderTitle={setHeaderTitle}
          />
          <AnimatedPage>
            <TicketContent
              isMenuOpen={isMenuOpen} 
              setIsMenuOpen={setIsMenuOpen}
              setHeaderTitle={setHeaderTitle}
              headerTitle={headerTitle}
            />
          </AnimatedPage>
        </div>
    )
  })
