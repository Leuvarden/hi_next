import React, { Component } from 'react'
import Page from './../components/Page'
import FilmPageContainer from './../containers/FilmPageContainer'
import './../scss/body.scss'

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

// const Film = ({ url: { query: { id } } }) => {
//     // console.log(url)
//     return (
//         <Page>
//             <FilmPageContainer id={id}/>
//         </Page>
//     )
// }

// export default Film;

// export default class extends React.Component {
//     static getInitialProps ({ query: { id } }) {
//       return { id }
//     }
  
//     render () {
//       return <div>
//         <h1>My {this.props.id} blog post</h1>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua.
//         </p>
//       </div>
//     }
//   }