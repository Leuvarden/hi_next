import Page from './../components/Page'
import MainPage from './../components/MainPage'
import './../scss/body.scss'

const Index = () => {
    return (
        <Page>
            <MainPage />
        </Page>
    )
}

export default Index;

// import Link from 'next/link'

// export default () => (
//   <ul>
//     <li><Link href='/films?id=first' as='/films/first'><a>My first blog post</a></Link></li>
//     <li><Link href='/films?id=second' as='/films/second'><a>My second blog post</a></Link></li>
//     <li><Link href='/films?id=last' as='/films/last'><a>My last blog post</a></Link></li>
//   </ul>
// )
