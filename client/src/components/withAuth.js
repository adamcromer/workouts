import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default function withAuth(ComponentToProtect) {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loading: true,
                redirect: false
            };
        }

        componentDidMount() {
            fetch('/checkToken')
                .then(res => {
                    if (res.status === 200) {
                        var thisToken = document.cookie.split('=')[1];
                        var base64Url = thisToken.split('.')[1];
                        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                        var decodedToken = JSON.parse(window.atob(base64));
                        this.setState({ loading: false, email: decodedToken.email });
                    } else {
                        const error = new Error(res.error);
                        throw error;
                    }
                })
                .catch(err => {
                    console.error(err);
                    this.setState({ loading: false, redirect: true });
                });
        }
        
        render() {
            const { loading, redirect } = this.state;
            if (loading) {
                return null;
            }
            if (redirect) {
                return <Redirect to="/login" />;
            }
            return (
                <React.Fragment>
                    <ComponentToProtect {...this.props } email={this.state.email} />
                </React.Fragment>
            );
        }
    }
}