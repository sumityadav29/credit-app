import React from 'react';

class GoBack extends React.Component {
    render() {
        return (
            <div class= 'gobackContainer'>
                <div>
                    <button
                    class = 'goback '
                    onClick = {() => {this.props.goBack()}}
                    >
                        &lt;&lt; Back
                    </button>
                </div>
            </div>
        );
    }
}

export default GoBack;