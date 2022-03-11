import React from "react";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

const HomePage = () => (
  <div>
    <Typography variant="h2">Project Home Page</Typography>
    <Typography variant="caption">React, Redux and Axios using Type Script</Typography>
    <Link to="about">
      Learn more
    </Link>
  </div>
);

export default HomePage;
