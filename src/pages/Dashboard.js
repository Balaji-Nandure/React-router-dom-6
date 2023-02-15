/** @format */

const Dashboard = ({ user }) => {
    return (
        <section className='section'>
            <h2>Dashboard</h2>
            <h4>{user?.name}</h4>
            <h4>{user?.email}</h4>
        </section>
    );
};
export default Dashboard;
