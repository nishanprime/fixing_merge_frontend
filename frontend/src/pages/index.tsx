import type { NextPage } from 'next';
import AdminLayout from './layouts/AdminLayout';

const Home = () => {
  return <>Hi</>;
  return <div className="">Hi</div>;
};

Home.layout = () => {
  return (
    <AdminLayout title="Dashboard">
      <Home />
    </AdminLayout>
  );
};
export default Home;
