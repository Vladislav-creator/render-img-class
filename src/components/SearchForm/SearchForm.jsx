import { Component } from "react";


import  { SearchbarHeader, Form, Button, Input } from "./SearchForm.styled";

export class SearchForm extends Component {
  state = {
    query: "",
  };
  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    const { query } = this.state;
    e.preventDefault();
    if (query.trim() === "") {
      return alert("Sorry can not be empty");
    }
    this.props.onSubmit(query);
    this.setState({ query: "" });
  };

  render() {
    const { query } = this.state;

    return (
        <SearchbarHeader className="searchbar">
        <Form className="form" onSubmit={this.handleSubmit}>
          <Input
            className="input"
            type="text"
            autocomplete="off"
            autoFocus
            required
            placeholder="Search images and photos"
            name="search"
            value={query}
            onChange={this.handleChange}
          />

          <Button type="submit" className="button">
            <span className="button-label">Search</span>
          </Button>
        </Form>
      </SearchbarHeader>
    );
  }
}

/* <SearchFormStyled onSubmit={this.handleSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          placeholder="What do you want to write?"
          name="search"
          value={query}
          onChange={this.handleChange}
          required
          autoFocus
        />
      </SearchFormStyled> */