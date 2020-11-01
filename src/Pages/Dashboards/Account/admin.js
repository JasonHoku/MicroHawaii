/* This is an example snippet - you should consider tailoring it
to your service.
*/
/*
  Add these to your `package.json`:
    "apollo-boost": "^0.3.1",
    "graphql": "^14.2.1",
    "graphql-tag": "^2.10.0",
    "react-apollo": "^2.5.5"
*/

import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Query, ApolloProvider, Mutation } from "react-apollo";
import { gql, useQuery } from '@apollo/client';
import {
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  ListGroup,
  CardTitle,
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
  CardLink,
  CardImg,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";



// This setup is only needed once per application;
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.ponomap.com/graphql",
    headers: {
      "content-type": "application/json",
    },
  }),
});

const MY_QUERY_COPY_QUERY = gql`
query MyQueryCopy {
  ponoMaps {
    id
    User
    data1
    created_at
    User
  }
}
`;

const MyQueryCopyQuery = (props) => {
  return (
    <Query query={MY_QUERY_COPY_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <pre>Loading</pre>;
        if (error)
          return (
            <pre>
              Error in MY_QUERY_COPY_QUERY
              {JSON.stringify(error, null, 2)}
            </pre>
          );

        if (data) {
          return <pre>{JSON.stringify(data, null, 2)}</pre>;
        }
      }}
    </Query>
  );
};

export default class AdminElements extends Component {
  constructor(props) {
    super(props);
    this.submitContact = this.submitContact.bind(this);
    this.state = {
      formName: "",
      formEmail: "",
      formMessage: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitContact() {
    let { formName, formEmail, formMessage } = this.state;

    if (formName.length !== null && formName.length < 1) {
      alert("You must fill this form entirely.");
    } else {
      console.log("success");
    }
  }

  render() {
    let { formName, formEmail, formMessage } = this.state;
    const { data } = this.state;

    const MY_MUTATION_MUTATION = gql`
  mutation MyMutation {
    insert_microHawaii(objects: {email: "${formName}"}) {
      affected_rows
    }
  }
`;

    const MyMutationMutation = (props) => {
      return (
        <Mutation mutation={MY_MUTATION_MUTATION}>
          {(MyMutation, { loading, error, data }) => {
            if (loading) return <pre>Loading</pre>;

            if (error)
              return (
                <pre>
                  Error in MY_MUTATION_MUTATION
                  {JSON.stringify(error, null, 2)}
                </pre>
              );

            const dataEl = data ? (
              <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : null;

            return (
              <div>
                <br />
                {dataEl}

                <button onClick={() => MyMutation(formName)} disabled>
                  Query
                </button>
              </div>
            );
          }}
        </Mutation>
      );
    };
    return (
      <Fragment>
        <Container fluid>
          <ApolloProvider client={apolloClient}>
                    <Card
                      style={{
                        width: "26rem",
                        boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      }}
                    >
                      {" "}
                      <br /> <br />{" "}
                      <CardBody>
                        <Form>
                          <FormGroup row>
                            <Label for="examplePassword" sm={3}>
                              
                          
                            </Label>
                            <Col sm={8}>
                              <Input
                                type="input"
                                style={{ width: "170px" }}
                                name="formName"
                                value={this.state.formName}
                                onChange={this.handleInputChange}
                                id="formName"
                                placeholder="Admin Commands"
                              />
                            </Col>
                          </FormGroup>
                          <br />
                          <center>
                            <FormGroup check row>
                              <Col sm={{ size: 12 }}>
                                <MyMutationMutation />
                              </Col>
                            </FormGroup>
                          </center>
                        </Form>
                      </CardBody>
                    </Card>
                          <br />
                          <br />
                <Card
                  style={{
                    width: "26rem",
                    boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  }}
                >
                  <CardHeader> Query Result:</CardHeader>
                  <CardBody>


                  <MyQueryCopyQuery />


                  </CardBody>
                </Card>
          </ApolloProvider>
        </Container>
      </Fragment>
    );
  }
}
