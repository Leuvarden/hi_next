import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import FilterButtons from './../src/components/header/FilterButtons'
import SearchButton from './../src/components/header/SearchButton'
import './../static/styles/search-panel.scss'
import SearchForm from './../src/components/header/SearchForm'
import FilmPanel from './../src/components/main/FilmPanel'

import ContentItem from './../src/components/main/contentItems/ContentItem'
import ContentItemOld from './ContentItemOld'
import './../static/styles/content-area.scss'

const movie =         {
  'id':320288,
  'title':'X-Men: Dark Phoenix',
  'tagline':'',
  'vote_average':0,
  'vote_count':0,
  'release_date':'2019-02-14',
  'poster_path':'https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg',
  'overview':'Gathered together by Professor Charles Xavier to protect a world that fears and hates them, the X-Men had fought many battles, been on adventures that spanned galaxies, grappled enemies of limitless might, but none of this could prepare them for the most shocking struggle they would ever face. One of their own members, Jean Grey, has gained power beyond all comprehension, and that power has corrupted her absolutely! Now, they must decide if the life of the woman they cherish is worth the existence of the entire universe!',
  'budget':0,
  'revenue':0,
  'genres': ['Action','Science Fiction'],
  'runtime':null
}

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Example Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  let params = {
    searchBy:'title',
    query:'all'
  };
  
  storiesOf('Buttons', module)
  .add('to sort movies', () => 
    <FilterButtons 
      searchParams={params}
    />
  )
  .add('to search', () => 
    <SearchButton 
      searchParams={params} style={{float: 'left'}}
    />
  )

  storiesOf('Form', module)
  .add('to sort movies', () => (
    <div style={{width: '700px', backgroundColor: 'black', padding: '20px'}}>
      <SearchForm 
      searchParams={params}
    />
    </div>
  )
  )

  storiesOf('Content item', module)
  .add('to sort movies', () => 
    <ContentItem 
      movie={movie}
    />
  )
  .add('old ver', () => 
    <ContentItemOld movie={movie} />
  )

  storiesOf('FilmPanel item', module)
  .add('white', () => 
    <FilmPanel 
      movie={movie}
    />
  )
  .add('black', () => 
  (<div style={{backgroundColor: 'black', color: '#eee'}}><FilmPanel 
    movie={movie}
  /></div>)
)

  

