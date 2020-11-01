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

import gql from "graphql-tag";
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Query, ApolloProvider, Mutation } from "react-apollo";

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
    uri: "https://api.ponomap.com/pono-maps",
    headers: {
      "content-type": "application/json",
    },
  }),
});

const MY_QUERY_COPY_QUERY = gql`
  query MyQueryCopy {
    ponoMap(order_by: {}) {
      email
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
          return <pre>{JSON.stringify(data.microHawaii, null, 2)}</pre>;
        }
      }}
    </Query>
  );
};

export default class AccountElements extends Component {
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
                      Features Coming Soon!
                      </CardBody>
                    </Card>
                          <br />
                          <br />
              
          </ApolloProvider>
        </Container>
      </Fragment>
    );
  }
}
