import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from './../../common/Error';
import ContentErrorItem from './ContentErrorItem';
import ContentLink from './../../../containers/ContentLink';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

let typo = (caption) => (
<Typography variant="headline" noWrap style={{width: 200, fontSize: '1.4rem'}}>
    {caption}
</Typography>
)

const ContentItem = ({movie, genres}) => {
    return (
        <ErrorBoundary 
            showOnError={ContentErrorItem()}>    
            <Card style={{width: 250, margin: '25px 10px 0px 10px'}}>
                <ContentLink id={movie.id} >
                    <CardMedia style = {{height: 350}}
                        image={movie.poster_path}
                        title={movie.title}
                    />
                </ContentLink>
                <CardHeader 
                    title={typo(<ContentLink id={movie.id}>{movie.title}</ContentLink>)} 
                />
                <CardContent style={{width: 200}}>
                    <Typography variant="headline" >
                        <span style={{fontSize: '0.9rem'}}>
                            {movie.genres.length > 1 ? `${movie.genres[0]} & ${movie.genres[1]}` : movie.genres[0]}
                        </span>
                        <Paper style={{ float: 'right', fontSize: '0.8rem', padding: '0px 5px'}}>
                            {movie.release_date.slice(0, 4)}
                        </Paper>
                    </Typography>
                </CardContent>
            </Card>
        </ErrorBoundary>
    );
};

ContentItem.propTypes = {
    movie: PropTypes.object
};

export default ContentItem;