import React from "react";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

const HomePage = () => (
  <div className="jumbotron">
    <Typography variant="h2">Net Jets Project Home Page</Typography>
    <Typography variant="caption">React, Redux and Axios using Type Script</Typography>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
