import React from "react";

const user = [
  {
    id: 1,
    name: "user 1",
  },
  {
    id: 2,
    name: "user 2",
  },
  {
    id: 3,
    name: "user 3",
  },
];

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(">>> contructor >>>");
    this.state = {
      list: [],
    };

    this.isComponentMounted = false;
  }

  async componentDidMount() {
    this.isComponentMounted = true;

    console.log(">>> componentDidMount");
    setTimeout(() => {
      this.setState({
        list: user,
      });
    }, 3000);
  }

  componentWillUnmount(){
    this.isComponentMounted = false;
  }

  render() {
    const { list } = this.state;

    console.log(">>> Render: ");

    return (
      <>
        <h1>LifeCycle component</h1>
        <ul>
          {this.isComponentMounted == true ? list.map((value) => {
            return <li key={value.id}>{value.name}</li>;
          }): <p>Loading ...</p>}
        </ul>
      </>
    );
  }
}

export default App;

// destructuring ES6 trich xuat list trong this.state
// this.state -> state cua conponent
// render: re-render
