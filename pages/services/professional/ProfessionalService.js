import React from 'react';
import {
    MenuItem,
    Select,
  } from "@mui/material";

class ProfessionalService extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:8080/clintech/professional/list")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    change(event){
        this.setState({value: event.target.value});
    };

    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <><Select
                labelId="profissional"
                id="profissional"
                value={profissional}
                label="Profissional"
                onChange={this.change}
            >
                 {items.map(item => (
                     <MenuItem value={item.id}>{item.name} {item.lastname}</MenuItem>
                  ))}
            </Select>
            </>
        );
      }
    }
  }

  export default ProfessionalService;