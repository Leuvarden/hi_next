import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

const searches = ['title', 'genres'];

const FilterButtons = ({ searchParams, setSearchParams,classes }) => searches.map((name) => 

        <Button
            key={name}
            color="secondary" variant="contained"
            disabled= {name === searchParams.searchBy}
            className={classes.buttonFilter}
            style={{
                color: name === searchParams.searchBy ? pink[400] : 'white',
                backgroundColor: name === searchParams.searchBy ? pink [700] : pink[500],
                margin: '5px'
            }}
            onClick={() => setSearchParams({
                query: searchParams.query, 
                searchBy: name
            })}
        >
            {name}
        </Button>

    )


const styles = (theme) => ({
    buttonFilter: {
        '&:disabled': {
            backgroundColor: pink[700],
            color: pink[400]
          }
    },
  });

export default withStyles(styles)(FilterButtons);
