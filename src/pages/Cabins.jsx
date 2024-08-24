import Row from "../ui/Row";
import Heading from "../ui/Heading";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cabins</Heading>
      <p>Sort | Filter</p>
      </Row>
      <Row type="vertical">
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
