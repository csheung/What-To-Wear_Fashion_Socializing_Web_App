import React, { useState } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { getPostsBySearch } from '../../actions/posts';
import Pagination from '../Pagination';
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

import useStyles from './styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    // older version of FETCH_POST
    // useEffect(() => {
    //     dispatch(getPosts());
    // }, [currentId, dispatch]);

    const searchPost = () => {
        if (search.trim() || tags) {
            // dispatch --> fetch search post
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            history.push(`/posts/v1/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            history.push('/');
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) { // Enter key
            searchPost();
        }
    }

    const handleAdd = (tag) => setTags([...tags, tag]);

    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    return (
        <Grow in>
            <Container maxWidth="xl">
                {/* <Grid className={classes.mainContainer} container direction="column-reverse" justifyContent="space-between" alignItems="stretch" spacing={3}> */}
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField 
                                name="search"
                                variant="outlined"
                                label="Search Outfits"
                                placeholder='Search By Keywords'
                                onKeyPress={handleKeyPress}
                                fullWidth
                                value={search}
                                onChange={(e) => {setSearch(e.target.value)}}
                            />
                            <ChipInput 
                                style={{margin: '10px 0'}}
                                variant="outlined"
                                label="Search Tags"
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                            />
                            <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                        </AppBar>

                        <Form currentId={currentId} setCurrentId={setCurrentId} />

                        {(!searchQuery && !tags.length) && (
                            <Paper className={classes.Pagination} elevation={6}>
                                <Pagination page={page} />
                            </Paper>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home
