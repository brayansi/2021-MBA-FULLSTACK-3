import React from 'react';
import {
    MenuItem,
    Select,
  } from "@mui/material";

class ProcedureService extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        procedure: "Procedimento"
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:8080/clintech/procedure/list")
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
  
    setProcedure(value){
        this.state.procedure = value;
    };

    change(event){
        this.setProcedure({value: event.target.value});
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
                labelId="procedure"
                id="procedure"
                value={this.state.procedure}
                label="Procedure"
                onChange={this.change}
            >
                 {items.map(item => (
                     <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
            </Select>
            </>
        );
      }
    }
  }

  export default ProcedureService;