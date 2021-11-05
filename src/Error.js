import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class Error extends React.Component {
refreshPage = () => {
    window.location.reload();
}
render() {
    return (
      <div>
        <Alert>
          <h1>Mistakes from you? No Way.</h1>
          <p id="errorMessage">{this.props.error}</p>
          <Button onClick={this.refreshPage} variant="danger" type="submit">
            Try your search again
          </Button>
        </Alert>
      </div>
    );
  }
}

export default Error;