import React from 'react'
import TutorHeader from '../../sharedComponents/TutorHeader'
import TutorSidebar from '../../sharedComponents/TutorSidebar'
import { Col,Row } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <>
    {/* <TutorHeader /> */}
    <Row>
      <Col className="col-4 col-md-3 col-xl-2">
        {/* <TutorSidebar /> */}
      </Col>
      <Col md={9} className="content-col">
        <p className="text-center p-5 fs-3">
         All data will be here
        </p>
      </Col>
    </Row>
  </>
  )
}

export default Dashboard