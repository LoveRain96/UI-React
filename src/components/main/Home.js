import React from "react";
import { Table } from 'react-bootstrap';
import { Container, Button } from 'reactstrap';
import axios from  'axios'

export  default class Home extends React.Component{
    state = {
        courses : []
    };

    componentDidMount() {
        axios.get('/courses')
            .then(res => {
                const courses = res.data;
                this.setState({courses});
            }).catch(error => {
            console.log(error);
        });
    }

    onClickDelete(e) {
        const id = e.target.key;
        console.log(id);

    }

    onClickEdit() {

    }
    render() {
        return(
            <Container>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <td> STT </td>
                        <td> NAME </td>
                        <td> START_DATE </td>
                        <td> END_DATE </td>
                        <td> EVENT </td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.courses.map(course =>
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.name}</td>
                            <td>{course.duration.startDate}</td>
                            <td>{course.duration.endDate}</td>
                            <td>
                                <Button color="danger"  onClick={this.onClickDelete.bind(this)}> DELETE </Button>
                                <Button color="success" onClick={this.onClickEdit.bind(this)}> EDIT </Button>
                            </td>
                        </tr>)}
                    </tbody>
                </Table>
            </Container>
        )
    }

}