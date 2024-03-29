import { Typography, Grid, Card, CardContent, TextField } from "@mui/material";

import { Table } from "reactstrap";
import { VscFiles, HiOutlinePencil } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'

const Tablepayment = () => {
    return (
        <div className="content">
            <Typography gutterBottom variant="h4">
                Offline Bank Payment
            </Typography>
            <Card style={{ margin: '0 auto' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={3} item>
                                <TextField type="text" size="small" placeholder="Search..." fullWidth required />
                            </Grid>

                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: '600px' }}>
                                <VscFiles size={30} /><PiFileX size={30} /><LuFileSpreadsheet size={30} /><AiOutlineFilePdf size={30} /><RiFileExcel2Line size={30} />
                            </div>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Request ID</th>
                                        <th>Admission No</th>
                                        <th>Name</th>
                                        <th>Class</th>
                                        <th>Payment Date</th>
                                        <th>Submit Date</th>
                                        <th>Amount ($)</th>
                                        <th>Status</th>
                                        <th>Status Date</th>
                                        <th>Payment ID</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default Tablepayment;