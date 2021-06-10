import Container from "./components/Container";
import Section from "./components/Section";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { Component } from "react";
import { connect } from "react-redux";
import operations from "./redux/phonebook/operations";
import selectors from "./redux/phonebook/selectors";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <Container>
        <Section title={"Phonebook"}>
          <ContactForm />
        </Section>
        <Section title={"Contacts"}>
          <Filter  />
          {this.props.isLoading && <p>Loading...</p>}
          <ContactList/>
        </Section>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: selectors.getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
