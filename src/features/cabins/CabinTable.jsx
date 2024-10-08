import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useGetCabins from "./hooks/useGetCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

function CabinTable() {
  const { cabins, isLoading } = useGetCabins();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table role="table" columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={cabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
