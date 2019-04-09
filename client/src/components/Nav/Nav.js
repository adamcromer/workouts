import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
        state = {
          open: false,
          width: window.innerWidth
        };
      
        updateWidth = () => {
          const newState = { width: window.innerWidth };
      
          if (this.state.open && newState.width > 991) {
            newState.open = false;
          }
      
          this.setState(newState);
        };
      
        toggleNav = () => {
          this.setState({ open: !this.state.open });
        };
      
        componentDidMount() {
          window.addEventListener("resize", this.updateWidth);
        }
      
        componentWillUnmount() {
          window.removeEventListener("resize", this.updateWidth);
        }
      
        render() {
          return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
              <Link className="navbar-brand" to="/">
                Workouts
              </Link>
            </nav>
          );
        }
      }
      
      export default Nav;