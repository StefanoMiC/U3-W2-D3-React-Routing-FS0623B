import { Component } from "react";
import withRouter from "../helpers/withRouter";
import { Button } from "react-bootstrap";

class ClassComponent extends Component {
  render() {
    console.log("PROPS", this.props);
    return (
      <div className={this.props.className}>
        Sono un class component, e ho un valore dinamico che è: {this.props.params.dynamicId}
        <div>
          <Button variant="primary" onClick={() => this.props.navigate("/")}>
            Torna a Home
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(ClassComponent);
