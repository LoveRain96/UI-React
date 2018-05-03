import React from "react";
import {
    Container,
    Table,
    Button,
    Collapse,
    Card,
    CardBody,
    Input,
    Label,
    Form} from 'reactstrap'

import axios from  'axios'
export  default class Course extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            courses : [],
            collapse: false,
            name: '',
            startDate : '',
            endDate: ''
        };
        this.nameChange = this.nameChange.bind(this);
        this.startDateChange = this.startDateChange.bind(this);
        this.endDateChange = this.endDateChange.bind(this)
    }
    toggle() {
        this.setState({collapse : !this.state.collapse});
    }

    componentDidMount() {
        axios.get('/courses')
            .then(res => {
                const courses = res.data;
                this.setState({courses});
            }).catch(error => {
            console.log(error);
        });
    }
    nameChange(event) {
        this.setState({name: event.target.value })
    }
    startDateChange(event) {
        this.setState({startDate: event.target.value })
    }
    endDateChange(event) {
        this.setState({endDate: event.target.value })
    }
    handleClick(e) {
        e.preventDefault();

        /*let course = {
            name: this.state.name,
            startDate : this.state.startDate,
            endDate  : this.state.endDate
        };
*/
        axios.post('/course', {
            name: this.state.name,
            startDate : this.state.startDate,
            endDate  : this.state.endDate})
            .then(() => {
            window.location.href = '/courses';
        })
    }
    render() {
        return(
            <Container>
                <Table>
                    <thead>
                    <tr>
                        <td> STT </td>
                        <td> NAME </td>
                        <td> START_DATE </td>
                        <td> END_DATE </td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.courses.map(course =>
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.name}</td>
                            <td>{course.duration.startDate}</td>
                            <td>{course.duration.endDate}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
                <div>
                    <Button onClick={this.toggle} style ={{marginBottom:'1rem'}} >ADD</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <Form onSubmit={this.handleClick.bind(this)}>
                                    <Label>Name</Label>
                                    <Input name="name" type="text" onChange={this.nameChange} placeholder="Enter name course"/>
                                    <Label>Start_Date</Label>
                                    <Input onChange={this.startDateChange} name="startDate" type="date"/>
                                    <Label>End_Date</Label>
                                    <Input onChange={this.endDateChange} name="endDate" type={"date"}/>
                                    <br/>
                                    <Button>SAVE</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </Container>
        )
    }

}