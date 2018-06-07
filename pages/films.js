import React, { Component } from 'react'
import Page from './../src/components/Page'
import FilmPageContainer from './../src/containers/FilmPageContainer'
import './../static/styles/body.scss'

export default class extends React.Component {
    static getInitialProps ({ query: { id } }) {
      return { id }
    }
  
    render () {
      return <div>
         <Page>
             <FilmPageContainer id={this.props.id}/>
         </Page>
      </div>
      
    }
  }