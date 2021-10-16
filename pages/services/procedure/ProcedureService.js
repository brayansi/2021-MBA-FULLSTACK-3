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
        procedure: 0
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

    render() {
      const { error, isLoaded, items } = this.state;

      items.unshift({
          id: 0,
          key: 0,
          name: "Selecione o Procedimento"
      });

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <>  {items.map(item => (
                     <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                  ))}
            </>
        );
      }
    }
  }

  export default ProcedureService;