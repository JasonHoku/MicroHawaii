import React, { Component, Fragment, useEffect } from "react";


import {
  Row,
  Col,
  Button,
  ListGroupItem,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Container,
  Input,
  FormText,
  CardHeader,
  CardTitle,
  CardLink,
  CardImg,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";

class NoteManagerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteVar: "",
      deleteIDVar: "26",
    };
  }


  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  getData() {
    console.log("Check Survey Data");
    try {
      this.state.authVar = axios
        .get(`https://api.microHawaii.com/surveys`, {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((res) => {
          if (res.err == null) {
            this.setState({ textvar: JSON.stringify(res) });
          }
          localStorage.setItem(
            "NewSurveyCount",
            String(JSON.parse(JSON.stringify(res.data)).length)
          );
          let concData = "";
          for (
            var i = 0;
            i < JSON.parse(JSON.stringify(res.data)).length;
            i++
          ) {
            concData =
              concData +
              "\r\n ID#" +
              JSON.stringify(JSON.parse(JSON.stringify(res.data))[i].id) +
              " : " +
              JSON.stringify(JSON.parse(JSON.stringify(res.data))[i].Answers);

            this.state.textVar = concData
              .split("\n")
              .map((str, index) => <h5 key={index}>{str}</h5>);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }

  handleInputChange(event) {
    this.setState({
      noteVar: event.target.value,
    });
  }
  handleInputChange2(event) {
    this.setState({
      deleteIDVar: event.target.value,
    });
  }

  onSubmit = () => {
    const formData = new FormData();
    formData.Answers = this.state.noteVar;

    axios
      .post(`https://api.microhawaii.com/surveys`, JSON.stringify(formData), {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => {
        if (res.err == null) {
          document.getElementById("apiupform").hidden = false;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onSubmitDelete = () => {
    const formData = new FormData();
    formData.Note = this.state.noteVar;
    formData.id = 21;
    console.log(formData);

    axios
      .post(`https://api.microhawaii.com/surveys`, JSON.stringify(formData), {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => {
        if (res.err == null) {
          alert("Success!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onImageChange = (event) => {
    console.log(event.target.files);

    this.setState({
      images: event.target.files,
    });
  };

  render() {
    let { formName, formDesc, formEmail, formMessage } = this.state;
    const { data } = this.state;

    const MY_MUTATION_MUTATION = gql`
      mutation DeleteNote {
        deleteSurvey(input: { where: { id: ${this.state.deleteIDVar} } }) {
          survey {
            id
          }
        }
      }
    `;

    const MyMutationMutation = (props) => {
      try {
        return (
          <Mutation mutation={MY_MUTATION_MUTATION}>
            {(MyMutation, { loading, error, data }) => {
              try {
                if (loading) return <pre>Loading</pre>;

                if (error) {
                }
              } catch (error) {}
              const dataEl = data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
              ) : null;

              return (
                <button
                  onClick={() =>
                    MyMutation(formName + formDesc, Date().toString())
                  }
                >
                  Delete Answer #
                </button>
              );
            }}
          </Mutation>
        );
      } catch (error) {}
    };

    return (
      <Fragment>
        <CardHeader>Survey Manager</CardHeader>
        <CardBody>
          <div
            style={{
              boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
            }}
          >
            <span>{this.state.textVar}</span>
          </div>
          <input
            type="number"
            onChange={() => this.handleInputChange2(event)}
            style={{ width: "50px" }}
          ></input>{" "}
          &nbsp;

          <br />
          <Input
            value={this.state.noteVar}
            name="NoteVar"
            id="NoteVar"
            onChange={() => this.handleInputChange(event)}
            style={{ top: "15px", position: "relative" }}
            type="textarea"
          ></Input>{" "}
          &nbsp;
          <button onClick={() => this.onSubmit()}> Send</button> <br />
        </CardBody>
        <br />
      </Fragment>
    );
  }
}
export default NoteManagerComponent;
