import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { getSuggestedQuery } from "@testing-library/dom";
import axios from "axios";
// import { Link } from "react-router-dom";

const UserDetail = ({ match, history }) => {
  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        let res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${match.params.id}`
        );
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    getUser();
  }, [match.params.id]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(user);

  return (
    <div>
      {" "}
      {loading ? (
        "loading"
      ) : error ? (
        "error"
      ) : !user ? (
        "not found"
      ) : (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {user.name}
            </Typography>
            <Typography variant="h5" component="div">
              {user.username}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {user.email}
            </Typography>
            <Typography variant="body2">
              {user.phone}
              <br />
              {/* {'"a benevolent smile"'} */}
            </Typography>
            <Typography variant="h5" component="div">
              {user.address.street}
            </Typography>
            <Typography variant="h5" component="div">
              {user.address.city}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => history.goBack()} size="small">
              Goback
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default UserDetail;
