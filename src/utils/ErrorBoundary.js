import React, { Component } from 'react';
import log from 'loglevel';
// import remote from 'loglevel-plugin-remote';

// const customJSON = (log) => ({
//   msg: log.message,
//   level: log.level.label,
//   stacktrace: log.stacktrace,
// });

// remote.apply(log, { format: customJSON, url: '/logger' });
// log.enableAll();

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // log.error({ error, info });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong!</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
