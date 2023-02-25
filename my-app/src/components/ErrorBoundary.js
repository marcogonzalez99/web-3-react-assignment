import React, { Component, } from 'react';
import { Link } from 'react-router-dom';
class ErrorBoundary extends Component {
    // This class takes care of any errors that may come up regarding the Star rating or a bad fetch. It displays a simple red menu that can direct the user back to the home page
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // This allows the user to manually refresh the page after redirecting back to the home page
    handleRefresh = () => {
        window.location.reload();
    }
    

    render() {
        if (this.state.hasError) {
        return (
            // Simple button that returns to home, and refreshes the page
            <div className="p-4 bg-red-100 border border-red-400 text-red-700">
            <p>Oops! Something went wrong.</p>
            <Link to='/home'><button className='text-white text-xl bg-[#3aafa9] mt-5 px-5 py-2 rounded-md hover:bg-sky-700'>Return To Home</button></Link>
            <button onClick={this.handleRefresh}className='text-white text-xl bg-[#3aafa9] mt-5 ml-5 px-5 py-2 rounded-md hover:bg-sky-700'>Refresh Page</button>
            </div>
        );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
