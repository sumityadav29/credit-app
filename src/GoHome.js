import React from 'react';

class GoHome extends React.Component {
    render() {
        return(
            <div class= 'gobackContainer'>
                <div>
                    <button
                    class = 'goback '
                    onClick = {() => {this.props.goHome()}}
                    >
                        &lt;&lt; Home
                    </button>
                </div>
            </div>
        );
    }
}

export default GoHome;