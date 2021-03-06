import { Component } from 'react'
import PropTypes from 'prop-types'
  
class ErrorBoundary extends Component {
    constructor (props) {
        super(props)
        this.state = { hasError: false }
    }

    componentDidCatch (error) {
        this.setState({ hasError: true })
        console.warn(error) 
    }
    render () {
        if (this.state.hasError) {
            return this.props.showOnError || null
        }
        return this.props.children || null
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.any,
    showOnError: PropTypes.object
}

export default ErrorBoundary