import { Row, Col, Button, Input, Card, Table } from 'reactstrap';
import { Select } from "@mui/material";
import { VscFiles } from 'react-icons/vsc'
import { PiFileX } from 'react-icons/pi'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { RiFileExcel2Line } from 'react-icons/ri'

const MarksDivision = () => {
    return (
        <div className="content">
            <Row>
                <Col md="4">
                    <Card style={{ padding: "20px" }}>
                        <h3>Add Marks Division</h3>
                        <label>Division Name</label>
                        <Select size="small" />
                        <label>Percent From</label>
                        <Input type="text" />
                        <label>Percent Upto</label>
                        <Input type="text" />
                        <label>Description</label>
                        <Input type="textarea" cols="4" />
                        <Button style={{ marginLeft: "140px", marginTop: "20px", width: "150px" }}>Save</Button>
                    </Card>
                </Col>

                <Col md="8">
                    <Card style={{
                        padding: "20px"
                    }}>
                        <h3>Division List</h3>
                        <Row>
                            <Col><Input type="search" placeholder="Search..." style={{ width: "300px" }} /></Col>
                            <Col style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}><VscFiles size={20} /><PiFileX size={20} /><LuFileSpreadsheet size={20} /><AiOutlineFilePdf size={20} /><RiFileExcel2Line size={20} /></Col>
                        </Row>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Division Name</th>
                                    <th>Percentage From</th>
                                    <th>Percent Upto</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default MarksDivision;