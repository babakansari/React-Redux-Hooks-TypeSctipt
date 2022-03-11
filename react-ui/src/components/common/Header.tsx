import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Header = () => {
  return (
    <nav>
      <ButtonGroup color="inherit" >
        <Button 
          component={RouterLink} 
          to="/">
            Home
        </Button>
        {" | "}
        <Button 
          component={RouterLink} 
          to="rostering">
            Rosters
        </Button>
        {" | "}
        <Button 
          component={RouterLink} 
          to="Crew">
            Crew
        </Button>
        {" | "}
        <Button 
          component={RouterLink} 
          to="about">
            About
        </Button>

      </ButtonGroup>
    </nav>
  );
};

export default Header;
