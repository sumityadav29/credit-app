import React from 'react';

class GoBack extends React.Component {
    render() {
        return (
            <button
            onClick = {() => {this.props.goBack()}}
            >
                Go Back
            </button>
        );
    }
}

export default GoBack;