import React, { useState } from "react";
import { BrowserRouter as Switch } from 'react-router-dom';
import "./addshow.css";
import { Grid, Box, Button, FormField, Form, TextInput, Table, TableRow, TableCell, TableBody, MaskedInput } from "grommet";
import { Image } from "grommet-icons";

const AddShow = (props) => {
    const [ name, setName ] = useState("");
    const [ date, setDate] = useState("");
    const [ stateLocation, setStateLocation] = useState("");
    const [ cityLocation, setCityLocation] = useState("");
    const [ venue, setVenue] = useState("");
    const [ mainPerformer, setMainPerformer] = useState("");
    const [ openingPerformer, setOpeningPerformer] = useState("");
    const [ tourName, setTourName] = useState("");
    const [ lengthOfShow, setLengthOfShow] = useState(0);
    const [ seatInformation, setSeatInformation] = useState("");
    const [ setList, setSetList] = useState("");
    const [ notes, setNotes] = useState("");

    let submitShow = (e) => {
        e.preventDefault();
        let url = "https://concertbook.herokuapp.com/concert/create"

        console.log(props.sessionToken);

        fetch(url, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
            }),
            body: JSON.stringify({
                concert: {    
                    name: name,
                    date: date,
                    stateLocation: stateLocation,
                    cityLocation: cityLocation,
                    venue: venue,
                    mainPerformer: mainPerformer,
                    openingPerformer: openingPerformer,
                    tourName: tourName,
                    lengthOfShow: lengthOfShow,
                    seatInformation: seatInformation,
                    setList: setList,
                    notes: notes
                }
            })
        }).then( res => res.json())
        .catch(err => console.error({message: err}))
    }


    return(
        <Switch>
            <React.Fragment>
                <div className="addShow">
                    <div className="mainDiv1">
                        <h1>So, give us the deets.</h1>
                        <br />
                            <Grid
                                rows={['small', 'small']}
                                columns={['large', 'small']}
                                gap="small"
                                areas={[
                                    { name: 'details', start: [0, 0], end: [0, 1] },
                                    { name: 'photos', start: [1, 0], end: [1, 1] },
                                ]}
                            >
                                <Box gridArea="details" background="light-1" overflow="hidden">
                                    <Box background={{ "color": "dark-3" }} size="small">
                                        <h2>Show Details</h2>
                                    </Box>
                                    <Form>
                                        <Table>
                                            <TableBody>
                                                <TableRow>
                                                <TableCell scope="row">
                                                    <FormField label="Concert Name">
                                                        <TextInput placeholder="" onChange={e => setName(e.target.value)} value={name} />
                                                    </FormField>
                                                </TableCell>
                                                <TableCell>
                                                    <FormField label="Concert Date">
                                                        <TextInput placeholder="" onChange={e => setDate(e.target.value)} value={date} />
                                                    </FormField>
                                                </TableCell>
                                                <TableCell>
                                                    <FormField label="State Name">
                                                        <TextInput placeholder="" onChange={e => setStateLocation(e.target.value)} value={stateLocation} />
                                                    </FormField>
                                                </TableCell>
                                                <TableCell>
                                                    <FormField label="City Name">
                                                        <TextInput placeholder="" onChange={e => setCityLocation(e.target.value)} value={cityLocation} />
                                                    </FormField>
                                                </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                <TableCell scope="row">
                                                    <FormField label="Venue">
                                                        <TextInput placeholder="" onChange={e => setVenue(e.target.value)} value={venue} />
                                                    </FormField>
                                                </TableCell>
                                                <TableCell>
                                                    <FormField label="Main Act">
                                                        <TextInput placeholder="" onChange={e => setMainPerformer(e.target.value)} value={mainPerformer} />
                                                    </FormField>
                                                </TableCell>
                                                <TableCell>
                                                    <FormField label="Opening Act">
                                                        <TextInput placeholder="" onChange={e => setOpeningPerformer(e.target.value)} value={openingPerformer} />
                                                    </FormField>
                                                </TableCell>
                                                <TableCell>
                                                    <FormField label="Tour Name">
                                                        <TextInput placeholder="" onChange={e => setTourName(e.target.value)} value={tourName} />
                                                    </FormField>
                                                </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                <TableCell scope="row">
                                                    <FormField label="Length of Show">
                                                        <TextInput placeholder="in Minutes!" onChange={e => setLengthOfShow(e.target.value)} value={lengthOfShow} />
                                                    </FormField>
                                                </TableCell>
                                                <TableCell>
                                                    <FormField label="Seat Information">
                                                        <TextInput placeholder="" onChange={e => setSeatInformation(e.target.value)} value={seatInformation} />
                                                    </FormField>
                                                </TableCell>
                                                <TableCell>
                                                    <FormField label="Set List">
                                                        <TextInput placeholder="" onChange={e => setSetList(e.target.value)} value={setList} />
                                                    </FormField>
                                                </TableCell>
                                                <TableCell>
                                                    <FormField label="Notes">
                                                        <TextInput placeholder="" onChange={e => setNotes(e.target.value)} value={notes} />
                                                    </FormField>
                                                </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    <Button type="submit" primary label="Submit" onClick={(e) => submitShow(e)} />
                                    </Form>
                                </Box>
                                <Box gridArea="photos" background="light-2" overflow="hidden">
                                    <Box background={{ "color": "dark-3" }} size="small" margin={{ "bottom": "5em" }}>
                                        <h2>Photos</h2>
                                    </Box>
                                    <Button
                                        alignSelf="center"
                                        icon={<Image />}
                                        margin={ "2em" }
                                        label="Upload"
                                        onClick={() => {}}
                                    />
                                </Box>
                            </Grid>
                    </div>
                </div>
            </React.Fragment>
        </Switch>
    );
}

export default AddShow;