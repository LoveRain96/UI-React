import React from "react";
import {Container, Table} from 'reactstrap'
import axios from  'axios'

export  default class Company extends React.Component{
    state = {
        companies : []
    };

    componentDidMount() {
        axios.get('/companies')
            .then(res => {
                const companies = res.data;
                this.setState({companies});
            }).catch(error => {
            console.log(error);
        });
    }
    render() {
        return(
            <Container>
                <Table>
                    <thead>
                    <tr>
                        <td> STT </td>
                        <td> NAME </td>
                        <td> Phone_Manager </td>
                        <td> Name_Manager </td>
                        <td> Email_Manager </td>
                        <td> Address </td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.companies.map(company =>
                        <tr key={company.id}>
                            <td>{company.id}</td>
                            <td>{company.name}</td>
                            <td>{company.contact.phone}</td>
                            <td>{company.nameManager}</td>
                            <td>{company.contact.email}</td>
                            <td>{company.address}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </Container>
        )
    }

}