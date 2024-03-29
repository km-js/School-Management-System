import { CardContent, Typography, Card, Grid, TextField, Button } from "@mui/material";

const Form = () => {
    return (
        <>
            <div className="content">
                <Typography gutterBottom variant="h4" align="center">
                    REGISTRATION FORM
                </Typography>
                <Card style={{ maxWidth: 450, margin: '0 auto', padding: '10px 5px' }}>
                    <CardContent>
                        <form>
                            <Grid container spacing={3}>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="FirstName" size="small" placeholder="Enter Your FirstName" variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} sm={6} item>
                                    <TextField label="LastName" size="small" placeholder="Enter Your LastName" variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} item>
                                    <TextField type="Email Id" label="Email" size="small" placeholder="Enter Your Email ID" variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} item>
                                    <TextField type="password" label="Password" size="small" placeholder="Enter Your Password" variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} item>
                                    <TextField type="password" size="small" label="Conform Password" placeholder="Enter Your Conform Password" variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} item>
                                    <TextField type="number" size="small" label="Mobile no" placeholder="Enter Your Mobile no" variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} item>
                                    <Button type="Submit" size="small" variant="contained" color="primary" fullWidth>Submit</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
export default Form;
